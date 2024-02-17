import React from "react";
import duffle from "../assets/Frame 461.png";
import vanity from "../assets/Frame 50.png";
import tote from "../assets/Frame 49.png";
import duffle2 from "../assets/Frame 13.png";
import laptop from "../assets/Frame 49 (1).png";
import messenger from "../assets/Frame 49 (2).png";
import sling from "../assets/Frame 22.png";
import handbag from "../assets/Frame 20.png";
import bucket from "../assets/Frame 46.png";
const Items = () => {
  const data = [
    { img: duffle, desc: "All Bags" },
    { img: vanity, desc: "Vanity Pouch" },
    { img: tote, desc: "Tote Bag" },
    { img: duffle2, desc: "Duffle Bag" },
    { img: laptop, desc: "Laptop Sleeve" },
    { img: messenger, desc: "Messenger Bags" },
    { img: sling, desc: "Slings Bgs" },
    { img: handbag, desc: "HandBags" },
    { img: bucket, desc: "Bucket Bag" },
  ];
  return (
    <div className="flex md:gap-[56px] justify-evenly gap-2 pt-[32px] overflow-scroll">
      {data.map((e, i) => (
        <div key={i} className="lg:h-[129px]">
          <img
            src={e.img}
            alt={e.desc}
            className="lg:h-[96px] md:h-[40px] h-[20px] object-cover m-auto"
          />
          <p className="lg:text-[13px] text-[7px] leading-[16.25px] text-[#E5DFD9] text-center pt-[18px] encodefont">
            {e.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Items;
