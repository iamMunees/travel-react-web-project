import Singapore from "../components/singapore";
import Budget from "../components/budget";
import PlacesCard from "../components/NorwayPlaces";
import SingaporePlace from '../script/singaporePlace'
import Navebar from '../components/navebar'
import Footer from '../components/fooder'

export default function SingaporePage() {
    window.scrollTo(0,0)
    return (
        <div>
            <Navebar/>
            <Singapore />
            <div className="flex">
                <Budget class='' />
                <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 h-screen overflow-y-auto">
                    {
                        SingaporePlace.map((e)=>{
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