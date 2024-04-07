import trekking from '../assets/trekking.avif'
import room from '../assets/room.jpg'
import nature from '../assets/nature.jpg'


export default function Blog() {
    return (
        <section className='w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div data-aos="fade-up" className="w-full services ">
                <h1 className="text-4xl py-4">BLOG</h1>
                <p className="md:w-1/2 px-2 mt-5 py-5 text-white">We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.
                    The male, for all his bravado and exploration, is the loyal one, the one who generally feels love.</p>
            </div>
            <div className=''>

                <div className='w-full flex flex-col md:flex-row justify-evenly px-10'>
                    <div data-aos="fade-down-right" className='w-full'>
                        <img className='md:w-[500px] md:h-[300px]' src={trekking} />
                    </div>
                    <div data-aos="fade-down-left" className='flex flex-col  w-full justify-center md:px-10'>
                        <h1 className='font-bold py-5'>HIKING</h1>
                        <p className='py-5 '>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed
                            in Europe during the eighteenth century. Religious pilgrimages have existed
                            much longer but they involve walking long distances for a spiritual purpose associated with specific religions.
                        </p>
                        <p >The word hiking is also often used in the UK, along with rambling, hillwalking, and fell walking (a term mostly used for hillwalking in northern England).
                            The term bushwalking is endemic to Australia, having been adopted by the Sydney Bush Walkers club in 1927.
                            <span><button className='text-white hover:text-blue-800'>Read More</button></span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-down-right" className='w-full flex flex-col md:flex-row justify-evenly px-10 py-10'>
                    <div className='flex flex-col justify-center md:px-10'>
                        <h1 className='font-bold'>HOTEL</h1>
                        <p className='py-3'>They include common hotel room items such as TVs, sound systems, refrigerators, mini-bars, free Wi-Fi, coffee-makers, hairdryers,
                            and more. Amenities often include personal items like the toiletries the hotel provides. They can also include things that make a
                            room more comfortable, such as air-conditioning.
                        </p>
                        <p >
                            Luxury room features: High-quality furnishings with opulent, expensive touches, attention to aesthetic detail, a quiet room with fresh
                            air, original art on the walls, windows that open, robes and slippers, adequate storage, hangers, desk, reading chair, safe,
                            good-size flat-screen TV, iPhone/iPod dock, coffee maker, ...
                            <span><button className='text-white hover:text-blue-800'>Read More</button></span>
                        </p>

                    </div>
                    <div data-aos="fade-down-left" className='w-full'>
                        <img className='md:w-[500px] md:h-[300px]' src={room} />
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-evenly px-10 py-2'>
                    <div data-aos="fade-down-right" className='w-full'>
                        <img className='md:w-[500px] md:h-[300px]' src={nature} />
                    </div>
                    <div data-aos="fade-down-left" className='flex flex-col justify-center md:px-10'>
                        <h1 className='font-bold'>FEEL NATURE</h1>
                        <p className='mt-2' >How do you feel nature?
                            Connect with nature using all of your senses
                            Whether you're relaxing in the garden or on your way to work, try listening out for birdsong, look for bees
                            and butterflies, or notice the movement of the clouds. All of these good things in nature can help you to find a sense of calm
                            and joy.
                            <p className='mt-2'>Whether you're relaxing in the garden or on your way to work, try listening out for birdsong, look for bees and butterflies, or
                                notice the movement of the clouds. All of these good things in nature can help you to find a sense of calm and joy.
                                <span><button className='text-white hover:text-blue-800'>Read More</button></span>
                            </p>
                        </p>

                    </div>
                </div>
            </div>

        </section>
    )
}