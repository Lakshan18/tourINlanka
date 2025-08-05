// import { useEffect, useState, useMemo } from 'react';

// const Blog = () => {
//   const [animatedText, setAnimatedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(100);
//   const [activeCircle, setActiveCircle] = useState(0);
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const messages = useMemo(() => [
//     "TourinLanka Blog - Coming Soon!",
//     "Your Sri Lanka Travel Guide",
//     "Explore Paradise Island",
//     "Authentic Travel Experiences"
//   ], []);

//   const features = useMemo(() => [
//     "Discover hidden gems across Sri Lanka",
//     "Expert travel tips and itineraries",
//     "Cultural insights and local stories",
//     "Seasonal travel recommendations"
//   ], []);

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % messages.length;
//       const fullText = messages[i];

//       setAnimatedText(isDeleting 
//         ? fullText.substring(0, animatedText.length - 1)
//         : fullText.substring(0, animatedText.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 50 : 100);

//       if (!isDeleting && animatedText === fullText) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && animatedText === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setTypingSpeed(100);
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [animatedText, isDeleting, loopNum, messages, typingSpeed]);

//   useEffect(() => {
//     const circleInterval = setInterval(() => {
//       setActiveCircle(prev => (prev + 1) % 3);
//     }, 2000);

//     return () => clearInterval(circleInterval);
//   }, []);

//   useEffect(() => {
//     const featureInterval = setInterval(() => {
//       setCurrentFeature(prev => (prev + 1) % features.length);
//     }, 3000);

//     return () => clearInterval(featureInterval);
//   }, [features.length]);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
//       <div className={`absolute w-40 h-40 rounded-full bg-blue-100 opacity-20 top-[-50px] left-[-50px] transition-all duration-1500 ease-in-out ${activeCircle === 0 ? 'scale-110 opacity-30' : ''}`}></div>
//       <div className={`absolute w-64 h-64 rounded-full bg-indigo-100 opacity-20 bottom-[-100px] right-[-100px] transition-all duration-1500 ease-in-out ${activeCircle === 1 ? 'scale-110 opacity-30' : ''}`}></div>
//       <div className={`absolute w-28 h-28 rounded-full bg-blue-100 opacity-20 top-1/2 right-1/4 transition-all duration-1500 ease-in-out ${activeCircle === 2 ? 'scale-110 opacity-30' : ''}`}></div>

//       <div className="relative w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 animate-float">
//         <span className="text-[30px] md:text-[28px] sm:text-[20px] font-[Roboto] xs:text-[16px] font-bold mb-8 min-h-[4.5rem] flex items-center justify-center">
//           {animatedText}
//           <span className="animate-blink">|</span>
//         </span>

//         <div className="mb-8">
//           <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
//             <div className="h-full bg-gradient-to-r from-cyan-300 to-cyan-700 rounded-full w-2/3 animate-progress"></div>
//           </div>
//           <p className="text-gray-600">We're preparing exclusive travel content for you!</p>
//         </div>

//         <div className="mb-12">
//           <div className="relative h-24">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-opacity duration-1000 ${index === currentFeature ? 'opacity-100' : 'opacity-0'}`}
//               >
//                 <div className="bg-blue-50 rounded-xl p-4 w-full max-w-md">
//                   <p className="text-lg font-medium text-blue-800">
//                     <span className="mr-2">✨</span>
//                     {feature}
//                     <span className="ml-2">✨</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center gap-5">
//           {[
//             { icon: "📷", label: "Instagram" },
//             { icon: "📘", label: "Facebook" },
//             { icon: "🐦", label: "Twitter" }
//           ].map((social, index) => (
//             <button
//               key={index}
//               className="group w-14 h-14 flex flex-col items-center justify-center bg-white rounded-full shadow-md text-xl transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none"
//               aria-label={social.label}
//             >
//               <span>{social.icon}</span>
//               <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-1">{social.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         @keyframes progress {
//           0% { width: 65%; }
//           100% { width: 85%; }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//         .animate-progress {
//           animation: progress 2s ease-in-out infinite alternate;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;


// import { useEffect, useState, useMemo } from 'react';

// const Blog = () => {
//   const [animatedText, setAnimatedText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(100);
//   const [activeCircle, setActiveCircle] = useState(0);
//   const [currentFeature, setCurrentFeature] = useState(0);

//   const messages = useMemo(() => [
//     "TourinLanka Blog - Coming Soon!",
//     "Your Sri Lanka Travel Guide",
//     "Explore Paradise Island",
//     "Authentic Travel Experiences"
//   ], []);

//   const features = useMemo(() => [
//     "Discover hidden gems across Sri Lanka",
//     "Expert travel tips and itineraries",
//     "Cultural insights and local stories",
//     "Seasonal travel recommendations"
//   ], []);

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % messages.length;
//       const fullText = messages[i];

//       setAnimatedText(isDeleting 
//         ? fullText.substring(0, animatedText.length - 1)
//         : fullText.substring(0, animatedText.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 50 : 100);

//       if (!isDeleting && animatedText === fullText) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && animatedText === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setTypingSpeed(100);
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [animatedText, isDeleting, loopNum, messages, typingSpeed]);

