import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../redux/reducer/FoodSlice";
import MenuCard from "./MenuCard";
import axios from "axios";

const Menu = () => {
  const { food } = useSelector((s) => s.main);

  const dispatch = useDispatch();
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
  useEffect(() => {
    AddtoProduct();
  }, []);
  return (
    <div>
      <div className="container">
        <div className=" flex items-center justify-center flex-col mt-[40px] gap-[20px]">
          <h6 className="uppercase text-[15px] tracking-[2px] text-[#DC780B]">
            Menu
          </h6>
          <h1 className="capitalize text-[35px] font-[500]">
            Food Full of treaty Love
          </h1>
          <p className="text-center text-gray-500 font-[200] tracking-[1px] text-xs ">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls <br /> with Persons but also
            specialized equipment, Skills to manage Customers,
          </p>
        </div>
        <div className="mt-[50px] flex flex-wrap gap-[132px]">
          {food.map((el) => (
            <MenuCard el={el} />
          ))}
        </div>
        <center>
          <button className="mt-[100px] bg-[] w-[200px] rounded-[5px] p-[4px] h-[50px] text-[#DC780B] text-xl border-solid border-[1px] border-[#DC780B] bg-[#FFFFFF] mb-[100px]">
            Learn More
          </button>
        </center>
      </div>
    </div>
  );
};

export default Menu;
