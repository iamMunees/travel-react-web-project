import { FiPhoneCall } from "react-icons/fi";
import NorwayBg from '../assets/Norway/norway-bg.webp'

export default function Norway() {
    return (
        <section>
            <div className="md:flex justify-around ">
                <div>
                    <h1 className="font-bold text-2xl">Norway Packages</h1>
                    <p>Visit the dreamland of historic cities, stunning scenery and surreal.</p>
                </div>
                <span className="flex mt-3 flex-wrap p-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
                    <span className="mt-1 px-4" ><FiPhoneCall /></span>
                    <button><a href="#">Request Call Back</a></button>
                </span>
            </div>
            <img className="md:w-full md:h-[500px] mt-2" src={NorwayBg} alt="" />
            <div className="text-white bg-gray-800 flex flex-wrap justify-evenly">
                <div>
                    <p>IDEAL DURATION</p>
                    <p className="font-bold">6 nights</p>
                </div>
                <div>
                    <p>VISA PROCESSING</p>
                    <p className="font-bold">30 days</p>
                </div>
                <div>
                    <p>BEST TIME</p>
                    <p className="font-bold">May</p>
                </div>
                <div>
                    <p>STARTING PRICE</p>
                    <p className="font-bold">₹54,706</p>
                </div>
                <div>
                    <p>OUR EXPERTISE</p>
                    <p className="font-bold"> 4.0from 468 travellers</p>
                </div>
            </div>
        </section>
    )
}