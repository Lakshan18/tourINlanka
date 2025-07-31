// import { useState, useEffect } from 'react';
// import { style } from '../style.js';
// import '../styles/navbar.css';
// import { useLocation, NavLink } from 'react-router-dom';

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeTab, setActiveTab] = useState('Home');
//   const [hoveredTab, setHoveredTab] = useState(null);

//   let location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const path = location.pathname;
//     if (path === '/') setActiveTab('Home');
//     else if (path === '/about') setActiveTab('About Us');
//     else if (path === '/packages') setActiveTab('Packages');
//     else if (path === '/blogs') setActiveTab('Blogs');
//   }, [location]);

//   return (
//     <div className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#1B2C4A]/60 backdrop-blur-sm py-2' : 'bg-transparent py-3'}`}>
//       <div className="w-full py-3 px-12 flex flex-row justify-between items-center">
//         <div className='w-fit flex flex-row items-center gap-3'>
//           <div className='w-[40px] h-[40px]'>
//             <img src="/travel_logo.png" alt="Logo" className="w-full h-full object-cover" />
//           </div>
//           <span className="text-[20px] font-medium text-white font-['Poppins']">TripLanka</span>
//         </div>
//         <div className='w-fit flex flex-row items-center text-white xl:gap-12'>
//           <NavLink
//             to="/"
//             className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
//               activeTab === 'Home' ? 'bg-white/10' : ''
//             }`}
//             onMouseEnter={() => activeTab !== 'Home' && setHoveredTab('Home')}
//             onMouseLeave={() => setHoveredTab(null)}
//           >
//             <span className={`relative z-10 ${activeTab === 'Home' ? 'text-white font-medium' : 'text-white/90'}`}>
//               Home
//             </span>
//             {activeTab === 'Home' ? (
//               <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
//                 <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
//               </div>
//             ) : (
//               <div className="absolute inset-0 overflow-hidden rounded-lg">
//                 {hoveredTab === 'Home' && (
//                   <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
//                 )}
//                 <div 
//                   className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
//                     hoveredTab === 'Home' ? 'w-[80%]' : 'w-0'
//                   }`}
//                   style={{
//                     transitionTimingFunction: hoveredTab === 'Home' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
//                   }}
//                 ></div>
//               </div>
//             )}
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
//               activeTab === 'About Us' ? 'bg-white/10' : ''
//             }`}
//             onMouseEnter={() => activeTab !== 'About Us' && setHoveredTab('About Us')}
//             onMouseLeave={() => setHoveredTab(null)}
//           >
//             <span className={`relative z-10 ${activeTab === 'About Us' ? 'text-white font-medium' : 'text-white/90'}`}>
//               About Us
//             </span>
//             {activeTab === 'About Us' ? (
//               <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
//                 <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
//               </div>
//             ) : (
//               <div className="absolute inset-0 overflow-hidden rounded-lg">
//                 {hoveredTab === 'About Us' && (
//                   <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
//                 )}
//                 <div 
//                   className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
//                     hoveredTab === 'About Us' ? 'w-[80%]' : 'w-0'
//                   }`}
//                   style={{
//                     transitionTimingFunction: hoveredTab === 'About Us' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
//                   }}
//                 ></div>
//               </div>
//             )}
//           </NavLink>

//           <NavLink
//             to="/packages"
//             className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
//               activeTab === 'Packages' ? 'bg-white/10' : ''
//             }`}
//             onMouseEnter={() => activeTab !== 'Packages' && setHoveredTab('Packages')}
//             onMouseLeave={() => setHoveredTab(null)}
//           >
//             <span className={`relative z-10 ${activeTab === 'Packages' ? 'text-white font-medium' : 'text-white/90'}`}>
//               Packages
//             </span>
//             {activeTab === 'Packages' ? (
//               <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
//                 <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
//               </div>
//             ) : (
//               <div className="absolute inset-0 overflow-hidden rounded-lg">
//                 {hoveredTab === 'Packages' && (
//                   <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
//                 )}
//                 <div 
//                   className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
//                     hoveredTab === 'Packages' ? 'w-[80%]' : 'w-0'
//                   }`}
//                   style={{
//                     transitionTimingFunction: hoveredTab === 'Packages' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
//                   }}
//                 ></div>
//               </div>
//             )}
//           </NavLink>

