import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({ sidebar, setSidebar }) => {
    return (
        <nav className="absolute top-0 left-0 w-full
     pt-10 text-white z-20 ">
            <div className="container">
                <div>
                    {/* logo section  */}
                    <h1 className="text-2xl font-semibold uppercase">
                        <span className="text-primary">Coder</span>
                        Coffee
                    </h1>
                    {/* hamburger section  */}
                    <div onClick={() => {
                        setSidebar(!sidebar)
                    }}>
                        <GiHamburgerMenu className="text-3xl cursor-pointer" />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar