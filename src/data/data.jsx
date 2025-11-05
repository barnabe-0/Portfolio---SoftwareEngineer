import React, { useState, useEffect } from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";


export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <DiPython className="text-yellow-400" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content:
      '"Imam delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    position: "Product Manager, InnovateCo",
    content:
      '"Working with Imam was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "David Wilson",
    position: "Founder, StartupHub",
    content:
      '"Imam\'s technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// Portfolio data
import ecommerceSustentavel from '../assets/ecommerce-sustentavel.jpg';
import siscamex from '../assets/siscamex.jpg';

export const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "Web Design",
    image: ecommerceSustentavel,
    description: "Um e-commerce sustentável desenvolvido com React e Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/seu-usuario/ecommerce-sustentavel",
    live: "https://ecommerce-sustentavel.vercel.app"
  },
  {
    id: 2,
    title: "SisCamEx",
    category: "UI/UX Design",
    image: siscamex,
    description: "Sistema de gerenciamento de câmbio estudantil",
    technologies: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/seu-usuario/siscamex",
    live: "https://siscamex.vercel.app"
  },
  {
    id: 3,
    title: "Projeto Passa Bola",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    description: "Plataforma de gerenciamento de eventos esportivos",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/seu-usuario/passa-bola",
    live: "https://passa-bola.vercel.app"
  },
];
export const experiences = [
  {
    id: 1,
    company: "Webverse Digital",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Fullstack Developer",
    period: "April 2024 - Present",
    description:
      "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Next JS",
    ],
  },
  {
    id: 2,
    company: "Agumentik Group of Companies",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Fullstack Engineer",
    period: "July 2023 - March 2024",
    description:
      "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using modern technologies.",
    skills: ["React JS", "Node JS", "Express", "MongoDB"],
  },
];