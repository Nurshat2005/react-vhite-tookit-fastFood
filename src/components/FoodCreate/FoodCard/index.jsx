import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { GetProduct } from "../../../redux/reducer/FoodSlice";
const FoodCard = () => {
  const ErrorMessage=()=>{
    toast.error("🤦Пожалуйста заполните все обязательные поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const {food}=useSelector((s)=>s.main)
  const [ProductName, setProductName] = useState("");
  const [ProductUrl, setProductUrl] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const dispatch = useDispatch()
  const CraeteProduct = () => {
    if (
      ProductName.trim() === "" ||
      ProductPrice.trim() === "" ||
      ProductUrl.trim() === "" ||
      ProductDescription.trim() === ""
    ) {
     ErrorMessage()
    } else {
      let newproduct = {
        name: ProductName,
        url: ProductUrl,
        price: ProductPrice,
        description: ProductDescription,
        rating: Math.random() * 5,
        quantity:1
      };
      axios.post(
        "https://api.elchocrud.pro/api/v1/388a94b659695a22ac01f41c65fc10ac/toolkit-food",
        newproduct
      );
      setProductName("");
      setProductPrice("");
      setProductUrl("");
      setProductDescription("");
    }
  };

  
  return (
    <div className="flex flex-col items-center justify-center gap-[70px]">
      <div className="flex gap-[40px] flex-col items-center justify-center w-[400px]">
        <input
          value={ProductName}
          onChange={(e) => setProductName(e.target.value)}
          className="text-[#DC780B] border-b–[3px] border-solid outline-none border-[#DC780B] text-[20px] w-full font-[100] border-b-[2px] p-[10px]"
          type="text"
          placeholder="Product Name"
        />
        <input
          value={ProductUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          className="text-[#DC780B] border-b–[3px] border-solid outline-none border-[#DC780B] text-[20px] w-full font-[100] border-b-[2px] p-[10px]"
          type="text"
          placeholder="Product Url ..."
        />
        <input
          value={ProductPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="text-[#DC780B] border-b–[3px] border-solid outline-none border-[#DC780B] text-[20px] w-full font-[100] border-b-[2px] p-[10px]"
          type="number"
          placeholder="Product Price"
        />
        <input
          value={ProductDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="text-[#DC780B] border-b–[3px] border-solid outline-none border-[#DC780B] text-[20px] w-full font-[100] border-b-[2px] p-[10px]"
          type="text"
          placeholder="Product Description ..."
        />
      </div>
      <button
        onClick={() => CraeteProduct()}
        className=" font-[100] text-[#fff] bg-[#DC780B] rounded-[5px] text-[30px] w-[160px] h-[50px]"
      >
        Save
      </button>
      <ToastContainer />
    </div>
  );
};

export default FoodCard;
