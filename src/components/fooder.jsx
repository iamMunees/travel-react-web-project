import { MdOutlineFacebook ,MdAddLocationAlt } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="py-3 bg-black text-white w-full">
            <div  className="py-3 flex flex-wrap justify-between">
                <div data-aos="fade-up" className="md:w-1/4  px-5">
                    <p>Our Travel web is India's leading player for flight bookings.
                        With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ...
                    </p>
                    <div className="flex py-4 px-8 text-orange-600 text-2xl gap-4">
                        <span className="hover:text-white"><MdOutlineFacebook /></span>
                        <span className="hover:text-white"><IoLogoWhatsapp /></span>
                        <span className="hover:text-white"><FaSquareInstagram /></span>
                    </div>
                </div>

                <div data-aos="fade-up" className="px-5 space-y-2">
                    
                    <h1 className="font-bold  text-2xl mr-2">Services</h1>
                    <ul className="px-4">
                    <h1 className="mt-2 ">Worldwide Tour</h1>
                    <h1>Hotel Reservation</h1>
                    <h1>Travel Guide</h1>
                    <h1>Event Management</h1>
                    </ul>
                </div>
                <div data-aos="fade-up" className="px-5 md:w-1/3">
                    <h1 className="font-bold mr-2 text-2xl">Contect Info</h1>
                    <div className="py-2 flex">
                        <span className="px-2 mt-1 hover:text-white text-orange-600"><MdAddLocationAlt /></span>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat quidem explicabo magnam aliquam incidunt delectus porro architecto sed ducimus!</p>
                    </div>
                    <div className=" py-2 flex">
                        <span className="px-2 mt-1 hover:text-white text-orange-600"><IoMailOpen /></span>
                        <h1>Travel@gmail.com</h1>
                    </div>
                    <div className="flex">
                        <span className="px-2 mt-1 hover:text-white text-orange-600"><FaPhoneVolume /></span>
                        <h1>+91 02918 93067</h1>
                    </div>
                </div>
            </div>
            <div className="text-center text-blue-700">
                &copy; Let's Explore The World in 2024
            </div>
        </section>
    )
}