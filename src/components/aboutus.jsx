import '../style/aboutus.css'
import AboutUsImg from '../assets/aboutus.png'

export default function AboutUs() {
    return (
        <section className='flex flex-col md:flex-row px-5  justify-evenly py-7 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div className='md:relative'>
                <img  data-aos="fade-down-right"  className='md:w-[550px] md:h-[550px] mt-4 ' src={AboutUsImg} />
            </div>
            <div data-aos="fade-up-left" className='md:w-1/3 flex flex-col justify-center '>
                <h1  className='text-4xl font-bold border-b-2'>About US</h1>
                <p className='py-5'>
                    Between vacations, many daydream about what adventures the next trip holds. You can spend your days switching back and forth
                    from looking at your favorite travel photos to trying to go about your day to day life. But a few friendly reminders that the
                    next adventure is closer than you think can help you put your wanderlust to rest. And one of the best distractions comes with this
                    list of travel quotes. Pick your favorite from the collection below and use it to inspire your next trip!
                </p>
                <p className='py-5'>
                    “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart.
                    But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness,
                    on your heart, and on your body. You take something with you.
                    Hopefully, you leave something good behind.” – Anthony Bourdain
                 <span><button className='px-2 text-white hover:text-blue-800'>Read More</button></span>
                 </p>
            </div>
        </section>
    )
}