import '../style/navebar.css'
import '../pages/services/downarrow.css'
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { CiCircleChevDown } from "react-icons/ci";
import DownArrow from '../pages/services/downarrow';

export default function Navebar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className=' w-full md:h-10 h-6 bg-white hover:text-white hover:bg-black'>
            <div data-aos="fade-up" className='content w-full flex justify-evenly '>
                <p className='font-bold text-2xl italic text-red-600 hidden md:block ml-3'>TRAVEL</p>
                <nav className="hidden md:block ">
                    <ul className='flex w-full gap-6  mt-2'>
                        {/* hover:text-white  hover:border-b-2 hover:border-red-600 */}
                        <li  className='  hover:bg-gray-900 px-2 cursor-pointer hover:border-b-2 hover:border-red-600'>Home</li>
                        <li><a className='  hover:bg-gray-900 px-2 cursor-pointer hover:border-b-2 hover:border-red-600' href="/#AboutUs">About Us</a></li>
                        <li><a className='  hover:bg-gray-900 px-2 cursor-pointer  hover:border-b-2 hover:border-red-600' href="/#Services">Services</a></li>
                        <li className='flex gap-2 package-display hover:bg-gray-900 px-2'>
                            <a className=' cursor-pointer hover:border-b-2 hover:border-red-600' href="/#TourPackages">Tour Packeges</a>
                            <span className='mt-1 hidden md:block  '><CiCircleChevDown /><DownArrow /></span>
                        </li>
                        <li><a className=' hover:bg-gray-900 px-2 cursor-pointer hover:border-b-2 hover:border-red-600' href="/#Blog">Blog</a></li>
                        <li><a className=' hover:bg-gray-900 px-2 cursor-pointer hover:border-b-2 hover:border-red-600' href="/#ContectUs">Contect Us</a></li>
                    </ul>
                </nav>
                <div className='flex-row space-x-4   text-2xl mt-1 hidden md:block mr-8'>
                    <button className='cursor-pointer'><a href="#"></a> <FaPhone /></button>
                    <button className='mr-4 cursor-pointer'><a href="#"></a><IoLogoWhatsapp /></button>
                </div>
                
            </div>

            {toggleMenu && <nav className="block md:hidden w-full  ">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col  text-white mobile-nav justify-center ">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#AboutUs">About Us</a></li>
                    <li><a href="/#Services">Services</a></li>
                    <li><a href="/#TourPackages">Tour Packages</a></li>
                    <li><a href="/#Blog">Blog</a></li>
                    <li><a href="/#ContectUs">Contect Us</a></li>
                </ul>
            </nav>}
            
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><IoMdMenu className="text-black hover:text-white h-6 w-8"/></button>
        </header>
    )
}