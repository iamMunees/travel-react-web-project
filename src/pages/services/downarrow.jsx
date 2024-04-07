import Arrow from './downarrowPackage'

export default function DownArrow() {
    return (
        <div className='flex nav md:mt-3 gap-5 menu justify-center flex-wrap absolute text-white bg-black w-screen left-0'>
            {
                Arrow.map((e) => {
                    return (
                        <div className='md:space-y-4 place  md:py-4'>
                            <h1 className="font-bold text-blue-600">{e.tittle}</h1>
                            <ul className="flex space-y-4 flex-col">
                                <a className='hover:bg-gray-900 p-2' href="#">{e.place1}</a>
                                <a className='hover:bg-gray-900 p-2' href="#">{e.place2}</a>
                                <a className='hover:bg-gray-900 p-2' href="#">{e.place3}</a>
                                <a className='hover:bg-gray-900 p-2' href="#">{e.place4}</a>
                                <a className='p-2 hover:bg-gray-900 ' href="#">{e.place5}</a>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}