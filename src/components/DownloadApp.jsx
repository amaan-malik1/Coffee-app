import React from 'react'
import downBgImg from './assets/downBgImg.png';
import appleD from './assets/appleD.png';
import googleD from './assets/googleD.png';


const bgImg = {
    backgroundImage: `url(${downBgImg})`,
    backgroundSize: "cover",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
};


const DownloadApp = () => {
    return (
        <div className="container p-10 m-auto">
            <div style={bgImg} className="flex justify-center items-end flex-col w-[90%] h-[50vh] m-auto bg-slate-300 rounded-md p-10">
                <div className="flex flex-col text-center gap-5 ">

                    <h2 className="text-4xl text-primary font-semibold overflow-hidden">Download the app</h2>


                    <p className="text-xl text-slate-800 overflow-hidden w-[90%] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>


                    <div className="flex justify-center items-center gap-5 overflow-hidden">
                        <a href="https://portfolio-two-nu-45.vercel.app/" className="overflow-hidden">
                            <img src={appleD} alt="apple-store" className=" img-shadow3 w-[200px] cursor-pointer hover:scale-105  overflow-hidden transition-all duration-200" />
                        </a>

                        <a href="https://portfolio-two-nu-45.vercel.app/" className="overflow-hidden">
                            <img src={googleD} alt="google-store" className=" img-shadow3 w-[200px] cursor-pointer hover:scale-105  overflow-hidden transition-all duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DownloadApp