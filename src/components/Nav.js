import logo from "../icons/logo.png"
import { useState } from "react"
const Nav = () => {
    const [showNav, setShowNav] = useState(false)
    const handleNav = () => {
        setShowNav(!showNav)
    }
    return (
        <div className="Nav">
            <nav className="px-1 py-5 flex justify-between items-center mt-4 mb-7 bg-white relative">
                <div className="logo cursor-pointer md:ml-7 font-bold text-3xl md:text-4xl ">
                    <img src={logo} alt="logo" />
                </div>
                <div className={`${showNav ? "" : "hidden md:flex"} absolute top-16 flex justify-center items-center h-[250px] w-[100%] bg-white flex-col md:h-auto md:justify-end md:flex-row text-[#1F1534]  md:static md:ml-40 font-medium  md:mr-4`}>
                    <a  className="mb-4 md:mb-0" href="#">Home</a>
                    <a className="opacity-[0.5] mx-5 mb-4 md:mb-0" href="#">Find a doctor</a>
                    <a className="opacity-[0.5] mx-5 mb-4 md:mb-0" href="#">Apps</a>
                    <a className="opacity-[0.5] mx-5 mb-4 md:mb-0" href="#">Testimonials</a>
                    <a className="opacity-[0.5] mx-5 mb-4 md:mb-0" href="#">About us</a>
                </div>
                <div className="md:hidden" onClick={handleNav}>
                    <div className="line h-[3px] w-[30px] m-[5px] bg-black"></div >
                    <div className="line h-[3px] w-[30px] m-[5px] bg-black"></div >
                    <div className="line h-[3px] w-[30px] m-[5px] bg-black"></div >
                </div>
            </nav>
        </div>
    )
}

export default Nav