import React, { useEffect, useState } from "react";
import { useApi } from "../context/ServerContext";
import ImageSearch from "./ImageSearch";
import SearchHistory from "./SearchHistory";
import UnderConstraction from "./UnderConstraction";
import UserDashboard from "./UserDashboard";
import UserSidebar from "./UserSidebar";

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { checkAuthentication, ToggleUserMenu } = useApi();
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="w-full sm:px-0 flex justify-start items-center">
        <div className="flex flex-col xl:flex-row justify-start items-start w-full">
          <div className="w-[20vw] h-full sticky top-[4.6rem]">
            <UserSidebar />
          </div>
          {/* <div className="w-[20vw]">
              <UserSidebar />
            </div> */}
          <div className="w-full xl:w-[78vw]">
            {ToggleUserMenu === 0 && <UserDashboard />}
            {ToggleUserMenu === 1 && <SearchHistory />}
            {ToggleUserMenu === 2 && (
              <UnderConstraction text={"Barcode Search"} />
            )}
            {ToggleUserMenu === 3 && <ImageSearch />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
