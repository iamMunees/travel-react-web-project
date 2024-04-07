import Paris from "../components/paris";
import Budget from "../components/budget";
import PlacesCard from "../components/NorwayPlaces";
import ParisPlace from '../script/parisPlace';
import Navebar from '../components/navebar'
import Footer from '../components/fooder'

export default function ParisPage() {
    window.scrollTo(0,0)
    return (
        <div>
            <Navebar/>
            <Paris />
            <div className="flex">
                <Budget />
                <div className="w-full h-screen overflow-y-auto">
                    {
                        ParisPlace.map((e) => {
                            return (
                                <PlacesCard
                                    img={e.img}
                                    tittle={e.tittle}
                                    info={e.info}
                                    ratting={e.ratting}
                                    activity={e.activity}
                                    travel={e.travel}
                                    price={e.price}
                                />
                            )
                        }
                        )
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}