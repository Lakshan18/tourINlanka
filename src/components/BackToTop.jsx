// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';

// const BackToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Check scroll position to show/hide button
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   // Scroll to top function with bounce animation
//   const scrollToTop = () => {
//     gsap.to(window, {
//       scrollTo: 0,
//       duration: 1,
//       ease: "power2.inOut",
//       onComplete: () => {
//         // Add bounce animation after reaching top
//         gsap.fromTo(
//           ".back-to-top",
//           { y: -20 },
//           { 
//             y: 0,
//             duration: 0.5,
//             ease: "bounce.out"
//           }
//         );
//       }
//     });
//   };

//   return (
//     <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <button
//         onClick={scrollToTop}
//         className="back-to-top w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
//         aria-label="Back to top"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5 10l7-7m0 0l7 7m-7-7v18"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default BackToTop;



import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);
  const animationRef = useRef(null);

  // Check scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Continuous bounce animation when visible
  useEffect(() => {
    if (isVisible && buttonRef.current) {
      // Kill any existing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Create new bounce animation
      animationRef.current = gsap.to(buttonRef.current, {
        y: -20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    } else if (animationRef.current) {
      // Reset position and kill animation when not visible
      gsap.set(buttonRef.current, { y: 0 });
      animationRef.current.kill();
      animationRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isVisible]);

  // Scroll to top function
  const scrollToTop = () => {
    // Pause the continuous bounce during scroll
    if (animationRef.current) {
      animationRef.current.pause();
    }

    gsap.to(window, {
      scrollTo: {
        y: 0,
        autoKill: false
      },
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Add a special bounce when reaching top
        gsap.fromTo(
          buttonRef.current,
          { y: -20 },
          {
            y: 0,
            duration: 0.6,
            ease: "bounce.out",
            onComplete: () => {
              // Resume the continuous bounce after special bounce
              if (isVisible && animationRef.current) {
                animationRef.current.restart();
              }
            }
          }
        );
      }
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button
        ref={buttonRef}
        onClick={scrollToTop}
        className="w-12 xs:w-10 h-12 xs:h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 xs:w-4 xs:h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;