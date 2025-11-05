import React from "react";
import ProjectSearch from "./ProjectSearch";

const Portfolio = () => {
    return(
        <section 
            id="portfolio"
            className="py-12 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d]">
           <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">Meu <span className="text-outline">Portfólio</span></h2>
                <p className="text-gray-400 text-center mb-12">
                    Confira alguns dos meus projetos recentes
                </p>
                <ProjectSearch />
           </div>
        </section>
    );
};

export default Portfolio;