//   useEffect(() => {
//     const circleInterval = setInterval(() => {
//       setActiveCircle(prev => (prev + 1) % 3);
//     }, 2000);

//     return () => clearInterval(circleInterval);
//   }, []);

//   useEffect(() => {
//     const featureInterval = setInterval(() => {
//       setCurrentFeature(prev => (prev + 1) % features.length);
//     }, 3000);

//     return () => clearInterval(featureInterval);
//   }, [features.length]);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
//       <div className={`absolute w-40 h-40 rounded-full bg-blue-100 opacity-20 top-[-50px] left-[-50px] transition-all duration-1500 ease-in-out ${activeCircle === 0 ? 'scale-110 opacity-30' : ''}`}></div>
//       <div className={`absolute w-64 h-64 rounded-full bg-indigo-100 opacity-20 bottom-[-100px] right-[-100px] transition-all duration-1500 ease-in-out ${activeCircle === 1 ? 'scale-110 opacity-30' : ''}`}></div>
//       <div className={`absolute w-28 h-28 rounded-full bg-blue-100 opacity-20 top-1/2 right-1/4 transition-all duration-1500 ease-in-out ${activeCircle === 2 ? 'scale-110 opacity-30' : ''}`}></div>

//       <div className="relative w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 animate-float">
//         <span className="text-[30px] md:text-[28px] sm:text-[20px] font-[Roboto] xs:text-[16px] font-bold mb-8 min-h-[4.5rem] flex items-center justify-center">
//           {animatedText}
//           <span className="animate-blink">|</span>
//         </span>

//         <div className="mb-8">
//           <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
//             <div className="h-full bg-gradient-to-r from-cyan-300 to-cyan-700 rounded-full w-2/3 animate-progress"></div>
//           </div>
//           <p className="text-gray-600">We're preparing exclusive travel content for you!</p>
//         </div>

//         <div className="mb-12">
//           <div className="relative h-24">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-opacity duration-1000 ${index === currentFeature ? 'opacity-100' : 'opacity-0'}`}
//               >
//                 <div className="bg-blue-50 rounded-xl p-4 w-full max-w-md">
//                   <p className="text-lg xs:flex-row xs:flex xs:text-[10px] sm:text-[12px] font-medium text-blue-800">
//                     <span className="mr-2">✨</span>
//                     {feature}
//                     <span className="ml-2">✨</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Social Icons (visible only on small screens) */}


//         {/* Desktop Social Buttons (visible only on larger screens) */}
//         <div className="xs:flex-col sm:flex-col flex-row flex justify-center xs:items-center sm:items-center gap-5">
//           {[
//             { 
//               icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current text-pink-600">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               ),
//               label: "Instagram",
//               url: "https://www.instagram.com/tourinlanka"
//             },
//             { 
//               icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-600">
//                   <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
//                 </svg>
//               ),
//               label: "Facebook",
//               url: "https://www.facebook.com/tourinlanka"
//             },
//             { 
//               icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current text-blue-400">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               ),
//               label: "Twitter",
//               url: "https://twitter.com/tourinlanka"
//             }
//           ].map((social, index) => (
//             <a
//               key={index}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group w-32 h-14 flex items-center justify-center bg-white rounded-full shadow-md px-4 transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none"
//             >
//               <span className="mr-2">{social.icon}</span>
//               <span className="text-sm font-medium">{social.label}</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         @keyframes progress {
//           0% { width: 65%; }
//           100% { width: 85%; }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//         .animate-progress {
//           animation: progress 2s ease-in-out infinite alternate;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;


