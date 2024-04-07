import Navebar from '../components/navebar'
import Array4 from '../script/morePlaces'
import travelBg from '../assets/morepackages/videoBg.mp4'
import Footer from '../components/fooder'

export default function MorePlaces() {
    window.scrollTo(0,0)
    return (
        <section className='flex w-full flex-col md:flex-row flex-wrap justify-center  gap-x-10  '>
            <Navebar />
            <div className="w-full h-66">
                <video className='' src={travelBg} autoPlay loop muted></video>
                <div className='font-mono  moreplace w-full h-full flex flex-col justify-center items-center gap-3'>
                    <h1 className='text-6xl font-bold'>Travel</h1>
                    <p className='text-2xl text-white'>Discover the world you have naver seen</p>
                    <button><a className='  text-black hover:text-white p-2 px-3 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition ease-in-out duration-700  hover:scale-110' href="#"> Explore Now</a></button>
                </div>
            </div>
            {
                Array4.map((e) => {
                    return (
                        <div className='md:w-[500px] flex flex-col py-4 space-y-5 hover:brightness-150 transition ease-in-out  hover:scale-110'>
                            <div className="relative projects-div   hover:shadow-[0_0_50px_theme('colors.red.800')] ">
                                <img className=' projects-img  ' src={e.img} />
                                <div className="project flex flex-col justify-center space-y-4">
                                    <p className='text-center hover:brightness-150 md:px-16 text-black font-bold text-3xl'>{e.text}</p>
                                    <p className=''><a className=' text-black hover:text-white px-3 py-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500 ' href="#">{e.details}</a></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Footer/>
        </section>
    )
}