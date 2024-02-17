import React from "react";
import bag from "../assets/Group 450.png";
import ClipLoader from "react-spinners/ClipLoader";

const ProductCard = (props) => {
  const { data, loading } = props;
  return (
    <>
      {loading ? (
        <div className="flex gap-6 md:gap-0 md:justify-between flex-wrap justify-center">
          {data.map((e, i) => (
            <div
              className="w-[280.15px] bg-[#141414] rounded-bl-[17.08px] rounded-br-[17.08px]"
              key={i}
            >
              <img
                src={e.img}
                alt="img"
                className="w-[288.39px] h-[432.53px] rounded-tl-[6.59px] rounded-tr-[6.59px] object-cover"
              />
              <p className="font-semibold text-[20.5px] leading-[25.62px] text-[#E5DFD9] text-center pt-[13.67px] encodefont">
                {e.desc}
              </p>
              <div className="w-[95%] m-auto pt-[10.67px] flex justify-between">
                <p className="flex gap-[5px] items-center encodefont">
                  <span className="text-[18.79px] font-bold leading-[23.49px] text-[#E5DFD9]">
                    &#8377;
                  </span>
                  <span className="text-[18.79px] font-bold leading-[23.49px] text-[#E5DFD9]">
                    {e.price}
                  </span>
                  <span className="text-[11.96px] leading-[14px] text-[#E5DFD9]">
                    {e.off}
                  </span>
                  <span className="text-[#2FC14F] text-[11.96px] leading-[14px]">
                    {e.discount}
                  </span>
                </p>
                <img
                  src={bag}
                  alt="bag"
                  className="w-[35.87px] h-[43.45px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[483px]">
          <ClipLoader
            color={"#ffffff"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
