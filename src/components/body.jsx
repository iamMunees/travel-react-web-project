export default function Body () {

    return(
        <section className="w-full travel">
            <div  className='font-mono main  h-full gap-3'>
                  <h1 className='text-6xl font-bold'>Travel</h1>
                  <p className='text-2xl text-white'>Discover the world you have naver seen</p>
                  <button onClick={()=>alert("Tern On Your Location")}><a className='  text-black hover:text-white px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500' href="#/form"> Explore Now</a></button>
            </div>
        </section>
    )
}