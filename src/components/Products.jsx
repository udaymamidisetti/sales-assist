import React, { useEffect, useState } from "react";
import icon from "../assets/Vector 4.png";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(
        "https://sales-assist-backend.vercel.app/getAll"
      );
      const data = await responce.json();
      setdata(data);
      setloading(true);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between pt-[32px] pb-[40px]">
        <p className="text-[#E5DFD9] font-semibold md:text-[16px] text-[10px] leading-[20px] encodefont">
          Bags<span className="h-[5px] w-[5px]"> &#8226; </span>Backpacks
        </p>
        <div className="flex gap-[14px] items-center">
          <p className="text-[#E5DFD9] font-semibold md:text-[16px] text-[10px] leading-[20px]">
            13 products
          </p>
          <img src={icon} alt="icon" />
        </div>
      </div>
      <ProductCard data={data} loading={loading} />
      <div className="pt-[39.57px]">
        <ProductCard data={data} loading={loading} />
      </div>
    </>
  );
};

export default Products;
