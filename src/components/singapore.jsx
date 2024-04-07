import SingaporeBg from '../assets/Singapore/SingaporeBg.jpg';
import { FiPhoneCall } from "react-icons/fi";


export default function Singapore (){
    return(
        <section>
           
           <div className="md:flex justify-around ">
                <div>
                    <h1 className="font-bold text-2xl">Singapore Packages</h1>
                    <p>The seamless mix of technology, innovation, and natural beauty makes visiting Singapore </p>
                </div>
                <div className="flex mt-3 flex-wrap p-2 h-10 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
                    <span className="mt-1 px-4" ><FiPhoneCall /></span>
                    <button><a href="#">Request Call Back</a></button>
                </div>
            </div>
            <img className="md:w-full md:h-[500px]" src={SingaporeBg} alt="" />
            <div className="text-white bg-gray-800 flex flex-wrap justify-evenly">
                <div>
                    <p>IDEAL DURATION</p>
                    <p className="font-bold">4 - 5 Days</p>
                </div>
                <div>
                    <p>VISA PROCESSING</p>
                    <p className="font-bold">5 - 7 Days</p>
                </div>
                <div>
                    <p>BEST TIME</p>
                    <p className="font-bold">February - April </p>
                </div>
                <div>
                    <p>STARTING PRICE</p>
                    <p className="font-bold">₹28,860</p>
                </div>
                <div>
                    <p>OUR EXPERTISE</p>
                    <p className="font-bold"> 4.4from 2.4k travellers</p>
                </div>
            </div>
        </section>
    )
}