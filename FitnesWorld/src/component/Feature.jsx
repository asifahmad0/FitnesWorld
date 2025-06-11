import React from "react";
import Fimg from "../assets/img5.jpg";

function Feature() {

  let featur_list=[
    {
      title:"Quality Equipments",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et rem nostrum velit itaque odio consequatur"
    },
    {
      title:"Personel Trainer",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et rem nostrum velit itaque odio consequatur"
    },
    {
      title:"Dite Advise",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et rem nostrum velit itaque odio consequatur"
    },
  ];




  return (
    <>
      <section className=" features w-[100dvw] h-[100dvh] xl:p-5 ">
        <h1 className=" relative text-7xl font-bold md:mb-5 w-[300px] mt-2 mb-3 ">
          <span className=" absolute block bg-black w-[100%] h-[5px] -bottom-3"></span>
          Features
        </h1>

        <div className="relative xl:flex flex-col w-[100dvw] h-[90dvh] xl:w-[95dvw] xl:h-[500px] mt-5 border border-black">
          <aside className="absolute w-[100%] h-[35%] md:h-[50%] xl:w-[40%] xl:h-[100%] overflow-hidden ">
            <img
              src={Fimg}
              className="w-[100%] h-[100%] p-6 "
              alt="Features Image"
            />
          </aside>

          <aside className="absolute w-[100%] h-[65%] md:h-[50%] xl:w-[60%] xl:h-[100%] flex flex-col justify-around p-5 bottom-0 xl:right-0">
            
            {featur_list.map((elemen)=>{
              return(
              <div className=" hover:bg-red-500 hover:text-white py-2 px-5">
                <h1 className="text-2xl font-bold ">{elemen.title}</h1>
                <p> {elemen.desc} </p>
            </div>)
            })}
            
          </aside>
        </div>
      </section>
    </>
  );
}

export default Feature;
