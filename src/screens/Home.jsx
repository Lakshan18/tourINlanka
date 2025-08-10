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
import BackToTop from '../components/BackToTop.jsx';
import LoadingBuff from '../components/LoadingBuff.jsx';
import { useEffect, useState } from 'react';

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setLoading(false);
        }, 5000);

        return () => setTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingBuff />
    }

    return (
        <div className="relative">
            <div className="relative md:h-[105vh] h-screen xs:h-[90vh]">
                <MainHero />
                <NavBar />
            </div>

            <div className="relative z-10">
                <Main2ndSection />
            </div>
            <MainCarousel />
            <Main3rdSection />
            <Main4thSection />
            <Main5thSection />
            <Main6thSection />
            <Main7thSection />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default Home;