import { useEffect, useState, useMemo } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Blog = () => {
    const [animatedText, setAnimatedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [activeCircle, setActiveCircle] = useState(0);
    const [currentFeature, setCurrentFeature] = useState(0);

    const messages = useMemo(() => [
        "TourinLanka Blog - Coming Soon!",
        "Your Sri Lanka Travel Guide",
        "Explore Paradise Island",
        "Authentic Travel Experiences"
    ], []);

    const features = useMemo(() => [
        "Discover hidden gems across Sri Lanka",
        "Expert travel tips and itineraries",
        "Cultural insights and local stories",
        "Seasonal travel recommendations"
    ], []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % messages.length;
            const fullText = messages[i];

            setAnimatedText(isDeleting
                ? fullText.substring(0, animatedText.length - 1)
                : fullText.substring(0, animatedText.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && animatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && animatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(100);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [animatedText, isDeleting, loopNum, messages, typingSpeed]);

    useEffect(() => {
        const circleInterval = setInterval(() => {
            setActiveCircle(prev => (prev + 1) % 3);
        }, 2000);

        return () => clearInterval(circleInterval);
    }, []);

    useEffect(() => {
        const featureInterval = setInterval(() => {
            setCurrentFeature(prev => (prev + 1) % features.length);
        }, 3000);

        return () => clearInterval(featureInterval);
    }, [features.length]);

    return (
        <div className='w-full relative'>
            <NavBar />

            <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-slate-500 to-slate-600 relative overflow-hidden">
                <div className={`absolute w-40 h-40 rounded-full bg-blue-100 opacity-20 top-[-50px] left-[-50px] transition-all duration-1500 ease-in-out ${activeCircle === 0 ? 'scale-110 opacity-30' : ''}`}></div>
                <div className={`absolute w-64 h-64 rounded-full bg-indigo-100 opacity-20 bottom-[-100px] right-[-100px] transition-all duration-1500 ease-in-out ${activeCircle === 1 ? 'scale-110 opacity-30' : ''}`}></div>
                <div className={`absolute w-28 h-28 rounded-full bg-blue-100 opacity-20 top-1/2 right-1/4 transition-all duration-1500 ease-in-out ${activeCircle === 2 ? 'scale-110 opacity-30' : ''}`}></div>

                <div className="relative w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-12 animate-float">
                    {/* Animated Text */}
                    <div className="mb-6 md:mb-8 min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center">
                        <span className="text-[30px] md:text-[26px] sm:text-[20px] xs:text-[15px] font-[Roboto] font-bold text-center">
                            {animatedText}
                            <span className="animate-blink">|</span>
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6 md:mb-8">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2 md:mb-4">
                            <div className="h-full bg-gradient-to-r from-cyan-300 to-cyan-700 rounded-full w-2/3 animate-progress"></div>
                        </div>
                        <p className="text-sm md:text-base mt-3 text-gray-600 text-center font-[Quicksand]">
                            We're preparing exclusive travel content for you!
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8 md:mb-12">
                        <div className="relative h-20 md:h-24">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center text-center px-2 md:px-4 transition-opacity duration-1000 ${index === currentFeature ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <div className="bg-blue-50 rounded-xl p-3 md:p-4 w-full max-w-md">
                                        <p className="text-[19px] md:text-[18px] sm:text-[15px] xs:text-[11px] font-medium text-blue-800 font-[Poppins]">
                                            <span className="mr-1 md:mr-2">✨</span>
                                            {feature}
                                            <span className="ml-1 md:ml-2">✨</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Buttons - Responsive Layout */}
                    <div className="flex xs:flex-col flex-row justify-center items-center gap-3 sm:gap-5">
                        {[
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-pink-600">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                ),
                                label: "Instagram",
                                //   url: "https://www.instagram.com/tourinlanka"
                                url: "/"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-blue-600">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                ),
                                label: "Facebook",
                                //   url: "https://www.facebook.com/tourinlanka"
                                url: "/"
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-blue-400">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                ),
                                label: "Twitter",
                                //   url: "https://twitter.com/tourinlanka"
                                url: "/"
                            }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full xs:w-[130px] sm:w-32 h-12 sm:h-14 flex items-center justify-center bg-white rounded-full shadow-md px-4 transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none"
                            >
                                <span className="mr-2">{social.icon}</span>
                                <span className="text-[16px] lg:text-[15px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-medium font-[Rubik]">{social.label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes progress {
          0% { width: 65%; }
          100% { width: 85%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite alternate;
        }
      `}</style>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;