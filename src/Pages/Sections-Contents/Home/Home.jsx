import {useState} from 'react'
import Sections from '../../../components/Sections.jsx'

const Home = () => {
    const [bg, setBg] = useState("/images/hero_slider_filter_02-scaled.webp");
    const [active, setActive] = useState(null);


    const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

    const styles = {
    button: (isActive) => ({
        backgroundColor: isActive ? "#f97316" : "transparent",
        border: isActive ? "none" : "1px solid white",
        color: "white",
        padding: "10px 22px",
        borderRadius: "999px",
        fontSize: "14px",
        transform: isActive ? "translateY(-20px)" : "translateY(40px)",
        transition: `all 0.45s ${ease}`,
    }),

    title: (isActive) => ({
        fontSize: "30px",
        color: "white",
        marginTop: "10px",
        transform: isActive ? "translateY(-20px)" : "translateY(40px)",
        transition: `all 0.6s ${ease}`,
    }),

    desc: (isActive) => ({
        fontSize: "14px",
        color: "white",
        marginTop: "12px",
        maxWidth: "320px",
        opacity: isActive ? 1 : 0,
        transform: isActive ? "translateY(-20px)" : "translateY(60px)",
        transition: `all 0.6s ${ease}`,
    }),
    };



  return (
    <div>
        <Sections bgImage={bg}>
            <section className="relative h-full w-full grid grid-cols-3 bg-gradient-to-b from-black/70 via-black/5 to-black/5">

                {/* COLUMN 1 */}
                <div
                onMouseEnter={() => {
                setBg("/images/hero_slider_filter_01-scaled.webp");
                setActive("company");
                }}
                onMouseLeave={() => setActive(null)}
                className="heroSection flex items-end p-10"
                >
                    <div>
                        <button style={styles.button(active === "company")}>
                        Company
                        </button>

                        <p style={styles.title(active === "company")}>
                        Supporting the Manufacturing Industries in Greece Since 1972
                        </p>

                        <p style={styles.desc(active === "company")}>
                        Europack offers comprehensive packaging solutions,
                        </p>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div
                onMouseEnter={() => {
                    setBg("/images/hero_slider_filter_02-scaled.webp");
                    setActive("service");
                }}
                onMouseLeave={() => setActive(null)}
                className="heroSection flex items-end p-10"
                >
                <div>
                    <button style={styles.button(active === "service")}>
                    Service
                    </button>

                    <p style={styles.title(active === "service")}>
                    Desing, Support, Inspection, Innovation
                    </p>

                    <p style={styles.desc(active === "service")}>
                    Your trusted partner for smart, sunstainable and High-Performance packaging and product solutions.
                    </p>
                </div>
                </div>

                {/* COLUMN 3 */}
                <div
                onMouseEnter={() => {
                    setBg("/images/hero_slider_filter_03-scaled.webp");
                    setActive("representations");
                }}
                onMouseLeave={() => setActive(null)}
                className="heroSection flex items-end p-10"
                >
                <div>
                    <button style={styles.button(active === "representations")}>
                    ΑΝΤΙΠΡΟΣΩΠΕΙΕΣ
                    </button>

                    <p style={styles.title(active === "representations")}>
                    Solution for the Manufacturing and packaging Industries
                    </p>
                    <p style={styles.desc(active === "representations")} className='flex flex-col '>
                  <li className='text-orange-400'> <a href="" className='hover:text-orange-400 text-lg text-white'>Product Manufacturing and packaging lines</a></li>  
                    <li className='text-orange-400'><a href="" className='hover:text-orange-400 text-lg  text-white'>Quality control</a></li>
                    <li className='text-orange-400'><a href="" className='hover:text-orange-400 text-lg  text-white'>Support chain</a></li>
                    </p>
                </div>
                </div>

                {/* DIVIDERS */}
                <div className="pointer-events-none absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-white/5 via-white/30 to-white/90" />
                <div className="pointer-events-none absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-white/5 via-white/30 to-white/90" />

            </section>
        </Sections>



        <Sections  >
            this is the hero
        </Sections>
        <Sections  >
            this is the hero
        </Sections>
        <Sections  >
            this is the hero
        </Sections>
       
    </div>
  )
}

export default Home