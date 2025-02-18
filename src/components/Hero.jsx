import React, { useState } from 'react'
import BgImg from './assets/BgImg.png';
import coffee from './assets/coffee.png';
import '../App.css'
import Navbar from './Navbar';
import { motion } from 'framer-motion';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { use } from 'react';

const bgImg = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
    color: "white"
};

const Hero = () => {

    const [sidebar, setSidebar] = useState(false)
    return (
        <main style={bgImg}>
            <section className=" w-full ">
                <div className="conatiner">
                    {/* Navbar section  */}
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                    {/* Hero section  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  min-h-[850px]">
                        {/* text content section  */}
                        <div className="flex flex-col gap-5 text-orange-200">
                            <h1


                                className="text-5xl font-bold leading-tight ml-14 overflow-hidden">
                                Blvck Tumbler
                            </h1>
                            <div className="relative overflow-hidden px-10">
                                <div className="relative z-10 space-y-4 ">
                                    <h2 className="text-2xl overflow-hidden">Black Lifestyle Lovers,</h2>

                                    <p className="text-sm opacity-55 leading-loose overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae inventore possimus, nisi, expedita provident facere, similique quis doloremque minima unde deserunt quasi?</p>
                                </div>
                                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                            </div>
                        </div>
                        {/* hero cooffee img  */}
                        <div className="relative">
                            <img

                                src={coffee} alt="" className="relative z-40 h-[400px] md:h-[700px] img-shadow" />


                            {/* orange circle ring  */}
                            <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10">

                                {/* big text section  */}
                                <div className="absolute -top-20 left-[200px] z-[1]">
                                    <h2 className="text-gray-600/40 text-[140px] scale-150 leading-none font-bold">Black Tumbler</h2>
                                </div>

                            </div>
                        </div>

                        <div className="hidden-div flex flex-col gap-5 bg-gradient-to-r from-slate-700 to-slate-800 items-center justify-center text-center opacity-50 p-[3rem] rounded-full relative">
                            <h2 className="text-[130px] text-black font-bold text-8xl overflow-y-hidden">
                                Blavck Lifestyle,
                            </h2>
                            <p className="w-[70%] overflow-y-hidden w">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto soluta exercitationem beatae qui quae suscipit perspiciatis consectetur. Voluptates assumenda ullam dolor placeat dignissimos sequi doloribus. Quas totam ducimus inventore!</p>
                        </div>
                    </div>
      
         {/* menu section  */}
                     <div className="absolute top-0 ring-0 w-[140px] h-full z-10 ">
                        <div className="w-full h-full flex flex-col justify-center items-center gap-6 ">
                            {/* line  */}
                            <div className="w-[1px] h-[70px] bg-white">

                            </div>

                            {/* social icons  */}
                            <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                <FaFacebook className="text-2xl" />
                            </div>
                            <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                <FaInstagram className="text-2xl" />
                            </div>
                            <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                <FaTwitter className="text-2xl" />
                            </div>

                        </div>
                    </div> 
                   
                </div>
            </section>
        </main>
    )
}

export default Hero