//           <NavLink
//             to="/blogs"
//             className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
//               activeTab === 'Blogs' ? 'bg-white/10' : ''
//             }`}
//             onMouseEnter={() => activeTab !== 'Blogs' && setHoveredTab('Blogs')}
//             onMouseLeave={() => setHoveredTab(null)}
//           >
//             <span className={`relative z-10 ${activeTab === 'Blogs' ? 'text-white font-medium' : 'text-white/90'}`}>
//               Blogs
//             </span>
//             {activeTab === 'Blogs' ? (
//               <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
//                 <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
//               </div>
//             ) : (
//               <div className="absolute inset-0 overflow-hidden rounded-lg">
//                 {hoveredTab === 'Blogs' && (
//                   <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
//                 )}
//                 <div 
//                   className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
//                     hoveredTab === 'Blogs' ? 'w-[80%]' : 'w-0'
//                   }`}
//                   style={{
//                     transitionTimingFunction: hoveredTab === 'Blogs' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
//                   }}
//                 ></div>
//               </div>
//             )}
//           </NavLink>

//           <div className='w-fit ps-12'>
//             <div className="relative flex items-center">
//               <span className="absolute left-3 text-gray-400">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <circle cx="11" cy="11" r="8" strokeWidth="2" />
//                   <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
//                 </svg>
//               </span>
//               <input
//                 type="text"
//                 className={`${style.SearchInput} pl-10 pr-3 py-1.5 w-[220px] border border-gray-300 rounded-md bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-blue-400 shadow-sm`}
//                 placeholder="Search Sri Lanka..."
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;



