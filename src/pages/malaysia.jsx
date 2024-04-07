import Malaysia from "../components/Malaysia";
import Budget from "../components/budget";
import PlacesCard from "../components/NorwayPlaces";
import MalaysiaPlace from '../script/malaysiaPlace';
import Navebar from '../components/navebar'
import Footer from '../components/fooder'

export default function MalaysiaPage() {
    window.scrollTo(0,0)
    return (
        <div>
             <Navebar/>
            <Malaysia />
           
            <div className="flex">
                <Budget class='' />
                <div className="w-full h-screen overflow-y-auto">
                    {
                        MalaysiaPlace.map((e) => {
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