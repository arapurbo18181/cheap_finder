import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [ToggleUserMenu, setToggleUserMenu] = useState(0);
  const [UserEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const [IsAuth, setIsAuth] = useState();
  const [Products, setProducts] = useState([]);
  const [FeaturedProducts, setFeaturedProducts] = useState([]);
  const [SearchHistory, setSearchHistory] = useState([]);
  const [ImageSearchAllProducts, setImageSearchAllProducts] = useState([]);
  const [ImageSearchResult, setImageSearchResult] = useState([]);
  const location = useLocation();

  const BASE_URL = "http://ismamk.pythonanywhere.com/api";

  const checkAuthentication = async () => {
    const session = sessionStorage.getItem("session_id");
    try {
      const response = await fetch(
        `${BASE_URL}/is_authenticated`,
        {
          method: "POST",
          credentials: "include",
          body: session,
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.is_authenticated) {
          setIsAuth(true);
          setUserEmail(result.email);
        } else {
          setIsAuth(false);
        }

        console.log("Is authenticated:", result);
        if (result.is_authenticated && location.pathname !== "/profile") {
          navigate("/home");
        } else if (
          !result.is_authenticated &&
          location.pathname == "/profile"
        ) {
          navigate("/home");
        }
      } else {
        console.error("Failed to check authentication:", response.statusText);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success === true) {
        sessionStorage.setItem("session_id", result.session_id);
        console.log(result);
        console.log(window.session_id);
        navigate("/home");
        e.target.reset();
        Swal.fire({
          title: "Login Successful",
          text: "Congratulations",
          icon: "success",
        });
      } else {
        e.target.reset();
        Swal.fire({
          title: "Failed to log in",
          text: "Try Again",
          icon: "error",
        });
      }
    } catch (error) {
      e.target.reset();
      Swal.fire({
        title: "Failed to log in",
        text: "Try Again",
        icon: "error",
      });
    }
  };

  const signup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`${BASE_URL}/create_user`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Handle the success response
        e.target.reset();
        navigate("/");
        Swal.fire({
          title: "Signed Up Successfully",
          text: "Congratulations",
          icon: "success",
        });
      } else {
        console.error("Failed to create user");
        e.target.reset();
        Swal.fire({
          title: "Failed to Sign up",
          text: "Try again",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error during user creation:", error);
    }
  };

  const logout = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/logout`);

      if (response.ok) {
        const result = await response.json();
        window.session_id = result.session_id;
        console.log("Is authenticated:", result);
        sessionStorage.clear();
        navigate("/home");
        checkAuthentication();
        Swal.fire({
          title: "Logout Successful",
          text: "Congratulations",
          icon: "success",
        });
      } else {
        console.error("Failed to check authentication:", response.statusText);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  const search = async (e, isButtonSearch = false) => {
    e.preventDefault();
    const session = sessionStorage.getItem("session_id");

    let formData;
    let query;

    if (isButtonSearch) {
      // Handling the first form with a button
      const productForm = e.target.closest("form");
      query = productForm.querySelector("#query").value.trim();
      formData = new FormData(productForm);
    } else {
      // Handling the second form with a text input and search button
      formData = new FormData(e.target);
      query = formData.get("query").trim();
    }

    if (query === "") {
      // If the input is empty, show an alert and return
      Swal.fire({
        title: "Please write something",
        text: "Try again",
        icon: "info",
      });
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/search`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: session, // Assuming it's a Bearer token
        },
      });

      const result = await response.json();
      setProducts(result.products);
      setImageSearchResult(result.products);
      checkAuthentication();
      if (IsAuth) {
        history();
      }
      e.target.reset();
    } catch (error) {
      console.error("Request error:", error);
      e.target.reset();
    }
  };

  const history = async (e) => {
    // e.preventDefault();
    const session = sessionStorage.getItem("session_id");
    console.log(session);

    try {
      const response = await fetch(
        `${BASE_URL}/get_search_history`,
        {
          method: "POST",
          body: session,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setSearchHistory(result.history);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  const getProducts = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/all_products`);

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setProducts(result.products);
        setFeaturedProducts(result.products);
        setImageSearchAllProducts(result.products);
      } else {
        console.error("Failed to check authentication:", response.statusText);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        checkAuthentication,
        login,
        signup,
        logout,
        IsAuth,
        ToggleUserMenu,
        setToggleUserMenu,
        search,
        history,
        UserEmail,
        getProducts,
        Products,
        FeaturedProducts,
        SearchHistory,
        ImageSearchAllProducts,
        ImageSearchResult,
        setImageSearchResult,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
