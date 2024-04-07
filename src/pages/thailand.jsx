import Thailand from "../components/thailand";
import Budget from "../components/budget";
import PlacesCard from "../components/NorwayPlaces";
import ThailandPlace from "../script/thailandPlace"
import Navebar from '../components/navebar'
import Footer from '../components/fooder'


export default function ThailandPage() {
    window.scrollTo(0,0)
    return (
        <div className="w-full">
            <Navebar/>
            <Thailand />
            <div className="flex max-w-full overflow-hidden">
                <Budget class='' />
                <div className="w-full h-screen overflow-y-auto">
                    {
                        ThailandPlace.map((e) => {
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