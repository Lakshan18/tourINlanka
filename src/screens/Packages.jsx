import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tourPackagesData from '../data/tour_packages.json';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { style } from '../style.js';
import ReCAPTCHA from "react-google-recaptcha";
import LoadingBuff from '../components/LoadingBuff.jsx';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [imageLoadErrors, setImageLoadErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const recaptchaRef = useRef();

    const [emailForm, setEmailForm] = useState({
        name: '',
        email: '',
        message: '',
        package: ''
    });

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const timer = setInterval(() => {
            setLoading(false);
            setPackages(tourPackagesData);
        }, 2400);

        return () => setTimeout(timer);
    }, []);

    const handleImageError = (key) => {
        setImageLoadErrors(prev => ({ ...prev, [key]: true }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handlePackageRequestSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);
        setSubmitSuccess(false);

        if (!recaptchaToken) {
            setSubmitError("Please complete the reCAPTCHA verification!");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_BASE_URL}/request-package`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: emailForm.name,
                    email: emailForm.email,
                    message: emailForm.message,
                    package: selectedPackage.title,
                    recaptchaToken
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Request failed');
            }

            setEmailForm({
                name: '',
                email: '',
                message: '',
                package: ''
            });
            recaptchaRef.current.reset();
            setRecaptchaToken(null);
            setSubmitSuccess(true);

            setTimeout(() => {
                setSubmitSuccess(false);
                setShowFormModal(false);
            }, 5000);

        } catch (error) {
            console.error('Submission Error:', error);
            setSubmitError(error.message || 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openFormModal = () => {
        setEmailForm(prev => ({
            ...prev,
            package: selectedPackage.title
        }));
        setShowFormModal(true);
        setSubmitError(null);
        setSubmitSuccess(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    if (loading) {
        return <LoadingBuff />
    }

    return (
        <div className='relative'>
            <NavBar />

            <div className="pt-28 bg-gradient-to-b from-slate-700 to-slate-500 pb-12 pt-30 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className={`${style.mainTitleText} text-white`}>Explore Sri Lanka</h1>
                        <p className={`${style.sectionSubText} text-gray-300 max-w-3xl mx-auto`}>
                            Discover our handcrafted tour packages designed to showcase the best of Sri Lanka
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-8 mb-16"
                    >
                        {packages.map((pkg) => (
                            <motion.div
                                key={pkg.id}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedPackage(pkg)}
                                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    {imageLoadErrors[pkg.key] ? (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">Image not available</span>
                                        </div>
                                    ) : (
                                        <motion.img
                                            src={pkg.thumbnail}
                                            alt={pkg.title}
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ scale: 1.05, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            onError={() => handleImageError(pkg.key)}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                        <div>
                                            <h3 className={`text-[22px] md:text-[20px] sm:text-[20px] font-[Rubik] font-bold text-white`}>{pkg.title}</h3>
                                            <p className="text-blue-200 text-[15px]">{pkg.duration}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4 line-clamp-2 text-[15px] md:text-[14px] sm:text-[14px]">{pkg.description}</p>
                                    <div className="flex items-center">
                                        <img
                                            src={pkg.icon}
                                            alt="Package icon"
                                            className="w-8 h-8 mr-2"
                                            onError={(e) => {
                                                e.target.src = 'https://cdn-icons-png.flaticon.com/512/3132/3132693.png';
                                            }}
                                        />
                                        <span className="text-blue-600 font-medium">View Details</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <AnimatePresence>
                        {selectedPackage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            >
                                <motion.div
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.95 }}
                                    className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                                >
                                    <div className="sticky top-0 z-50 w-full h-0">
                                        <button
                                            onClick={() => {
                                                setSelectedPackage(null);
                                                setSubmitSuccess(false);
                                            }}
                                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="relative w-full h-[50vh] overflow-hidden">
                                        <img
                                            src={selectedPackage.mainImage}
                                            alt={selectedPackage.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/images/placeholder-bg.jpg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                            <div>
                                                <h2 className="text-3xl font-bold text-white">{selectedPackage.title}</h2>
                                                <p className="text-blue-200">{selectedPackage.duration}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <div className="grid md:grid-cols-3 gap-8">
                                            <div className="md:col-span-2">
                                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tour Overview</h3>
                                                <p className="text-gray-600 mb-6">{selectedPackage.description}</p>

                                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tour Highlights</h3>
                                                <ul className="space-y-3 mb-8">
                                                    {selectedPackage.highlights.map((highlight, index) => (
                                                        <motion.li
                                                            key={index}
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-start"
                                                        >
                                                            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-700">{highlight}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                <button
                                                    onClick={openFormModal}
                                                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors"
                                                >
                                                    Request Information
                                                </button>
                                            </div>

                                            <div className="bg-blue-50 rounded-xl p-6 h-fit sticky top-4">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tour Details</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                                                        <p className="text-gray-800">{selectedPackage.duration}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500">Difficulty</h4>
                                                        <p className="text-gray-800">{selectedPackage.difficulty}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-500">Group Size</h4>
                                                        <p className="text-gray-800">{selectedPackage.groupSize}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-6 pt-6 border-t border-blue-100">
                                                    <h4 className="text-sm font-medium text-gray-500 mb-3">Share this tour</h4>
                                                    <div className="flex space-x-4">
                                                        {['facebook', 'instagram', 'whatsapp'].map((social) => (
                                                            <button
                                                                key={social}
                                                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                                                            >
                                                                <span className="sr-only">{social}</span>
                                                                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d={
                                                                        social === 'facebook' ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" :
                                                                            social === 'twitter' ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" :
                                                                                social === 'instagram' ? "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" :
                                                                                    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                                    } />
                                                                </svg>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showFormModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            >
                                <motion.div
                                    initial={{ scale: 0.95, y: 20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 0.95, y: 20 }}
                                    className="bg-white rounded-xl max-w-md w-full p-6 relative"
                                >
                                    <button
                                        onClick={() => setShowFormModal(false)}
                                        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-50 shadow-md"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request Information</h3>
                                    <p className="text-gray-600 mb-6">We'll get back to you with details about the {selectedPackage?.title} package.</p>

                                    {submitSuccess ? (
                                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                            <p>Thank you! Your request has been submitted. We'll contact you shortly.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handlePackageRequestSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={emailForm.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={emailForm.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={emailForm.message}
                                                    onChange={handleInputChange}
                                                    rows="4"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                    placeholder={`I'm interested in the ${selectedPackage?.title} package. Please send me more details.`}
                                                ></textarea>
                                            </div>

                                            <div className="mb-6">
                                                <ReCAPTCHA
                                                    ref={recaptchaRef}
                                                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                                    onChange={handleRecaptchaChange}
                                                    size="normal"
                                                />
                                            </div>

                                            {submitError && (
                                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                                    {submitError}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center">
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Processing...
                                                    </span>
                                                ) : (
                                                    'Submit Request'
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Packages;