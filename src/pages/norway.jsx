import PlacesCard from "../components/NorwayPlaces";
import Budget from "../components/budget";
import Norway from "../components/norway";
import norwayPlace from "../script/norwayPlaces";
import Navebar from '../components/navebar'
import Footer from '../components/fooder'

export default function NorwayPage() {
    window.scrollTo(0,0)
    return (
        <div>
            <Navebar/>
            <Norway />
           
            <div className="flex">
                <Budget class='' />
                <div className='space-y-6 bg-gradient-to-r  from-cyan-500 to-purple-300 w-full h-screen overflow-y-auto'>
                    {
                        norwayPlace.map((e) => {
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
                        })
                    }

                </div>
            </div>
            <Footer/>
        </div>
    )
}