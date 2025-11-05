import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/data";

const cardHover = {
    rotateX: 6,
    rotateY: -6,
    scale: 1.03,
};

const itemHover = {
    scale: 1.05,
    rotateY: 6,
};

const Skills = () => {
    return (
        <section id="skills" className="py-12 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-300">MINHAS <span className="text-outline">SKILLS</span></h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillsData.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={cardHover}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 flex flex-col gap-4"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-teal-400">{item.title}</h3>

                            <div className="flex flex-wrap gap-3">
                                {item.skills.map((skill, sidx) => (
                                    <motion.div
                                        key={sidx}
                                        whileHover={itemHover}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg cursor-pointer"
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className="text-sm text-gray-300">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;