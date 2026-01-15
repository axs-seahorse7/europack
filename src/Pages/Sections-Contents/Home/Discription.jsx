import React from 'react'
import {MoveUpRight } from "lucide-react";


const Discription = () => {
  return (
    <div 
    style={{backgroundImage: `url('/images/background-scaled.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }} 
    className='h-[100vh] w-full '
    >
        <div className='w-full py-20 px-10 relative bg-gradient-to-r from-slate-900/80 via-slate-600/20 to-transparent  flex flex-col h-full'>

            <p className='text-[2.5rem] text-white '>
                “At Europack I.S., we don’t just sell <br />
                equipment — we transfer technical <br />
                knowledge and support our customers <br />
                at every step, before and after <br />
                installation."
            </p>
            <p className='text-white mt-8 text-lg'>
                Alexandros Paraskevaidis, <span className='text-gray-500 font-medium'>Company CEO</span>
            </p>

            <div className='mt-20'>

                <div className="group flex gap-5 w-full cursor-pointer">
                    {/* Icon */}
                    <p
                        className="
                        text-white
                        transition-all duration-500
                        group-hover:text-orange-400
                        group-hover:rotate-45
                        flex items-center
                        "
                    >
                        <MoveUpRight size={30} />
                    </p>

                    {/* Text */}
                    <p
                        className="
                        text-white text-lg py-3 leading-[1]
                        transition-colors duration-500
                        group-hover:text-orange-400
                        "
                    >
                        The first step in optimizing your <br />
                        production
                    </p>

                    </div>

                <div className='h-[1px] w-full bg-gradient-to-r via-gray-400/20 from-white to-transparent'></div>
            </div>
        </div>
    </div>
  )
}

export default Discription