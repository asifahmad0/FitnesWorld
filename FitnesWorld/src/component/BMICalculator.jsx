import React, { useState } from "react";
import { toast } from "react-toastify";
import BMIimg from "../assets/bmi.jpg"

const BMICalculator = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
        

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      alert( "Please enter valid height, weight and gender. " );
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advide from a healthcare provider." );
      alert( "You are underweight. Consider seeking advicde from a healthcare provider. " );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success( "You have normal weight. Keep maintaing a healthy lifestyle.");
      alert( "You have normal weight. Keep maintaing a healthy lifestyle." );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advide from a healthcare provider.");
      alert( "You are overweight. Consider seeking advide from a healthcare provider." );
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist..");
      alert( "You are overweight. Consider seeking advide from a healthcare provider." );
    }
        // console.log(height)
        // console.log(weight)
        // console.log(gender)
        // console.log(bmi)
  };

  return (
    <section className="bmi relative p-2 text-center w-[100dvw] md:px-7 h-[100dvh] mt-5 bg-red-500">
      <h1 className="text-4xl text-white font-bold">BMI CALCULATOR</h1>
      <div className="container absolute w-[95%] h-[90%] lg:w-[90%] lg:h-[90%] mt-3 p-2 grid xl:grid-cols-2 justify-around ">
        
        <div className="absolute w-[100%] h-[40%] xl:w-[60%] xl:h-[100%]">
          <img src={BMIimg} alt="bmiImage" className="absolute w-[100%] h-[100%]" />
        </div>

          <form onSubmit={calculateBMI} className="absolute md:my-12 w-[100%] h-[60%] xl:w-[450px] xl:h-[600px] xl:right-[20px]
          flex flex-col justify-around text-white  md:py-6 md:px-3 xl:p-3 bottom-0">

              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)} placeholder="Your Height"
                required
                className=" p-3 border-b-[2px] border-white outline-none"
              />
            
            
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Your Weight (Kg)"
                required
                className=" p-3 border-b-[2px] border-white outline-none"
              />

            
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-3 border outline-none"
              >
                <option value="" className="text-red-500">Select Gender</option>
                <option value="Male" className="text-red-500">Male</option>
                <option value="Female" className="text-red-500">Female</option>
              </select>
        
            <button type="submit" className=" p-3 border border-white cursor-pointer text-xl hover:bg-white hover:text-red-500">Calculate BMI</button>
          </form>
        
      </div>
    </section>
  );
};

export default BMICalculator;
