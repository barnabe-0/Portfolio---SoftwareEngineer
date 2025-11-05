
import { Fragment, useEffect, useState } from 'react';
import { navItems } from '../data/data';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <div className="text-2xl text-white font-bold text-outline">NBC</div>
                    <ul className="hidden md:flex space-x-8 text-white text-sm uppercase">
                        {
                            navItems.map((item) => (
                                <li 
                                    key={item.id} 
                                    className={`hover:text-teal-500 cursor-pointer transition-colors duration-300 ${activeSection === item.id ? 'text-teal-500' : ''}`}
                                    onClick={() => {
                                        const section = document.getElementById(item.id);
                                        section?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))
                        }
                    </ul>
                    <button 
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all"
                    >
                        Contato
                    </button>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;