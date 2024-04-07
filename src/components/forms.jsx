import '../style/forms.css'
import { Link } from 'react-router-dom'

export default function Forms(props) {
    return (
        <form  className={props.class} >
            <div  data-aos="fade-up" className="flex flex-col relative  md:flex-row px-8 justify-center form gap-4 py-8 ">
                <div className="flex flex-col gap-4 ">
                    <label className='text-bold text-2xl' htmlFor="">From</label>
                    <input className='form-border ' type="text" id="" placeholder='Type Place' />
                </div>
                <div className="flex flex-col gap-4" >
                    <label className='text-bold text-2xl' htmlFor="">To</label>
                    <input className='form-border' type="text" id="" placeholder='Type place' />
                </div>
                <div className="flex flex-col gap-4">
                    <label className='text-bold text-2xl' htmlFor="">Date</label>
                    <input className='form-border' type='month' id="" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className='text-bold text-2xl' htmlFor="">Adult</label>
                    <input className='form-border' type="number" id="" placeholder='00' />
                </div>
                <div className="flex flex-col gap-4">
                    <label className='text-bold text-2xl' htmlFor="">Child</label>
                    <input className='form-border' type="number" id="" placeholder='00' />
                </div>
                <span className='flex justify-center'><button className=' text-black h-8 mt-4 w-20 hover:text-white rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500'><Link to="/morePlaces">Search</Link> </button></span>
            </div>
        </form>
    )
}