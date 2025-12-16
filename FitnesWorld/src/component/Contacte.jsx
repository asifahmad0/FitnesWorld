import React, { useState } from "react";
import CImg from "../assets/contact.jpg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";




function Contacte(){
    

    const [uname, setname] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loding, setloding] = useState(false)

    const submited = async(e) =>{
        e.preventDefault();
        setloding(true)
        try{
            const {data} = await axios.post(import.meta.env.VITE_EMAIL_URL,
                {
                    uname,
                    mobile,
                    email,
                    message,
                    
                }, 
                {
                    withCredentials:true,
                    headers:{"Content-Type": "application/json"}
                }
            );
            setname("")
            setEmail("")
            setMobile("")
            setMessage("")
            toast.success(data.message)
            setloding(false)
        }catch(error){
            toast.error(error.message)
            setloding(false)
        }
        console.log(uname)
        console.log(mobile)
        console.log(email)
        console.log(message)

    }
    


    return <>
    <section className="relative w-[100dvw] h-[100dvh]">
        <img src={CImg} className="  absolute w-[100%] h-[100%] -z-2 " alt="" />
        <div className="cimg absolute w-[95%] h-[100%] md:p-3 grid ">
            <div className="right grid xl:place-items-end ">
                
                <form onSubmit={submited} action="" className="md:pl-0 absolute w-[100%] h-[90%] xl:w-[400px] xl:h-[600px] xl:mr-[100px] text-white flex flex-col justify-around p-3 ">
                    <h1 className="text-red-500 text-3xl font-bold">Contact Us</h1>

                    <input value={uname} onChange={(e)=>setname(e.target.value)} name="name" type="text" placeholder="Full Name" className="p-3 border-b border-red-500 outline-none"/>
                    <input value={mobile} onChange={(e)=>setMobile(e.target.value)} name="mobile" type="mobile" placeholder="Mobile No" className=" p-3 border-b border-red-500 outline-none"/>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" type="email" placeholder="Email" className=" p-3 border-b border-red-500 outline-none"/>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message" id="" placeholder=" Message" className=" p-3 border-b border-red-500 outline-none"></textarea>
                    <button type="submit" className=" p-3 text-white border border-red-500 cursor-pointer hover:bg-red-500">Send</button>

                </form>
            </div>
        </div>

    </section>
    </>
}

export default Contacte