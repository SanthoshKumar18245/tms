import React from "react";
import loginBG from "../images/Login/loginBG.png";

function Login() {
  return (
    <div
      className="h-[100vh] text-white"
      style={{
        backgroundImage: `url(${loginBG})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <img src={loginBG} alt="" />
        <p>Login to Sampat</p>
      </div>
      {/* container */}
      <div className="rounded-md bg-gray-600 h-[50vh]"></div>
    </div>
  );
}

export default Login;
