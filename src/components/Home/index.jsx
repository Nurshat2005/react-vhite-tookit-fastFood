import React from "react";
import scvorodka from "../../assets/image/scvordka.svg";
import home from "../../assets/image/home.svg";
import man from "../../assets/image/man.svg";
import emoji from "../../assets/image/emoji.svg";
import woman from "../../assets/image/woman.svg";
import Menu from "../Menu";
const Home = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className=" w-[855px]">
              <h1 className="text-[50px] font-[800] mt-[10px]">
                Making time a good time <br /> by making food the good <br />{" "}
                food.
              </h1>
              <p className="text-[#150C01] font-[400]">
                There are many things are needed to start the Fast Food
                Business. You need <br /> not only Just Food Stalls with Persons
                but also specialized equipment,
              </p>
              <div className="mt-[30px] flex items-center gap-[90px]">
                <button className="text-white bg-[#DC780B] w-[158px] h-[60px] rounded-[5px] font-[100]">
                  Order Now
                </button>
                <button className="text-[#DC780B] bg-[#ffff] border-solid border-[1.5px] border-[#DC780B] w-[158px] h-[60px] rounded-[5px] font-[100]">
                  Food Details
                </button>
              </div>
            </div>
            <div className="w-[801px] h-[670px]">
              <img className="w-full h-full" src={scvorodka} alt="img" />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-[10px] mt-[10px]">
            <h6 className="text-[#DC780B] font-[400]">Features</h6>
            <h1 className="text-black font-[500] text-[30px]">
              Food with a New Passion
            </h1>
          </div>
          <div className=" flex justify-between items-center mt-[40px]">
            <div className=" flex flex-col items-center justify-center gap-[20px]">
              <div className=" w-[70px] h-[70px] rounded-[50%] bg-[#8FA632] flex justify-center items-center">
                <img className="" src={home} alt="img" />
              </div>
              <h3 className="text-[26px] font-[500]">Quality Food</h3>
              <p className="leading-5 text-center text-[gray] font-[100] tracking-[2px]">
                It can be a very secure path to earn good <br />
                money and make you very successful <br /> creative entrepreneur.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div className="w-[70px] h-[70px] rounded-[50%] bg-[#E64D2E] flex justify-center items-center">
                <img src={man} alt="img" />
              </div>
              <h3 className="text-[26px] font-[500]">Food Delivery</h3>
              <p className="leading-5 text-center text-[gray] font-[100] tracking-[2px]">
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <div className="w-[70px] h-[70px] rounded-[50%] bg-[#DC780B] flex justify-center items-center">
                <img src={emoji} alt="img" />
              </div>
              <h3 className="text-[26px] font-[500]"> Super Taste</h3>
              <p className="leading-5 text-center text-[gray] font-[100] tracking-[2px]">
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
          </div>
          <div className="flex gap-[80px] items-center mt-[150px]">
            <div className="">
              <img className="rounded-[20px]" src={woman} alt="img" />
            </div>
            <div className="">
              <div className=" flex flex-col items-start justify-center">
                <h6 className="tracking-[2px] font-[500] text-[#DC780B] uppercase">
                  About us
                </h6>
                <h1 className="text-[35px] font-[500] mt-[30px] tracking-[2px] ">
                  Food Stalls with Persons but to <br />
                  Product marketing plane <br /> catlogues etc to.{" "}
                </h1>
                <p className="mt-[30px] text-[gray] font-[300] tracking-[2px]">
                  There are many things are needed to start the Fast Food
                  Business. <br /> You need not only Just Food Stalls with
                  Persons but also <br />
                  equipment make your marketing plane Effective.
                </p>
                <button className="w-[150px] h-[46px] bg-[#DC780B] text-white font-[300] rounded-[5px] mt-[30px] tracking-[2px]">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Menu />
    </>
  );
};

export default Home;
//
