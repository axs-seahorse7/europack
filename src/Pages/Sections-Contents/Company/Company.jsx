import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Company.css'
import HeroTemplate from '../../../components/HeroTemplate'
import InfoTemplate from '../../../components/InfoTemplate'

const Company = () => {
    const navigate = useNavigate();
   const customerLogos = [
    { src: "/images/Company-logos/2.Agrifreda.png", url: "https://www.agrifreda.gr" },
    { src: "/images/Company-logos/3.AgroPhoenix.png", url: "https://www.agrophoenix.gr" },
    { src: "/images/Company-logos/4.Alambra.petroubros-1.png", url: "https://www.alambra.gr" },
    { src: "/images/Company-logos/5.Archontakis.png", url: "https://www.archontakis.gr" },
    { src: "/images/Company-logos/6.ARIFood.png", url: "https://www.arifood.gr" },
    { src: "/images/Company-logos/7.Bennett-1.png", url: null },
    { src: "/images/Company-logos/8.Boehringer-Ingelheim.png", url: "https://www.boehringer-ingelheim.com" },
    { src: "/images/Company-logos/9.Cafetex-1.png", url: "https://www.cafetex.gr" },
    { src: "/images/Company-logos/11.dandalis.png", url: "https://www.dandalis.gr" },
    { src: "/images/Company-logos/12.DELTA.png", url: "https://www.delta.gr" },
    { src: "/images/Company-logos/14.Elpen.png", url: "https://www.elpen.gr" },
    { src: "/images/Company-logos/15.Elvida-1.png", url: "https://www.elvidafoods.gr" },
    { src: "/images/Company-logos/18.Friesland-Campania.png", url: "https://www.frieslandcampina.com" },
    { src: "/images/Company-logos/20.genepharm-1.png", url: "https://www.genepharm.com" },
    { src: "/images/Company-logos/21.george-charalambous-1.png", url: "https://www.charalambous.com.cy" },
    { src: "/images/Company-logos/22.ellinikoi-ximoi-logo-web.png", url: "https://www.ellinikoi-ximoi.gr" },
    { src: "/images/Company-logos/24.ifantis-1.png", url: "https://www.ifantis.gr" },
    { src: "/images/Company-logos/25.jacobs-douwe-egberts-professional.png", url: "https://www.jacobsdouweegberts.com" },

    { src: "/images/Company-logos/26.kore_-1.png", url: "https://www.korres.com" },
    { src: "/images/Company-logos/29.makedoniki-logo-1.png", url: "https://www.makedoniki.gr" },
    { src: "/images/Company-logos/30.mandrekas-1.png", url: "https://www.mandrekas.gr" },
    { src: "/images/Company-logos/31.megas-yeeros.png", url: "https://www.megas-yeeros.gr" },
    { src: "/images/Company-logos/32.meggal-logo.png", url: null },
    { src: "/images/Company-logos/34.neogal-1.png", url: "https://www.neogal.gr" },
    { src: "/images/Company-logos/35.nestle-logo-gr-1-1.png", url: "https://www.nestle.gr" },
    { src: "/images/Company-logos/36.NIKAS_.png", url: "https://www.nikas.gr" },
    { src: "/images/Company-logos/37.OnePharma-1.png", url: "https://www.onepharma.gr" },
    { src: "/images/Company-logos/38.Ouzounoglou-1.png", url: "https://www.ouzounoglou.gr" },
    { src: "/images/Company-logos/39.Lavdas-1.png", url: "https://www.lavdas.gr" },
    { src: "/images/Company-logos/40.papadopoulos.png", url: "https://www.papadopoulos.gr" },
    { src: "/images/Company-logos/41.Pelito-1.png", url: "https://www.pelito.gr" },
    { src: "/images/Company-logos/42.Pharmapath-1.png", url: "https://www.pharmapath.com" },
    { src: "/images/Company-logos/43.Pharmathen-1.png", url: "https://www.pharmathen.com" },
    { src: "/images/Company-logos/44.pharmazac-1.png", url: "https://www.pharmazac.gr" },
    { src: "/images/Company-logos/45.QualitaUnica-1.png", url: "https://www.qualitaunica.gr" },
    { src: "/images/Company-logos/46.Rafarm-1.png", url: "https://www.rafarm.com" },

    { src: "/images/Company-logos/47.Rontis-1.png", url: "https://www.rontis.gr" },
    { src: "/images/Company-logos/48.Uni-Pharma.png", url: "https://www.unipharma.gr" },
    { src: "/images/Company-logos/49.Zita-dairies-1.png", url: "https://www.zitadairies.gr" },
    { src: "/images/Company-logos/50.BIANElogo-1.png", url: "https://www.biane.gr" },
    { src: "/images/Company-logos/51.dodoni.png", url: "https://www.dodoni.gr" },
    { src: "/images/Company-logos/52.eurofarma.png", url: "https://www.eurofarma.com" },
    { src: "/images/Company-logos/53.Ellinika-galaktokomeia.png", url: "https://www.greekdairies.com" },
    { src: "/images/Company-logos/54.ION-1.png", url: "https://www.ion.gr" },
    { src: "/images/Company-logos/55.Mitropolitidis-1.png", url: null },
    { src: "/images/Company-logos/56.Xaralampidis-Kritis.png", url: null },

    { src: "/images/Company-logos/adelco.png", url: "https://www.adelco.gr" },
    { src: "/images/Company-logos/damavand.png", url: "https://www.damavand.com" },
    { src: "/images/Company-logos/ebisco_logo.png", url: null },
    { src: "/images/Company-logos/Fage.png", url: "https://www.fage.com" },
    { src: "/images/Company-logos/FAMAR.png", url: "https://www.famar-group.com" },
    { src: "/images/Company-logos/krikri-logo-gr.png", url: "https://www.krikri.gr" },
    { src: "/images/Company-logos/kyknos-full-logo-gold.png", url: "https://www.kyknos.com" },
    { src: "/images/Company-logos/Mondelez-International.png", url: "https://www.mondelezinternational.com" }
    ];

  return (
    <div>
        <HeroTemplate
        title="The Company"
        subtitle="europack"
        backgroundImage="/images/about_us.webp"
        />

        {/* OUR CUSTOMERS SECTION */}
        <div className="w-full bg-white py-16 overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center gap-12 px-16">
            
            {/* Left Text */}
            <div className="min-w-[180px]">
            <p className="text-black text-lg font-medium leading-tight">
                Our<br />
                Customers <span className="inline-block ml-1">↗</span>
            </p>
            </div>

            {/* Scrolling Logos */}
            <div className="relative flex-1 overflow-hidden">
            <div className="logo-track flex items-center gap-20">

                     <div className="logo-wrapper">
                        <div className="logo-track flex gap-10">
                            {customerLogos.map((logo, i) =>(
                                <div key={i} onClick={() => logo.url && window.open(logo.url, "_blank")} >
                                    <img loading='lazy'  src={logo.src} alt="" className='logo-item' />
                                </div>
                            ))}  

                            {customerLogos.map((logo, i) =>(
                                  <div key={i} onClick={() => logo.url && window.open(logo.url, "_blank")} >
                                    <img loading='lazy'  src={logo.src} alt="" className='logo-item' />
                                </div>
                            ))}  
                        </div>
                    </div>

            </div>
            </div>

           
        </div>
        </div>

        <InfoTemplate 
        image="/images/about_mission_section_img_jpg.webp"
        badge='EUROPACK INDUSTRIAL SOLUTIONS S.A.'  
        heading='Supply, Design and Support of Industrial Production & Packaging Equipment'
        description={<> <span className='font-bold'> Europack Industrial Solutions </span> S.A. was founded in 1972. Its primary focus is representing international manufacturers of packaging and food processing machinery and equipment for other industries.</>}
        />

        {/* ABOUT US SECTION */}
        <section className="relative w-full bg-[#3a3a3a] text-white border">

        {/* TOP CONTENT */}
        <div className="max-w-7xl mx-auto px-16 pt-28 pb-40 grid grid-cols-2 gap-20 items-start min-h-[120vh]">

            {/* LEFT TEXT */}
            <div className="flex flex-col gap-8 max-w-xl">

            {/* Pill */}
            <span className="inline-block w-fit px-4 py-1 border border-white/40 rounded-full text-xs tracking-wide">
                About Us
            </span>

            {/* Paragraphs */}
            <p className="text-3xl leading-relaxed font-light">
                Our team's strong technical expertise and extensive industrial
                experience have enabled us to collaborate with companies that offer
                innovative and technologically advanced solutions.
            </p>

            <p className="text-3xl leading-relaxed font-light">
                As a result, <span className="font-medium">EUROPACK</span> provides not
                only high-quality equipment but also comprehensive support for
                integrating new technologies and applications.
            </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="absolute bottom-0 right-10 w-[33%] h-[85vh] border z-10 ">
                <img
                    src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

        </div>

        {/* STATS BAR */}
        <div className="relative bg-white text-black py-10">
            <div className="flex gap-8 w-full">

            {/* Stat 1 */}
            <div className="flex items-center gap-4 border-r border-gray-300 px-10">
                <span className="text-orange-500 text-3xl">🏭</span>
                <div>
                <p className="text-2xl font-semibold">36+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 border-r border-gray-300 px-10">
                <span className="text-orange-500 text-3xl">👥</span>
                <div>
                <p className="text-2xl font-semibold">14+</p>
                <p className="text-sm text-gray-600">Staff</p>
                </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
                <span className="text-orange-500 text-3xl">
                    <img src="/images/increase.png" alt="" style={{ width: "1.5em", height: "1.5em", color: "orange" }} />
                </span>
                <div>
                <p className="text-2xl font-semibold">85+</p>
                <p className="text-sm text-gray-600">Installations per year</p>
                </div>
            </div>

            </div>

        </div>

        </section>


    </div>
  )
}

export default Company