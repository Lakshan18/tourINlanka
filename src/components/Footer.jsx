import { style } from "../style.js";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80')] bg-cover bg-center"></div>
            </div>

            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl opacity-15"></div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 gap-12 md:gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className={`${style.mainTitleText} font-bold text-cyan-400 mb-8 md:mb-3`}>TourINlanka</h3>
                        <p className="text-gray-300 font-[Quicksand] text-[15px]">Crafting unforgettable Sri Lankan journeys since 2015. We specialize in authentic, personalized travel experiences.</p>
                        <div className="flex space-x-4 flex-row">
                            {[
                                {
                                    name: 'facebook',
                                    url: 'https://facebook.com',
                                    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                },
                                {
                                    name: 'instagram',
                                    url: 'https://instagram.com',
                                    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
                                },
                                {
                                    name: 'whatsapp',
                                    url: 'https://whatsapp.com',
                                    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
                                },
                                // {
                                //     name: 'twitter',
                                //     url: 'https://twitter.com',
                                //     path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
                                // }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:ps-6"
                    >
                        <h3 className="md:text-[14px] font-bold text-gray-100 mb-4 text-[16px] font-[Poppins]">Explore</h3>
                        <nav className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Tours', path: '/tours' },
                                { name: 'Destinations', path: '/destinations' },
                                { name: 'Activities', path: '/activities' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block text-[15px] text-gray-400 hover:text-cyan-400 transition-colors font-[Roboto]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="md:text-[14px] font-bold text-gray-100 text-[16px] mb-4 font-[Poppins]">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <svg className="h-5 w-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-400 text-[15px] font-[Roboto]">123 Galle Road, Colombo 03, Sri Lanka</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-400 text-[15px] font-[Roboto]">+94 11 234 5678</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-400 text-[15px] font-[Roboto]">hello@serendipity.lk</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="md:text-[14px] font-bold text-gray-100 mb-4 text-[16px] font-[Poppins]">Popular Destinations</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                // { name: 'Colombo', path: '/destinations/colombo' },
                                // { name: 'Kandy', path: '/destinations/kandy' },
                                // { name: 'Galle', path: '/destinations/galle' },
                                // { name: 'Sigiriya', path: '/destinations/sigiriya' },
                                // { name: 'Nuwara Eliya', path: '/destinations/nuwara-eliya' },
                                // { name: 'Yala', path: '/destinations/yala' }
                                { name: 'Colombo', path: '/' },
                                { name: 'Kandy', path: '/' },
                                { name: 'Galle', path: '/' },
                                { name: 'Sigiriya', path: '/' },
                                { name: 'Nuwara Eliya', path: '/' },
                                { name: 'Yala', path: '/' }
                            ].map((destination) => (
                                <Link
                                    key={destination.name}
                                    to={destination.path}
                                    className="text-gray-400 text-[15px] font-[Roboto] hover:text-cyan-400 transition-colors flex items-center"
                                >
                                    <svg className="h-4 w-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {destination.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="pt-8 mt-8 border-t border-gray-800 text-center text-[13px] font-normal font-[Quicksand] text-gray-400 text-sm"
                >
                    <div className="flex flex-row xs:flex-col sm:flex-col justify-between items-center">
                        <p className="text-[12px]">Developed By <p className="text-[13px]">Quantom Blaze Software Solutions</p></p>
                        <p className="text-[13px]">© {new Date().getFullYear()} TourINlanka Travels. All rights reserved.</p>

                        <div className="flex text-[13px] space-x-6 mt-4 md:mt-0">
                            <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                            <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;