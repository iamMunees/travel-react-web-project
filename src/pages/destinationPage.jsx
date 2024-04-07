import Thailand from "../components/thailand";
import Budget from "../components/budget";
import PlacesCard from "../components/NorwayPlaces";
import ThailandPlace from "../script/thailandPlace"

export default function DestinationPage() {
    return (
        <div className="w-full">
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
        </div>
    )
}