import { GrStatusGood } from "react-icons/gr";

export default function PlacesCard(props) {
    return (
        <div className='flex md:flex-row flex-col md:py-3 py-2 mt-2 text-black justify-evenly mr-2 w-full'>
            <img className='md:w-[400px]' src={props.img} alt="" />
            <div className='md:w-full px-2 space-y-4'>
                <p className='text-2xl font-bold'>{props.tittle}</p>
                <p>{props.info}</p>
                <p>
                    <div className='flex flex-row space-x-7'>
                        <div className='flex md:flex-row flex-col '>
                            <span className='text-green-600 md:px-3 text-2xl'><GrStatusGood /></span>
                            <p>{props.ratting}</p>
                        </div>
                        <div className='flex'>
                            <span className='text-green-600 md:px-3 text-2xl'><GrStatusGood /></span>
                            <p>{props.activity}</p>
                        </div>
                        <div className='flex'>
                            <span className='text-green-600 md:px-3 text-2xl'><GrStatusGood /></span>
                            <p>{props.travel}</p>
                        </div>
                    </div>
                </p>
                <div className='flex'>
                    <span className='text-green-600 md:px-3 px-2 text-2xl'><GrStatusGood /></span>
                    <p>24 X 7 concierge</p></div>
                <div className='flex justify-end'><div className='flex flex-col'>
                    <p className='font-bold text-2xl px-4'> {props.price} </p>
                    <span className="flex justify-center">-/per person</span>
                    </div>
                    <button className=' text-black hover:text-white md:px-4 p-2 mt-2  rounded-full bg-gradient-to-r from-green-400 to-orange-500 hover:from-pink-500 hover:to-yellow-500'>Explore Now</button>
                </div>
            </div>
        </div>
    )
}