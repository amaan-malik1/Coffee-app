import React from 'react';
import hotCo from './assets/hotCo.png';
import blackCo from './assets/blackCo.png';
import wMap from './assets/wMap.png';

const Content = () => {
    return (
        <div className="container p-10 m-auto flex flex-col gap-[10rem]">
            <div className="flex flex-col justify-center items-center gap-10 min-h-[500px]">
                <div className="flex flex-col justify-center items-center w-[80%] gap-5 text-center">
                    <h2 className="text-4xl overflow-hidden font-semibold
                    ">Fresh and <span className="text-orange-500">Tasty coffee</span></h2>
                    <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, cupiditate eveniet molestiae esse impedit vitae quaerat. Deserunt assumenda nihil culpa.</p>
                </div>

                {/* coffee photo */}
                <div className="wrap-cls flex gap-5 justify-center items-center text-center p-5">
                    <div className="flex justify-center flex-col gap-1 text-center w-[80%]">
                        <img src={blackCo} alt="cup1" className="w-[300px] self-center img-shadow2 hover:scale-[1.04] " />
                        <h2 className="text-orange-500 text-3xl font-semibold overflow-hidden">
                            Black Coffee
                        </h2>

                        <p className="text-center w-[100%]">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>


                    <div className="flex justify-center flex-col gap-1 text-center w-[80%]">
                        <img src={hotCo} alt="cup1" className="w-[300px] self-center img-shadow2 hover:scale-[1.04] " />
                        <h2 className="text-orange-500 text-3xl font-semibold overflow-hidden">Hot Coffee</h2>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>


                    <div className="flex justify-center flex-col gap-1 text-center w-[80%]">
                        <img src={blackCo} alt="cup3" className="w-[300px] self-center img-shadow2 hover:scale-[1.04] " />
                        <h2 className="text-orange-500 text-3xl font-semibold overflow-hidden">Cold Coffee</h2>
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>


{/*             contact content here */}

            <div className=" flex justify-between items-center m-auto gap-10 p-10 w-[100%] max-md:flex-col max-md:text-center ">
                <div className="connect flex flex-col w-[50%] gap-10 ">
                    <h2 className="text-4xl overflow-hidden font-semibold w-[80%]">
                        Buy our products from anywhere
                    </h2>

                    {/* form for contact  */}
                    <div className="flex flex-col gap-5 max-md:p-4">
                        <div className="flex gap-5 max-md:p-4">
                            <input type="text" placeholder='Name' className="border border-black p-2 rounded-md w-[120px]" />
                            <input type="email" placeholder='Email' className="border border-black p-2 rounded-md w-[280px]" />
                        </div>
                        <div className="flex gap-5 max-md:p-4">
                            <input type="text" name="" id="" placeholder='Country' className="w-[200px] border border-black p-2 rounded-md" />
                            <input type="text" name="" id="" placeholder='Zipcode' className="w-[200px] border border-black p-2 rounded-md" />

                        </div>
                    </div>

                    {/* btn order  */}
                    <div>
                        <button className="font-semibold text-2xl text-white bg-orange-500 hover:bg-orange-400 w-[78%] p-2 rounded-md ">Order</button>
                    </div>
                </div>

                <div className="worldMap f">
                    <img src={wMap} alt="" className="w-[550px]" />
                </div>


            </div>
        </div>
    )
}

export default Content
