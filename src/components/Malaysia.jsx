import MalaysiaBg from '../assets/Malaysia/MalaysiaBg.jpg';
import { FiPhoneCall } from "react-icons/fi";


export default function Malaysia (){
    return(
        <section>
           
           <div className="md:flex md:justify-around">
                <div>
                    <h1 className="font-bold text-2xl">Malaysia Holiday Packages</h1>
                    <p>Colourful shopping streets and iconic sky piercing skyscrapers</p>
                </div>
                <div className="flex mt-3 flex-wrap p-2 h-10 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
                    <span className="mt-2 px-4" ><FiPhoneCall /></span>
                    <button><a href="#">Request Call Back</a></button>
                </div>
            </div>
            <img className="md:w-full md:h-[500px]" src={MalaysiaBg} alt="" />
            <div className="text-white bg-gray-800 flex flex-wrap justify-evenly">
                <div>
                    <p>IDEAL DURATION</p>
                    <p className="font-bold">6 nights</p>
                </div>
                <div>
                    <p>VISA PROCESSING</p>
                    <p className="font-bold">10 days</p>
                </div>
                <div>
                    <p>BEST TIME</p>
                    <p className="font-bold">Apr - Sep </p>
                </div>
                <div>
                    <p>STARTING PRICE</p>
                    <p className="font-bold">₹20,114</p>
                </div>
                <div>
                    <p>OUR EXPERTISE</p>
                    <p className="font-bold"> 4.8K from 3.1k travellers</p>
                </div>
            </div>
        </section>
    )
}