import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioItems } from '../data/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = portfolioItems.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#022c2b] to-[#01191d]">
                <div className="text-center">
                    <h2 className="text-2xl text-gray-300 mb-4">Projeto não encontrado</h2>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                    >
                        Voltar para Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d]">
            <div className="container mx-auto max-w-4xl">
                <button 
                    onClick={() => navigate('/')}
                    className="mb-8 text-teal-500 hover:text-teal-400 transition-colors flex items-center gap-2"
                >
                    ← Voltar
                </button>

                <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/10">
                    <div className="h-[400px] overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
                        <p className="text-gray-300 mb-6">{project.description}</p>

                        <div className="mb-8">
                            <h3 className="text-xl text-white mb-3">Tecnologias Utilizadas:</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white"
                            >
                                <FaGithub />
                                GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 transition-colors rounded-full text-white"
                            >
                                <FaExternalLinkAlt />
                                Ver Projeto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;