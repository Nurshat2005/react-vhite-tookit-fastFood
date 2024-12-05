import React from "react";
import { Link, useNavigate } from "react-router-dom";
import food from "./.../.../..../../.././././././././/./././.././../../assets/image/foodimages.svg";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="gap-[50px] flex items-center mt-[30px]  ">
            <img src={food} alt="image" />
            <h1 className="text-[#DC780B]">
              <Link to={"/"}>Home</Link>
            </h1>
            <Link className="text-[gray] font-[300]" to={"/aboutus"}>
              About us
            </Link>
            <Link className="text-[gray] font-[300]" to={"/menu"}>
              Menu
            </Link>
            <Link className="text-[gray] font-[300]" to={"/features"}>
              Features
            </Link>
            <Link className="text-[gray] font-[300]" to={"/contactus"}>
              Contact us
            </Link>
          </div>
          <button
            onClick={() => navigate("/createfood")}
            className="w-[155px]  bg-[#DC780B] text-[#fff] rounded-[5px] h-[56px] font-[200]"
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
