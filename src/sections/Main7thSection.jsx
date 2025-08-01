import { motion, useAnimation } from 'framer-motion';
import { style } from "../style.js";
import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Serendipity truly unlocked the magic of Sri Lanka for us! Every detail was perfect, from the stunning landscapes to the warm hospitality. An unforgettable journey.",
        author: "Sarah & Tom",
        location: "United Kingdom",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    },
    {
        id: 2,
        quote: "An unforgettable journey. The cultural insights and local experiences were phenomenal. Serendipity helped us discover the true essence of Sri Lanka.",
        author: "Anya Sharma",
        location: "India",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        quote: "The team at Serendipity crafted a perfect blend of adventure and relaxation. We experienced authentic Sri Lanka beyond the tourist spots. Highly recommended!",
        author: "Michael Chen",
        location: "Australia",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
        id: 4,
        quote: "From wildlife safaris to tea plantations, every moment was magical. Serendipity's attention to detail made our honeymoon truly special.",
        author: "Emma & David",
        location: "Canada",
        avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
    }
];

const Main7thSection = () => {
    const controls = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        controls.start({
            opacity: [0, 1],
            y: [20, 0],
            transition: { duration: 0.8 }
        });
    }, [currentIndex, controls]);

    const handlePrev = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
    };

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1562613521-9e9c8b16d1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
          bg-cover bg-center"
                />
            </div>

            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-purple-200 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-red-200 blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-200 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-200 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className={`${style.mainTitleText} mb-6`}>
                        Hear From Our Happy Travelers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Read what others have to say about their Serendipity experience.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto relative">
                    <div className="relative h-96">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                ref={testimonialRef}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: index === currentIndex ? 1 : 0,
                                    scale: index === currentIndex ? 1 : 0.95,
                                    zIndex: index === currentIndex ? 10 : 1
                                }}
                                transition={{ duration: 0.6 }}
                                className={`absolute inset-0 bg-white rounded-xl overflow-hidden border border-gray-100 p-8 flex flex-col ${index === currentIndex ? '' : 'pointer-events-none'}`}
                                style={{
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                <div className="flex-1 flex flex-row sm:flex-col xs:flex-col gap-8">
                                    <div className="w-full md:w-1/3 flex flex-col items-center">
                                        <div className="relative mb-6">
                                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-100">
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 right-1 bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
                                                {testimonial.id.toString().padStart(2, '0')}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-xl font-bold text-gray-900">{testimonial.author}</h4>
                                            <p className="text-cyan-600">{testimonial.location}</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3 flex items-center">
                                        <blockquote className="text-lg text-gray-700 relative pl-6">
                                            <svg
                                                className="absolute -top-2 -left-2 w-6 h-6 text-cyan-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                            {testimonial.quote}
                                        </blockquote>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 shadow-md transition-all z-20 border border-gray-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-gray-50 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 shadow-md transition-all z-20 border border-gray-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    clearInterval(intervalRef.current);
                                    setCurrentIndex(index);
                                    intervalRef.current = setInterval(() => {
                                        setCurrentIndex(prev => (prev + 1) % testimonials.length);
                                    }, 5000);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-cyan-500 w-6' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main7thSection;