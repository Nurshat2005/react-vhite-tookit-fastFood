import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";


const Details = () => {
    const {id}=useParams()
    const ide = Number(id)
    const {food}=useSelector((s)=>s.main)
let details=food.find((el)=>el._id===ide)
    return (
      <div className=" mt-[100px]   ">
        <div className="container ">
          <center>
            <div className="flex flex-col items-center w-[40%] h-[30%] border-solid border-[2px] border-black justify-center rounded-[12px]">
              <div className=" w-[100%] object-cover flex items-center justify-center">
                <Zoom >
                  <img
                    width={500}
                    src={details.url}
                    alt="image"
                    className="border-b-[2px] border-solid border-black"
                  />
                </Zoom>
              </div>
              <h1 className="text-[70px] text-[#DC780B]">{details.name}</h1>
              <h1 className="text-red-500 text-[30px]">{details.price}c</h1>
            </div>
          </center>
        </div>
      </div>
    );
};

export default Details;