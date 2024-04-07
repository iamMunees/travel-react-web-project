import servicesarray from '../pages/services/services'
import '../style/services.css'

export default function Services() {
    return (
        <section className='w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div data-aos="fade-up" className="w-full services ">
                <h1 className="text-4xl">Services We Offer</h1>
                <p className="md:w-1/2 mt-5 px-2 py-5">Travel exclusive collection of hotels and resorts are selected carefully and hand picked such that they are unique
                    on their own stay.
                    All these premium properties will deliver the best vacation to the guests.</p>
            </div>
            <div className="flex gap-5 justify-center px-2 flex-wrap w-full">
                {
                    servicesarray.map((e) => {
                        return (
                            <div className="world md:w-1/3 transition ease-in-out duration-700  hover:scale-110 hover:bg-teal-500">
                                <div className="flex justify-center gap-4 text-2xl">
                                    <p className="services1">{e.icon} </p>
                                    <h1>{e.tittle}</h1>
                                </div>
                                <p className="mt-5">{e.content}
                                    <span><button className=' text-red-600 hover:text-blue-800'>More Details</button></span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}