// import { useState, useEffect } from 'react';
// import { style } from '../style.js';
// import '../styles/navbar.css';
// import { useLocation, NavLink } from 'react-router-dom';

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeTab, setActiveTab] = useState('Home');
//   const [hoveredTab, setHoveredTab] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   let location = useLocation();

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       if (window.innerWidth >= 768) {
//         setMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const path = location.pathname;
//     if (path === '/') setActiveTab('Home');
//     else if (path === '/about') setActiveTab('About Us');
//     else if (path === '/packages') setActiveTab('Packages');
//     else if (path === '/blogs') setActiveTab('Blogs');
    
//     // Close mobile menu when route changes
//     if (windowWidth < 768) {
//       setMobileMenuOpen(false);
//     }
//   }, [location, windowWidth]);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const NavItem = ({ to, tabName }) => (
//     <NavLink
//       to={to}
//       className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
//         activeTab === tabName ? 'bg-white/10' : ''
//       }`}
//       onMouseEnter={() => activeTab !== tabName && setHoveredTab(tabName)}
//       onMouseLeave={() => setHoveredTab(null)}
//     >
//       <span className={`relative z-10 ${activeTab === tabName ? 'text-white font-medium font-[Quicksand]' : 'text-white/90 font-[Quicksand]'}`}>
//         {tabName}
//       </span>
//       {activeTab === tabName ? (
//         <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
//           <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
//         </div>
//       ) : (
//         <div className="absolute inset-0 overflow-hidden rounded-lg">
//           {hoveredTab === tabName && (
//             <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
//           )}
//           <div 
//             className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
//               hoveredTab === tabName ? 'w-[80%]' : 'w-0'
//             }`}
//             style={{
//               transitionTimingFunction: hoveredTab === tabName ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
//             }}
//           ></div>
//         </div>
//       )}
//     </NavLink>
//   );

//   return (
//     <>
//       {/* Mobile Menu Backdrop */}
//       {mobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 md:hidden lg:hidden xl:hidden 2xl:hidden"
//           onClick={toggleMobileMenu}
//         ></div>
//       )}

//       {/* Mobile Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-[#1B2C4A] z-50 transform transition-all duration-300 ease-in-out shadow-xl hidden sm:flex xs:flex ${
//         mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}>
//         <div className="flex flex-col h-full pt-20 px-6 space-y-6">
//           <NavLink
//             to="/"
//             className={`text-white text-lg py-2 px-4 rounded-lg transition-all ${
//               activeTab === 'Home' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
//             }`}
//             onClick={toggleMobileMenu}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={`text-white text-lg py-2 px-4 rounded-lg transition-all ${
//               activeTab === 'About Us' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
//             }`}
//             onClick={toggleMobileMenu}
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/packages"
//             className={`text-white text-lg py-2 px-4 rounded-lg transition-all ${
//               activeTab === 'Packages' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
//             }`}
//             onClick={toggleMobileMenu}
//           >
//             Packages
//           </NavLink>
//           <NavLink
//             to="/blogs"
//             className={`text-white text-lg py-2 px-4 rounded-lg transition-all ${
//               activeTab === 'Blogs' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
//             }`}
//             onClick={toggleMobileMenu}
//           >
//             Blogs
//           </NavLink>
          
//           <div className="relative flex items-center mt-8">
//             <span className="absolute left-3 text-gray-400">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <circle cx="11" cy="11" r="8" strokeWidth="2" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
//               </svg>
//             </span>
//             <input
//               type="text"
//               className={`${style.SearchInput} pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-blue-400 shadow-sm`}
//               placeholder="Search Sri Lanka..."
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#1B2C4A]/60 backdrop-blur-sm py-2' : 'bg-transparent py-3'}`}>
//         <div className="w-full py-3 px-6 md:px-12 flex flex-row justify-between items-center">
//           <div className='w-fit flex flex-row items-center gap-3'>
//             <div className='w-[40px] h-[40px]'>
//               <img src="/travel_logo.png" alt="Logo" className="w-full h-full object-cover" />
//             </div>
//             <span className="text-[20px] font-light text-white font-['Agbalu']">TripLanka</span>
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className='sm:hidden xs:hidden flex flex-row items-center text-white xl:gap-12'>
//             <NavItem to="/" tabName="Home" />
//             <NavItem to="/about" tabName="About Us" />
//             <NavItem to="/packages" tabName="Packages" />
//             <NavItem to="/blogs" tabName="Blogs" />
            
//             <div className='w-fit ps-12'>
//               <div className="relative flex items-center">
//                 <span className="absolute left-3 text-gray-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <circle cx="11" cy="11" r="8" strokeWidth="2" />
//                     <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   className={`${style.SearchInput} pl-10 pr-3 py-1.5 w-[220px] border border-gray-300 rounded-md bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-blue-400 shadow-sm`}
//                   placeholder="Search Sri Lanka..."
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="hidden sm:flex xs:flex text-white focus:outline-none z-50"
//             onClick={toggleMobileMenu}
//           >
//             {mobileMenuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;



import { useState, useEffect } from 'react';
import { style } from '../style.js';
import '../styles/navbar.css';
import { useLocation, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveTab('Home');
    else if (path === '/about') setActiveTab('About Us');
    else if (path === '/packages') setActiveTab('Packages');
    else if (path === '/blogs') setActiveTab('Blogs');
    
    // Close mobile menu when route changes
    if (windowWidth < 768) {
      setMobileMenuOpen(false);
    }
  }, [location, windowWidth]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 flex md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#1B2C4A] z-50 transform transition-all duration-300 ease-in-out shadow-xl  md:hidden lg:hidden xl:hidden 2xl:hidden ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6 xs:space-y-3">
          <NavLink
            to="/"
            className={`text-white xs:text-[14px] font-[Rubik] text-lg py-2 px-4 rounded-lg transition-all ${
              activeTab === 'Home' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
            }`}
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`text-white xs:text-[14px] font-[Rubik] text-lg py-2 px-4 rounded-lg transition-all ${
              activeTab === 'About Us' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
            }`}
            onClick={toggleMobileMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/packages"
            className={`text-white xs:text-[14px] font-[Rubik] text-lg py-2 px-4 rounded-lg transition-all ${
              activeTab === 'Packages' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
            }`}
            onClick={toggleMobileMenu}
          >
            Packages
          </NavLink>
          <NavLink
            to="/blogs"
            className={`text-white xs:text-[14px] font-[Rubik] text-lg py-2 px-4 rounded-lg transition-all ${
              activeTab === 'Blogs' ? 'bg-white/10 font-medium' : 'hover:bg-white/5'
            }`}
            onClick={toggleMobileMenu}
          >
            Blogs
          </NavLink>
          
          <div className="relative flex items-center mt-8">
            <span className="absolute left-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
              </svg>
            </span>
            <input
              type="text"
              className={`${style.SearchInput} pl-10 pr-3 py-2 xs:text-[14px] w-full border border-gray-300 rounded-md bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-blue-400 shadow-sm`}
              placeholder="Search Sri Lanka..."
            />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#1B2C4A]/60 backdrop-blur-sm py-2 xs:py-1' : 'bg-transparent py-3 xs:py-2'}`}>
        <div className="w-full py-3 px-6 md:px-8 lg:px-12 flex flex-row justify-between items-center">
          <div className='w-fit flex flex-row items-center gap-3'>
            <div className='w-[40px] h-[40px]'>
              <img src="/travel_logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-[20px] md:text-[18px] font-light text-white font-['Agbalu']">TripLanka</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className='flex xs:hidden sm:hidden flex-row items-center text-white lg:gap-8 xl:gap-12 md:gap-3'>
            <NavLink
              to="/"
              className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
                activeTab === 'Home' ? 'bg-white/10' : ''
              }`}
              onMouseEnter={() => activeTab !== 'Home' && setHoveredTab('Home')}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className={`relative z-10 md:text-[13px] ${activeTab === 'Home' ? 'text-white font-semibold font-[Quicksand]' : 'text-white/90 font-[Quicksand]'}`}>
                Home
              </span>
              {activeTab === 'Home' ? (
                <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
                </div>
              ) : (
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {hoveredTab === 'Home' && (
                    <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
                  )}
                  <div 
                    className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
                      hoveredTab === 'Home' ? 'w-[80%]' : 'w-0'
                    }`}
                    style={{
                      transitionTimingFunction: hoveredTab === 'Home' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
                    }}
                  ></div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
                activeTab === 'About Us' ? 'bg-white/10' : ''
              }`}
              onMouseEnter={() => activeTab !== 'About Us' && setHoveredTab('About Us')}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className={`relative z-10 md:text-[13px] ${activeTab === 'About Us' ? 'text-white font-semibold font-[Quicksand]' : 'text-white/90 font-[Quicksand]'}`}>
                About Us
              </span>
              {activeTab === 'About Us' ? (
                <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
                </div>
              ) : (
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {hoveredTab === 'About Us' && (
                    <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
                  )}
                  <div 
                    className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
                      hoveredTab === 'About Us' ? 'w-[80%]' : 'w-0'
                    }`}
                    style={{
                      transitionTimingFunction: hoveredTab === 'About Us' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
                    }}
                  ></div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/packages"
              className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
                activeTab === 'Packages' ? 'bg-white/10' : ''
              }`}
              onMouseEnter={() => activeTab !== 'Packages' && setHoveredTab('Packages')}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className={`relative z-10 md:text-[13px] ${activeTab === 'Packages' ? 'text-white font-semibold font-[Quicksand]' : 'text-white/90 font-[Quicksand]'}`}>
                Packages
              </span>
              {activeTab === 'Packages' ? (
                <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
                </div>
              ) : (
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {hoveredTab === 'Packages' && (
                    <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
                  )}
                  <div 
                    className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
                      hoveredTab === 'Packages' ? 'w-[80%]' : 'w-0'
                    }`}
                    style={{
                      transitionTimingFunction: hoveredTab === 'Packages' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
                    }}
                  ></div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/blogs"
              className={`${style.NavLinkText} relative px-3 py-1.5 transition-all duration-300 rounded-lg ${
                activeTab === 'Blogs' ? 'bg-white/10' : ''
              }`}
              onMouseEnter={() => activeTab !== 'Blogs' && setHoveredTab('Blogs')}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <span className={`relative z-10 md:text-[13px] ${activeTab === 'Blogs' ? 'text-white font-semibold font-[Quicksand]' : 'text-white/90 font-[Quicksand]'}`}>
                Blogs
              </span>
              {activeTab === 'Blogs' ? (
                <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-[80%] bg-cyan-500 rounded-t-full transform -translate-x-1/2"></span>
                </div>
              ) : (
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {hoveredTab === 'Blogs' && (
                    <div className="absolute inset-0 bg-white/5 rounded-lg"></div>
                  )}
                  <div 
                    className={`absolute bottom-0 left-1/2 h-[3px] bg-cyan-500 rounded-t-full transition-all duration-300 transform -translate-x-1/2 ${
                      hoveredTab === 'Blogs' ? 'w-[80%]' : 'w-0'
                    }`}
                    style={{
                      transitionTimingFunction: hoveredTab === 'Blogs' ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'
                    }}
                  ></div>
                </div>
              )}
            </NavLink>
            
            <div className='w-fit ps-12 md:ps-4'>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                  </svg>
                </span>
                <input
                  type="text"
                  className={`pl-10 pr-3 py-1.5 w-[220px] md:w-[190px] md:text-[14px] border border-gray-300 rounded-md bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-blue-400 shadow-sm`}
                  placeholder="Search Sri Lanka..."
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="hidden xs:flex sm:flex text-white focus:outline-none z-50"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xs:w-5 xs:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 xs:w-5 xs:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;