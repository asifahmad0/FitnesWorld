import React from "react";
import heroImage from "../assets/img3.jpg";
import Navbar from "./Navbar";


function Hero() {
  return (
    <>
      <header className="relative max-w-[100dvw] h-[100dvh] text-white">
        <img
          src={heroImage}
          className="absolute w-[100%] h-[100%] -z-1"
          alt="Hero Image"
        />
        <Navbar />
        

        <aside
          className=" absolute sm:w-[100%] h-[100%] md:w-[30%] p-2 left-10
         flex flex-col justify-center gap-3 "
        >
          <h1 className=" text-6xl md:text-8xl font-bold">LETS GET MOVING</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            laboriosam nostrum at deleniti porro, soluta recusandae ex facere
            vitae fugit.
          </p>
        </aside>
      </header>
    </>
  );
}

export default Hero;
