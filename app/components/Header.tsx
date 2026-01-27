"use client"

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";


export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
return(
   <header className="relative z-50 w-full p-3 md:px-6 md:py-4 flex items-center justify-between">
        <div className="text-[22px] font-semibold"> 
            <h1 className="flex gap-1 items-center"> <Plus size="25px" className="font-bold"/> BloomFi</h1>
        </div>

        <nav className="hidden md:flex gap-7 text-[16px] text-gray-800">
            <Link href="#"> USD bloom</Link>
            <Link href="#"> Business</Link>
            <Link href="#">Treasury</Link>
            <Link href="#">Developers</Link>
            <Link href="#">Join us</Link> 
        </nav>

        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-full text-sm">Launch BETA</button>

         <button 
             onClick={() => {setIsOpen(true)}}
             className="absolute right-5  p-2 text-3xl cursor-pointer lg:hidden "
             aria-label="Open menu"> 
             <div className="md:hidden flex flex-col gap-1"> 
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span> 
             </div>
                 
        </button>     
           {isOpen && (
               <div className="fixed inset-0 flex justify-end bg-black/40 lg:hidden">
                    <div className= " backdrop-blur-lg shadow-lg transition-transform duration-300 translate-x-0 ease-in-out z-40 h-full w-full px-6 py-3 flex flex-col">
                       <button
                        onClick={() => setIsOpen(false)}
                        className="self-start p-2 text-2xl hover:text-red-500 cursor-pointer top-0"
                        aria-label="Close search menu">✕</button>

                        <nav className="flex flex-col p-6 gap-6 text-[16px]">
                            <Link href="#"> USD bloom</Link>
                            <Link href="#"> Business</Link>
                            <Link href="#">Treasury</Link>
                            <Link href="#">Developers</Link>
                            <Link href="#">Join us</Link> 
                        </nav>

                        <button className="mt-4 bg-black text-white py-2 rounded-full">Launch BETA</button>
                        

                    </div>
               </div>
           )}
       
    </header>
);
}