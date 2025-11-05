import React from 'react';
import Animated from './utils/Animated';
import backgroundImage from '../assets/Image_fundo.png';
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

const Hero = () => {
    return (
    <section id='home' className="relative min-h-screen flex items-center">
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9
                }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#022c2b]/95 via-[#01191d]/80 to-[#01191d]/30"></div>

            {/* content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="w-full md:max-w-[60%] text-center md:text-left">
                    <h3 className="text-lg font-light capitalize tracking-wide text-teal-500">
                        Eu sou Nicolas Barnabe da Cruz
                    </h3>
                    <Animated />
                    <p className='mt-4 text-gray-300 max-w-xl'>
                        Sou um engenheiro de software apaixonado por tecnologia, inovação e resolução de problemas. Tenho experiência em desenvolvimento web, com foco em criar soluções eficientes, escaláveis e com ótimo desempenho. 
                    </p>
                    <div className='mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400'>
                        <span className='px-4 bg-white/10 backdrop-blur-md rounded-full'>Frontend Development</span>
                        <span className='px-4 bg-white/10 backdrop-blur-md rounded-full'>Backend Development</span>

                    </div>

                    <div className="flex gap-5 mt-8 justify-center md:justify-start text-gray-400">
                        <button 
                            className="p-3 bg-white/10 rounded-full hover:bg-teal-400 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </button>

                        <button 
                            className="p-3 bg-white/10 rounded-full hover:bg-teal-400 hover:text-white transition-colors"
                            aria-label="WhatsApp"
                        >
                            <BsWhatsapp />
                        </button>

                        <button 
                            className="p-3 bg-white/10 rounded-full hover:bg-teal-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <LiaLinkedin />
                        </button>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="px-6 py-2 text-sm rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light text-white hover:opacity-70 transition-opacity">
                            Meus Projetos
                        </button>

                        <button className="px-6 py-2 text-sm rounded-full bg-white/10 backdrop-blur-md font-light text-gray-300 hover:text-white hover:bg-white/20 transition-colors">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;