import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Budget() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div  className="w-1/4">
            <nav className="">
                <section className="text-black px-6 hidden md:block ">
                    <h1 className="font-bold  ">Budget</h1>
                    <div>
                        <ul className="py-3 space-y-3">
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">Below ₹ 50 k</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 50k - ₹ 75k</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 75k - ₹ 1 L</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 1 L - ₹ 1.5L</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 1.5L - ₹ 2 L</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">Above ₹ ₹ 2L</p></li>
                        </ul>
                    </div>
                    <h1 className="font-bold ">No of days</h1>
                    <div>
                        <ul className="py-3 space-y-3">
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">3-5 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">4-8 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">9-12 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">13-16 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">Above 16 days</p></li>
                        </ul>
                    </div>
                    <h1 className="font-bold ">Hotel ratings</h1>
                    <div>
                        <ul className="py-3 space-y-3">
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">5 star</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">4 star</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">3 star</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">2 star</p></li>
                        </ul>
                    </div>
                </section>
            </nav>

            {toggleMenu && <nav className="block md:hidden">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav justify-center ">
                <section className="">
                    <h1 className="font-bold  ">Budget</h1>
                    <div>
                        <ul className="py-3 space-y-3">
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">Below ₹ 50 k</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 50k - ₹ 75k</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 75k - ₹ 1 L</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 1 L - ₹ 1.5L</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">₹ 1.5L - ₹ 2 L</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">Above ₹ ₹ 2L</p></li>
                        </ul>
                    </div>
                    <h1 className="font-bold ">No of days</h1>
                    <div>
                        <ul className="py-3 space-y-3">
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">3-5 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">4-8 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">9-12 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">13-16 days</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">Above 16 days</p></li>
                        </ul>
                    </div>
                    <h1 className="font-bold ">Hotel ratings</h1>
                    <div>
                        <ul className="py-3 space-y-3">
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">5 star</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">4 star</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">3 star</p></li>
                            <li className="flex"><input type="radio" id="" /> <p className="px-4">2 star</p></li>
                        </ul>
                    </div>
                </section>
                    
                </ul> 
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><IoMdMenu className="text-black h-6 mt-3 w-8" /></button>
        </div>
    )
}