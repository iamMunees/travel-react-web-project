import Srilanka from "../components/srilanka";
import Budget from "../components/budget";
import PlacesCard from "../components/NorwayPlaces";
import SrilankaPlace from '../script/srilankaPlace'
import Navebar from '../components/navebar'
import Footer from '../components/fooder'

export default function SrilankaPage() {
    window.scrollTo(0,0)
    return (
        <div>
            <Navebar/>
            <Srilanka />
            <div className="flex ">
                <Budget class='' />
                <div className="bg-gray-300 w-full h-screen overflow-y-auto">
                    {
                        SrilankaPlace.map((e) => {
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