import React from 'react';
import { FaGit, FaGithub, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import paymentImg1 from './assets/paymentImg1.png';

const Footer = () => {
    return (
        <div className="flex items-center justify-around bg-primary w-full text-white overflow-hidden">
            {/* section 1 */}
            <div className="m-auto justify-center items-center">
                <div className="flex flex-col gap-5">
                    <h2 className="text-5xl font-bold overflow-hidden">
                        Coders Cafe
                    </h2>
                    <p className="flex items-center text-2xl">Lorem ipsum dolor sit amet  aspernatur quisquam eligendi mollitia quod!</p>

                    <p className="flex gap-2 items-center text-2xl">
                        <FaPhoneAlt />
                        <span> +91 8923102179 </span>
                    </p>

                    <p className="flex gap-2 items-center text-2xl">
                        <FaLocationDot />
                        <span>Okhla, Delhi</span>
                    </p>
                </div>
            </div>

            {/* section 2*/}
            <div className="flex flex-col gap-5 justify-center items-center text-center">
                <h2 className="text-5xl font-bold overflow-hidden">Quick Links</h2>
                <div className="flex gap-5">
                    <div className="part1">
                        <ul>
                            <li className="text-center text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden ">Home</a></li>
                            <li className="text-center text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden ">About</a></li>
                            <li className="text-center text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden ">Contact us</a></li>
                            <li className="text-center text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden ">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="part2">
                        <ul>
                            <li className=" text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden">Home</a></li>
                            <li className=" text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden">About</a></li>
                            <li className=" text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden">Contact us</a></li>
                            <li className=" text-slate-300 flex items-center text-2xl hover:text-white"><a href="#" className="overflow-hidden">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className="flex flex-col gap-5 justify-center">
                <h2 className="text-5xl font-bold overflow-hidden">Follow Us
                </h2>
                <div className="flex gap-5">
                    <a href="https://github.com/amaan-malik1" className="overflow-hidden">
                        <FaFacebook className="text-3xl hover:scale-110 overflow-hidden" />
                    </a>
                    <a href="https://github.com/amaan-malik1" className="overflow-hidden">
                        <FaInstagram className="text-3xl hover:scale-110 overflow-hidden" />
                    </a>
                    <a href="https://github.com/amaan-malik1" className="overflow-hidden">
                        <FaTwitter className="text-3xl hover:scale-110 overflow-hidden" />
                    </a>
                    <a href="https://github.com/amaan-malik1" target='__blank' className="overflow-hidden">
                        <FaGithub className="text-3xl hover:scale-110 overflow-hidden" />
                    </a>
                </div>
                <div className="flex flex-col gap-5 space-y-3">
                    <p className="text-2xl overflow-hidden">Payment Methods</p>
                    <div className="images">
                        <img src={paymentImg1} alt="Payment-Img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
