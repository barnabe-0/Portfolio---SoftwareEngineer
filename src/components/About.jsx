import React from 'react';
import { MdEmail } from 'react-icons/md';
import { PiPhone } from 'react-icons/pi';
import { CiLocationArrow1 } from 'react-icons/ci';

const About = () => {
    return (
        <section className="pt-60 pb-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-300">
                    SOBRE <span className="text-outline">MIM</span>
                </h2>

                <p className="text-gray-400 text-center mb-12">
                    Saiba mais sobre minha formação e experiência
                </p>

                <div className="bg-[#022c2b]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">
                            Quem sou eu?
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed"> 
                            Sou estudante de Engenharia de Software na FIAP, com foco no desenvolvimento de soluções tecnológicas inovadoras e eficientes. Atuo no desenvolvimento de aplicações utilizando React, Python e JavaScript, aliando boas práticas de código e princípios de arquitetura de software.
                        </p>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Busco constantemente aprimorar meus conhecimentos, acompanhar tendências do setor e contribuir em projetos que unam inovação, performance e propósito.
                        </p>
                    </div>

                    <div className="space-y-6 text-gray-300">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <CiLocationArrow1 className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Nome</p>
                                <p className="font-medium text-white">Nicolas Barnabe da Cruz</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <MdEmail className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">E-mail</p>
                                <a 
                                    href="mailto:nicolascruz20017@gmail.com" 
                                    className="font-medium text-white hover:text-teal-500 transition-colors"
                                >
                                    nicolascruz20017@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <PiPhone className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Telefone</p>
                                <a 
                                    href="tel:+5511977049295" 
                                    className="font-medium text-white hover:text-teal-500 transition-colors"
                                >
                                    (11) 97704-9295
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;