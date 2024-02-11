import React from 'react'
import './Header'
import './Registration.css'
const Registration = () => {
  
  return (
    <>
     <div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
  </div>
 
  <form className="Container">
  <div className=" mb-3">
    <label for="exampleInputUserName" className="form-label">User Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your User name with anyone else.</div>
  </div>
  <div className=" mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <button type="submit" className="btn btn-primary mb-3">Submit</button>
</form>




    

    </>
  )
}

export default Registration
