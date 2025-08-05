import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTripadvisor } from 'react-icons/fa';
import { BiLeaf } from 'react-icons/bi';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { style } from '../style.js';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='relative'>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b bg-gray-50">
                <div className="relative h-[80vh] overflow-hidden">
                    <img
                        src="/images/about_bg.jpg"
                        alt="Sri Lanka Landscape"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center text-white px-4"
                        >
                            <h1 className={`${style.mainTitleText} text-white`}>About TourINlanka Travels</h1>
                            <p className={`${style.sectionSubText} text-gray-100 pt-2 max-w-2xl mx-auto`}>
                                Your trusted guide to Sri Lanka's wonders since 2016
                            </p>
                            <BiLeaf className="mx-auto mt-4 text-3xl text-emerald-300" />
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-12 items-center">
                            <div className='flex flex-col items-start justify-center'>
                                <h2 className="text-[30px] font-bold text-cyan-800 mb-6 font-[Rosario]">Our Sri Lankan Journey</h2>
                                <div>
                                    <p className="text-[17px] xs:text-[15px] text-gray-700 mb-6">
                                        Founded in 2016, TourINlanka began as a small family-run business in Colombo with a passion for sharing Sri Lanka's hidden gems. What started with just three employees offering local tours has grown into one of Sri Lanka's most trusted travel agencies.
                                    </p>
                                    <p className="text-[17px] xs:text-[15px] text-gray-700">
                                        We specialize in authentic experiences - from tea plantation stays in Nuwara Eliya to leopard safaris in Yala, and everything in between.
                                    </p>
                                </div>
                            </div>
                            <motion.img
                                src="/images/tour_fam.jpg"
                                alt="Our Team"
                                className="rounded-xl shadow-xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <h2 className="text-[34px] md:text-[28px] sm:text-[24px] xs:text-[22px] font-bold text-cyan-800 mb-12 text-center font-[Roboto]">Why Travel With Us</h2>
                        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 gap-8">
                            {[
                                {
                                    icon: "🌿",
                                    title: "Local Expertise",
                                    desc: "Our guides are Sri Lankan natives with deep knowledge of culture and history"
                                },
                                {
                                    icon: "🤝",
                                    title: "Personalized Service",
                                    desc: "Tailored itineraries based on your interests and pace"
                                },
                                {
                                    icon: "🐘",
                                    title: "Ethical Tourism",
                                    desc: "We support eco-friendly lodges and responsible wildlife experiences"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-xl shadow-md text-center"
                                >
                                    <span className="text-4xl mb-4 block">{item.icon}</span>
                                    <h3 className="text-[20px] font-[Roboto] md:text-[19px] sm:text-[17px] xs:text-[16px] font-semibold text-cyan-700 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-[Quicksand] text-[16px] md:text-[15px] sm:text-[13px] xs:text-[13px]">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-cyan-800 text-white rounded-2xl p-12 mb-20"
                    >
                        <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                            {[
                                { number: "9+", label: "Years Experience" },
                                { number: "1,000+", label: "Happy Travelers" },
                                { number: "10+", label: "Tour Packages" },
                                { number: "100%", label: "Sri Lankan Team" }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-[40px] font-[Roboto] font-bold mb-2">{stat.number}</div>
                                    <div className="text-cyan-200 font-[Roboto] text-[17px] md:text-[16px] sm:text-[16px] xs:text-[16px]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1">
                            <div className="bg-cyan-700 text-white p-12">
                                <h2 className="font-bold mb-8 text-[30px] xs:text-[28px] font-[Roboto]">Contact TripLanka</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <FaPhone className="text-cyan-300 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold text-[17px]">Phone (Sri Lanka)</h3>
                                            <p className="text-cyan-200 text-[16px]">+94 76 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <FaEnvelope className="text-cyan-300 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold text-[17px]">Email</h3>
                                            <p className="text-cyan-200 text-[16px]">tourinlanka@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <FaMapMarkerAlt className="text-cyan-300 mt-1 mr-4" />
                                        <div>
                                            <h3 className="font-semibold text-[17px]">Office</h3>
                                            <p className="text-cyan-200 text-[16px]">123 Galle Road, Colombo 03, Sri Lanka</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h3 className="font-semibold mb-4 text-[17px]">TripAdvisor Reviews</h3>
                                    <a
                                        href="/"
                                        className="inline-flex items-center text-cyan-300 hover:text-white"
                                    >
                                        <FaTripadvisor className="mr-2 text-[15px]" />
                                        Read our 500+ 5-star reviews
                                    </a>
                                </div>
                            </div>

                            <div className="p-12">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Plan Your Sri Lanka Adventure</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Tour Interest</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                                            <option>Beach Holidays</option>
                                            <option>Wildlife Safaris</option>
                                            <option>Cultural Tours</option>
                                            <option>Tea Country Experiences</option>
                                            <option>Custom Itinerary</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors w-full"
                                    >
                                        Get Your Free Quote
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>

    );
};

export default About;