import React, { useState } from 'react';
import { portfolioItems } from '../data/data';

const ProjectSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProjects = portfolioItems.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-teal-500"
                />
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                    Nenhum projeto localizado
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    alt={project.title}
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                                <p className="text-slate-400 mt-2">{project.category}</p>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    {project.technologies?.map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-full text-teal-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectSearch;