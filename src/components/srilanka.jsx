import SrilankaBg from '../assets/srilanka/srilankaBg.webp';
import { FiPhoneCall } from "react-icons/fi";


export default function Srilanka (){
    return(
        <section>
           
           <div className="md:flex justify-around ">
                <div>
                    <h1 className="font-bold text-2xl">Srilanka Packages</h1>
                    <p>If you want to see the whole island, in all its glory, you should put aside more than a week.</p>
                </div>
                <div className="flex mt-3 p-2 flex-wrap rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
                    <span className="mt-1 px-4" ><FiPhoneCall /></span>
                    <button><a href="#">Request Call Back</a></button>
                </div>
            </div>
            <img className="md:w-full md:h-[500px]" src={SrilankaBg} alt="" />
            <div className="text-white bg-gray-800 flex flex-wrap justify-evenly">
                <div>
                    <p>IDEAL DURATION</p>
                    <p className="font-bold">4-5 nights</p>
                </div>
                <div>
                    <p>VISA PROCESSING</p>
                    <p className="font-bold">5 days</p>
                </div>
                <div>
                    <p>BEST TIME</p>
                    <p className="font-bold">between December and mid-April, </p>
                </div>
                <div>
                    <p>STARTING PRICE</p>
                    <p className="font-bold">₹14,646</p>
                </div>
                <div>
                    <p>OUR EXPERTISE</p>
                    <p className="font-bold"> 4.0from 4.1k travellers</p>
                </div>
            </div>
        </section>
    )
}