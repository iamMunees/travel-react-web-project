import '../style/tourpackage.css'

import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Array1 from '../script/generalInfo'
import MorePlaces from '../pages/morePlaces';

const func = () => {

}
export default function TourPackage() {



    return (
        <section className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
            <div data-aos="fade-up" className="w-full services py-8 ">
                <h1 className="text-4xl">Most Popular Places</h1>
                <p className="md:w-1/2 px-2 mt-5 py-5">Package tours are generally classified on the basis of their operation and types of services included.
                    These are basically classified into independent tour, escorted tour, incentive tour, hosted tour and freedom tour.</p>
            </div>

            <div className='flex w-full flex-col md:flex-row px-10 gap-x-20  gap-7 flex-wrap justify-center'>
                {
                    Array1.map((e) => {
                        return (
                            <div data-aos="zoom-out-up" className='md:w-1/4'>
                                <div className="relative projects-div  hover:shadow-[0_0_50px_theme('colors.red.800')] transition ease-in-out duration-700  hover:scale-110 ">
                                    <h1 className='text-2xl font-bold flex justify-center px-10 py-5'>{e.title}</h1>
                                    <img className=' projects-img  ' src={e.img} />
                                    <div className="project">
                                        <p className='text-center text-white text-1xl'>{e.text}</p>
                                    </div>
                                </div>
                                <p className='flex justify-center py-4'><Link className=' text-black hover:text-white p-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition ease-in-out delay-150  hover:scale-110 ' to={e.redirect}>More Details</Link></p>
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-full justify-center flex'>
                <p className='py-5 px-20'><Link className=" text-black hover:text-red-600 shadow-neon font-bold  rounded-lg hover:shadow-[0_0_0_theme('colors.red.600')]" to="/morePlaces"> <FaAngleDoubleDown /></Link></p>
            </div>
        </section>
    )
}