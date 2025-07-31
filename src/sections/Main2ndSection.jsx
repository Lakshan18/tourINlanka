import { style } from "../style.js";
import '../styles/sec2.css';

const Main2ndSection = () => {
    return (
        <div className='py-20 md:py-10 sm:py-10 xs:py-10 relative bg-gray-100 w-full'>
            <div className='flex flex-row md:flex-col items-center'>
                <div className='welcome_bg absolute inset-0 z-0 w-full h-full'></div>

                <div className='flex flex-col max-w-3xl lg:max-w-2xl md:max-w-full relative z-10'>
                    <div className='flex flex-col md:mb-4 sm:mb-4 xs:mb-4'>
                        <h2 className={`${style.mainTitleText} text-center`}>Discover the Beauty of</h2>
                        <h2 className={`${style.mainTitleText} mt-2 text-center`}>Sri Lanka</h2>
                    </div>
                    <span className={`${style.defineAreaText} px-10 xs:px-7`}>
                        "Sri Lanka is not a destination—it's an awakening.

                        Let the rhythm of crashing waves on golden shores sync with your heartbeat. Breathe in air thick with the scent of cinnamon and salt, where emerald jungles hum with the secrets of ancient civilizations. This is an island where time bends—where temple frescoes whisper 2,500 years of devotion, and stilt fishermen still cast their lines into the fiery hues of sunset.<br /><br />
                        Walk softly. The earth here remembers: the brush of a leopard's paw at dawn, the echo of temple bells across mist-wrapped hills, the warmth of a shared cup of amber tea with strangers-turned-storytellers. Every corner pulses with serendipity—a word born here, for moments when history, nature, and humanity collide in perfect harmony.<br />
                        Come not as a traveler, but as a thread woven into its living tapestry. The island is ready to unravel its magic for you."
                    </span>
                </div>
                <div className="w-full flex flex-row justify-center">
                    <div className="w-[300px] h-[300px] xl:w-[380px] xl:h-[380px] relative hidden lg:flex xl:flex 2xl:flex">
                        <img src="./images/tour_fam.jpg" className="w-full h-full object-cover rounded-full shadow-gray-700 shadow-2xl" alt="discover srilanka" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main2ndSection;