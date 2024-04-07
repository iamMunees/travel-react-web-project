import AboutUs from '../components/aboutus'
import Blog from '../components/blog'
import Forms from '../components/forms'
import Navebar from '../components/navebar'
import Services from '../components/services'
import TourPackage from '../components/tourpackage'
import Footer from '../components/fooder'
import Body from '../components/body'

export default function Home() {
    return (
        <div className='scroll-smooth overflow-hidden'>
            <div className="banner-div">
                <Navebar />
                <Body/>
                <Forms class="form-div" />
            </div>
            <AboutUs />
            <Services />
            <TourPackage />
            <Blog />
            <Footer/>
        </div>
    )
}