import React, { useEffect } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { TiStar } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { AddFeatures, DeleteFeatures, GetProduct,  } from "../../../redux/reducer/FoodSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
const MenuCard = ({ el }) => {
  const {features}=useSelector((s)=>s.main)
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const Some =features.some((som)=>som._id===el._id)
  const Del=features.filter((fil)=>fil._id!==el.id)
  const AddtoFeatures=()=>{
    if(Some){
    dispatch(DeleteFeatures(Del))
    }else{
  dispatch(AddFeatures(el))
    }

  }
  async function AddtoProduct() {
    try {
      let { data } = await axios.get(
        "https://api.elchocrud.pro/api/v1/388a94b659695a22ac01f41c65fc10ac/toolkit-food"
      );
      dispatch(GetProduct(data));
    } catch (error) {
      alert(error.message);
    }
  }

  async function delProduct(_id) {
    try {
      await axios.delete(
        `https://api.elchocrud.pro/api/v1/388a94b659695a22ac01f41c65fc10ac/toolkit-food/${_id}`
      );
    } catch (error) {
      alert(error.message);
    }
    AddtoProduct();
  }

  useEffect(() => {
    AddtoProduct();
  }, []);
  return (
    <div>
      <div className="w-[360px] h-[446px] bg-gray-500 border-solid border-[1px] border-gray-200 bg-white flex flex-col relative">
        <a
          className="text-[30px] absolute z-[90] cursor-pointer left-[2px]"
          onClick={() => delProduct(el._id)}
        >
          <IoCloseSharp />
        </a>

        <Zoom>
          <img
            className="w-full h-[264px] rounded-tl-[80px]  rounded-br-[80px object-contain "
            src={el.url}
            alt="img"
          />
        </Zoom>
        <div className="flex mb-[10px] justify-between items-center">
          <h1
            onClick={() => navigate(`/details/${el._id}`)}
            className="text-[25px] font-[300] tracking-[1px] ml-[7px] hover:text-[#E3A008] cursor-pointer "
          >
            {el.name}
          </h1>

          <h1 className="font-[300] text-[25px] mr-[7px] text-[#DC780B]">
            {el.price}с
          </h1>
        </div>
        <p className="text-xs text-gray-500 font-[300] ml-[10px]">
          {el.description}
        </p>
        <div className="flex items-center justify-between mt-[15px] ">
          <button
            onClick={() =>AddtoFeatures() }
            className="bg-[#DC780B] text-[25px] text-white w-[36px] h-[34] rounded-[5px] ml-[10px]"
          >
            +
          </button>

          <div className="flex mr-[20px] text-[25px]">
            <a
              style={{
                color: el.rating >= 1 ? "yellow" : "black",
              }}
            >
              <TiStar />
            </a>
            <a
              style={{
                color: el.rating >= 2 ? "yellow" : "black",
              }}
            >
              <TiStar />
            </a>
            <a
              style={{
                color: el.rating >= 3 ? "yellow" : "black",
              }}
            >
              <TiStar />
            </a>
            <a
              style={{
                color: el.rating >= 4 ? "yellow" : "black",
              }}
            >
              <TiStar />
            </a>
            <a
              style={{
                color: el.rating === 5 ? "yellow" : "black",
              }}
            >
              <TiStar />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
