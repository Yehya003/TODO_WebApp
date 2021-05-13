import React from "react";
import Logout from "./auth/Logout";

const Navbar = () => {
  return(
    <div className="flex justify-between bg-indigo-400 p-8 text-white">
      <p className="font-bold text-lg">TODO App!</p>
      <Logout />
    </div>
  )
}

export default Navbar;