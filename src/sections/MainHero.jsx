import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MainHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const exploreBtnRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const highlights = [
    "8 UNESCO World Heritage Sites",
    "1,600km of Pristine Coastline",
    "26 National Parks & Wildlife",
    "2,500+ Years of Rich History",
    "Legendary Hospitality & Cuisine"
  ];

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    if (!isMobileView) return;

    const interval = setInterval(() => {
      setCurrentHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobileView, highlights.length]);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !exploreBtnRef.current) return;

    gsap.set([titleRef.current, subtitleRef.current, exploreBtnRef.current, scrollIndicatorRef.current], {
      opacity: 1,
      y: 0
    });

    gsap.set([titleRef.current, subtitleRef.current, exploreBtnRef.current], {
      opacity: 0,
      y: 30
    });

    gsap.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.3
    })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7
      }, "-=0.3")
      .to(exploreBtnRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, "-=0.2");

    if (!isMobileView) {
      tl.to(".highlight-item", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15
      }, "-=0.1");
    }

    tl.to(scrollIndicatorRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4
    }, "-=0.1");

    const arrow = scrollIndicatorRef.current?.querySelector('.arrow');
    if (arrow) {
      gsap.to(arrow, {
        y: 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    return () => {
      tl.kill();
      gsap.killTweensOf(arrow);
    };
  }, [isMobileView]);


  const handleExploreClick = () => {
    const scrollDistance = window.innerHeight;

    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-full bg-[url('../public/bg_hero_img.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/45 z-0"></div>

      <div className="w-full absolute h-full flex flex-col items-center justify-center text-center px-4 z-10 pt-16 md:pt-10 xs:pt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center"
            ref={titleRef}
          >
            <div className="flex flex-row items-center w-fit h-auto gap-5 sm:gap-3 xs:gap-2">
              <span className="text-cyan-300 xl:text-[66px] lg:text-[50px] md:text-[48px] sm:text-[32px] xs:text-[22px] font-semibold font-[Marienda]">TourINlanka</span>
              <span className="text-white font-[Marienda] font-semibold xl:text-[66px] md:text-[48px] sm:text-[32px] xs:hidden lg:text-[50px]">Experience</span>
            </div>
            <span className="text-white font-[Marienda] font-semibold  xs:text-[22px] hidden">Experience</span>
            <span
              className="text-[32px] mt-4 text-white md:text-[48px] sm:text-[32px] lg:text-[46px] xs:text-[24px] xl:text-[58px] font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 font-['Rosario'] leading-tight"
            >
              Sri Lanka
            </span>
          </div>
          <p
            ref={subtitleRef}
            className="sm:text-[18px] xs:text-[14px] md:text-[24px] sm:mt-5 lg:text-[22px] xl:text-[26px] text-white mb-4 md:mb-4 xs:mb-5 sm:mb-6 font-['Poppins'] px-2 sm:px-4"
          >
            Where ancient culture meets tropical paradise
          </p>

          <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 min-h-[32px] xs:min-h-[36px] sm:min-h-[40px] flex items-center justify-center">
            {isMobileView ? (
              <div
                key={currentHighlightIndex}
                className="highlight-item px-3 py-1.5 xs:px-4 xs:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-[12px] xs:text-[12px] sm:text-[14px] font-[Poppins]"
              >
                {highlights[currentHighlightIndex]}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="highlight-item px-2 py-2 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-[14px] md:text-[13px] font-[Poppins] whitespace-nowrap"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center">
            <button
              ref={exploreBtnRef}
              onClick={handleExploreClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-all hover:scale-105 shadow-lg flex items-center gap-2 mx-auto group xs:text-[12px] sm:text-[14px] lg:text-[16px] text-[18px] sm:py-3 sm:px-4 xs:py-2 xs:px-3 py-2 px-5"
            >
              Explore Sri Lanka
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-2 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white xs:text-[14px] sm:text-[14px] text-[16px] mb-1 xs:mb-2">Scroll to Discover</span>
          <div className="w-7 h-10 xs:w-6 xs:h-9 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="arrow w-1 h-2 xs:h-2.5 sm:h-3 bg-white mt-1 xs:mt-1.5 sm:mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;