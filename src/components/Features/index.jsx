import React from "react";
import MenuCard from "../Menu/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DeleteFeatures, decrement,  increment } from "../../redux/reducer/FoodSlice";

const Features = () => {
const {features}=useSelector((s)=>s.main)
const dispatch=useDispatch()
  return (
    <div>
      <div className="container">
        <div className="flex gap-[130px] flex-wrap mt-[50px]">
          {features.map((el) => (
            <div className=" w-[40%] h-[150px] bg-white border-[2px] border-solid border-[black] rounded-[10px] flex items-center relative">
              <a
                onClick={() => dispatch(DeleteFeatures(el._id))}
                className="text-[25px] cursor-pointer text-[#DC780B] absolute right-[2px] bottom-[2px]"
              >
                <RiDeleteBin6Line />
              </a>
              <div className=" flex items-center">
                <img className="w-[120px] bg-gray-300" src={el.url} alt="img" />
              </div>
              <div className="flex flex-col items-start justify-between">
                <h1 className="text-[20px] font-[400] text-black tracking-[2px] ml-[20px]">
                  {el.name}
                </h1>
                <h6 className="text-red-500 mb-[20px] ml-[20px] mb-[20px]">
                  {el.price * el.quantity} сом
                </h6>
                <div className="flex gap-[15px]">
                  <button
                    className="text-white text-[30px] bg-[#DC780B] w-[30px] rounded-[2px] h-[30px] flex items-center justify-center ml-[20px]"
                    onClick={() => dispatch(increment(el))}
                  >
                    +
                  </button>
                  <p className="text-black text-[20px] font-[400]">
                    {el.quantity}
                  </p>
                  <button
                    onClick={() => dispatch(decrement(el))}
                    className="text-white text-[30px] bg-[#DC780B] w-[30px] rounded-[2px] h-[30px] flex items-center justify-center"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
