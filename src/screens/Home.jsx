import NavBar from '../components/NavBar.jsx';
import Main2ndSection from '../sections/Main2ndSection.jsx';
import MainHero from '../sections/MainHero.jsx';
import MainCarousel from '../sections/MainCarousel.jsx';
import Main3rdSection from '../sections/Main3rdSection.jsx';
import Main4thSection from '../sections/Main4thSection.jsx';
import Main5thSection from '../sections/Main5thSection.jsx';
import Main6thSection from '../sections/Main6thSection.jsx';
import Main7thSection from '../sections/Main7thSection.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
    return (
        <div className="relative">
            <div className="relative h-screen">
                <MainHero />
                <NavBar />
            </div>

            <div className="relative z-10 bg-white">
                <Main2ndSection />
            </div>
            <MainCarousel />
            <Main3rdSection/>
            <Main4thSection/>
            <Main5thSection/>
            <Main6thSection/>
            <Main7thSection/>
            <Footer/>
        </div>
    );
}

export default Home;