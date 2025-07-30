import { useState, useEffect, useRef } from 'react';
import '../styles/caraousel.css';
import destinationsData from '../data/destinations.json';
import { getDestinationImages } from '../util/imageFinder.js';

const MainCarousel = () => {
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [animationState, setAnimationState] = useState('idle');
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadDestinations = async () => {
      const processed = await Promise.all(
        destinationsData.map(async dest => ({
          ...dest,
          ...await getDestinationImages(dest.key)
        }))
      );
      setDestinations(processed);
    };
    loadDestinations();
  }, []);

  const getVisibleCards = () => {
    if (destinations.length === 0) return [];

    const cards = [];
    for (let i = 0; i < Math.min(3, destinations.length); i++) {
      const index = (currentIndex + i) % destinations.length;
      cards.push({
        ...destinations[index],
        position: i,
        state: animationState === 'exiting' && i === 0 ? 'exiting' :
          animationState === 'entering' && i === 2 ? 'entering' : 'idle'
      });
    }
    return cards;
  };

  useEffect(() => {
    if (destinations.length === 0) return;

    const interval = setInterval(() => {
      setAnimationState('exiting');
      setTransition(true);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % destinations.length);
        setAnimationState('entering');

        setTimeout(() => {
          setTransition(false);
          setAnimationState('idle');
        }, 400);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, destinations.length]);

  if (destinations.length === 0) {
    return <div className="horizontal-carousel loading">Loading destinations...</div>;
  }

  return (
    <div className="horizontal-carousel mb-10">
      <div
        className={`background-image ${transition ? 'fade-out' : 'fade-in'}`}
        style={{ backgroundImage: `url(${destinations[currentIndex]?.bgImage || ''})` }}
      >
        <div className="overlay" />
      </div>

      <div className="content-container">
        <div className="text-content">
          <h2>{destinations[currentIndex]?.title}</h2>
          <p>{destinations[currentIndex]?.type}</p>
          <div className="explore-section">
            <h3>EXPLORE</h3>
            <div className="dots">
              {destinations.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="cards-slider" ref={sliderRef}>
          {getVisibleCards().map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className={`card card-${i} ${card.state}`}
              onClick={() => setCurrentIndex((currentIndex + i) % destinations.length)}
            >
              <img
                src={card.cardImage}
                alt={card.title}
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
              <div className="card-text">
                <strong>{card.title}</strong>
                <span>{card.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;