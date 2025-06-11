import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import priceIMG from "../assets/pricing.jpg"

function Price() {

    const pricing = [
    {
      imgUrl: priceIMG,
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: priceIMG,
      title: "HALF YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: priceIMG,
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];
  return (
    <>
      <section className=" pb-7 p-5 text-center">
      <h1 className="md:text-5xl text-2xl font-bold">ELITE EDGE FITNESS PLANS</h1>
      <div className="overflow-hidden mt-3 p-3 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center ">
        {pricing.map((element) => {
          return (
            <div className=" relative w-[300px] h-[500px] text-left mt-3 shadow-2xl shadow-black " key={element.title}>
              <img className=" absolute w-[100%] h-[100%] -z-2 " src={element.imgUrl} alt={element.title} />
              <div className="title text-4xl w-[100%] text-white font-bold p-3">
                <h1 className="text-red-600">{element.title}</h1>
                <h1 className="text-red-600">PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className=" description absolute h-[60%] w-[100%] bg-white flex flex-col justify-around bottom-0 p-3">
                <p className="flex">
                  <Check /> Equipment
                </p>
                <p className="flex ">
                  <Check /> All Day Fre Training
                </p>
                <p className="flex ">
                  <Check /> Free Restroom
                </p>
                <p className="flex ">
                  <Check /> 24/7 Skilled Support
                </p>
                <p className="flex ">
                  <Check /> 20 Days Freezing Option
                </p>
                {/* <Link to={"/"}>Join Now</Link> */}
                <button className="px-5 py-3 bg-red-600 text-xl text-white cursor-pointer hover:bg-red-500">Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
}

export default Price;
