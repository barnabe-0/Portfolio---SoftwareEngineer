import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-10 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d] border-t border-white/10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-6">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/barnabe-0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-gray-300 hover:text-teal-500 transition-all duration-300 transform hover:-translate-y-1"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicolas-cruz-148490253/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-gray-300 hover:text-teal-500 transition-all duration-300 transform hover:-translate-y-1"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-gray-400 text-center">
                            © 2025 Nicolas Barnabe. Todos os direitos reservados.
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-500">
                            Feito  usando React e Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;