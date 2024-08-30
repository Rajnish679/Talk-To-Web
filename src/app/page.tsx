"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [url, setUrl]= useState("");

  console.log(url);

  
const handlechange=(event)=>{
  setUrl(event.target.value);
  console.log(url);


}




  return (
    <>
      <div className="text-center items-center h-screen w-full content-center">
        <h3 className="font-bold text-medium text-zinc-300">WELCOME TO</h3>
        <h1 className="text-4xl mt-4 font-bold bg-gradient-to-r from-orange-600 via-zinc-300 to-sky-600 inline-block text-transparent bg-clip-text">Talk To Web </h1>
        <div>
          <input onChange={handlechange} type="text" placeholder="Type Website / page url..." className="outline-black mt-6 px-6 w-96  py-3 rounded-3xl bg-zinc-500 border-[3px] border-blue-500 " />


        </div>

        <div className="relative inline-flex  group mt-7">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a  href={`http://localhost:3000/`+url} 
            className="relative inline-flex items-center justify-center px-10 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-zinc-300 hover:border-sky-700 hover:text-zinc-800"
            role="button">Search
        </a>
    </div>
        
      </div>
    </>
  );
}
