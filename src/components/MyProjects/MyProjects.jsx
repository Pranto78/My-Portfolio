import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Project1 from "../../assets/Project_1.png";
import Project2 from "../../assets/Project_2.png";
import Project3 from "../../assets/Project_3.png";
import Project4 from "../../assets/Project_4.png";

const projects = [
  {
    id: 1,
    image: Project1,
    title: "Project One",
    description:
      "StyleDecor is a full-stack web application designed for a local home & ceremony decoration company. The platform allows users to explore decoration services, book consultations or on-site decoration services, make secure payments, and track service progress. It also provides powerful role-based dashboards for admins and decorators to manage services, bookings, and project workflows efficiently.This project focuses on solving real-world problems such as manual booking, poor service coordination, and lack of service tracking in local decoration businesses.",
    tech: [
      "React",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Jwt",
      "Stripe",
      "Firebase",
    ],
    github: "https://github.com/Pranto78/StyleDeco.git",
    live: "https://style-deco.web.app/",
  },
  {
    id: 2,
    image: Project2,
    title: "Project Two",
    description:
      "HomeNest is a modern real estate web application where users can browse, post, update, and manage properties for rent or sale. It features full authentication, CRUD functionality, dynamic property filtering, and a clean, responsive UI for a seamless experience.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
    ],
    github: "https://github.com/Pranto78/A-10-React.git",
    live: "https://scintillating-valkyrie-c953b9.netlify.app/",
  },
  {
    id: 3,
    image: Project3,
    title: "Project Three",
    description:
      "HomeNest is a modern real estate web application where users can browse, post, update, and manage properties for rent or sale. It features full authentication, CRUD functionality, dynamic property filtering, and a clean, responsive UI for a seamless experience.",
    tech: ["React", "Firebase", "Tailwind css", "Express.js", "MongoDB"],
    github: "https://github.com/Pranto78/A9-GreenNest.git",
    live: "https://thunderous-douhua-91d219.netlify.app/",
  },
  {
    id: 4,
    image: Project4,
    title: "Project Four",
    description:
      "Hero.io is a sleek and interactive web platform designed to make discovering and installing apps easier, faster, and more enjoyable.Users can explore trending apps, preview details, install their favorites, and manage installed apps — all within a beautiful, responsive interface.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Pranto78/Hero-App-React.git",
    live: "https://effortless-moxie-2e2874.netlify.app/",
  },
];

const tagColors = [
  "bg-blue-500/20 text-blue-300 border-blue-400/30",
  "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  "bg-pink-500/20 text-pink-300 border-pink-400/30",
  "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
  "bg-purple-500/20 text-purple-300 border-purple-400/30",
  "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
];


const ExpandableDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <motion.p
        animate={{ height: expanded ? "auto" : "4.5em" }}
        className="text-sm text-slate-300 overflow-hidden"
      >
        {text}
      </motion.p>

      {text.length > 140 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-xs font-semibold text-blue-400 hover:underline"
        >
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      )}
    </div>
  );
};

{/* <div className="flex-grow h-px bg-slate-700/40" />; */}
const MyProjects = () => {
  return (
    <div id="projects" className="min-h-screen py-12 px-6">
      {/* Header */}
      <div className="flex items-center justify-center my-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center w-full my-6"
        >
          <div className="flex-grow min-w-[60px] h-px bg-slate-700/40" />

          <span
            className="
      mx-4 px-6 py-3 text-xl md:text-2xl font-bold
      rounded-full border-2 border-transparent
      text-transparent bg-clip-text
      bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
    "
            style={{
              backgroundOrigin: "border-box",
              borderImage:
                "linear-gradient(to right, var(--gradient-start), var(--gradient-end)) 1",
              borderRadius: "999px",
            }}
          >
            My Projects
          </span>

          <div className="flex-grow min-w-[60px] h-px bg-slate-700/40" />
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-2xl overflow-hidden bg-transparent backdrop-blur-xl border border-slate-700"
          >
            {/* IMAGE + HOVER OVERLAY */}
            <div className="relative h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="p-4 rounded-full bg-slate-800 text-blue-400 hover:scale-110 transition"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="p-4 rounded-full bg-slate-800 text-cyan-400 hover:scale-110 transition"
                >
                  <FiExternalLink size={22} />
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
                {project.title}
              </h3>

              <ExpandableDescription text={project.description} />

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full border
    ${tagColors[i % tagColors.length]}
  `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
