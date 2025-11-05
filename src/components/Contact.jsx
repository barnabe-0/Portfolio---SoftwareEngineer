import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { CiLocationArrow1 } from 'react-icons/ci';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        alert(`Mensagem enviada com sucesso!\n\nNome: ${data.name}\nEmail: ${data.email}\nMensagem: ${data.message}`);
        e.target.reset();
    };

    return (
        <section id="contact" className="py-16 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">Entre em <span className="text-outline">Contato</span></h2>
                <p className="text-gray-400 text-center mb-12">
                    Vamos conversar sobre seu projeto
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Informações de Contato */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-4 rounded-full bg-white/10">
                                <MdEmail className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <p className="text-gray-400">nicolascruz20017@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-4 rounded-full bg-white/10">
                                <BsWhatsapp className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <h4 className="font-medium">WhatsApp</h4>
                                <p className="text-gray-400">(11) 97704-9295</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-4 rounded-full bg-white/10">
                                <LiaLinkedin className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <p className="text-gray-400">nicolasbcruz</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-4 rounded-full bg-white/10">
                                <CiLocationArrow1 className="text-xl text-teal-500" />
                            </div>
                            <div>
                                <h4 className="font-medium">Localização</h4>
                                <p className="text-gray-400">São Paulo, Brasil</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulário de Contato */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="Seu nome"
                                required
                                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Seu email"
                                required
                                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-teal-500"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Sua mensagem"
                                required
                                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-teal-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 text-white font-medium hover:opacity-90 transition-opacity"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;