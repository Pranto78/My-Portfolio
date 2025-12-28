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
      "StyleDecor is a full-stack web app for booking and managing home and ceremony decoration services. Users can browse services, book consultations or on-site decoration, make secure payments, and track project status. Admins and decorators manage services, bookings, and workflows efficiently.",
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
      "GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations ensuring a greener and healthier living space during any season.",
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

const ExpandableDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <motion.p
        animate={{ height: expanded ? "auto" : "4.5em" }}
        className={`text-sm bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] overflow-hidden`}
      >
        {text}
      </motion.p>

      {text.length > 140 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-xs font-semibold text-[var(--gradient-start)] hover:underline"
        >
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      )}
    </div>
  );
};


const MyProjects = () => {
  return (
    <div id="projects" className="min-h-screen py-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center my-4"
      >
        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>

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

        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: `0 0 15px var(--gradient-start), 0 0 30px var(--gradient-end)`,
            }}
            className="flex flex-col bg-transparent rounded-xl border border-slate-700 backdrop-blur-md overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-64 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Content */}
            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
                {project.title}
              </h3>

              {/* Description with Read More */}
              <ExpandableDescription text={project.description} />

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons pinned to bottom */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border text-white rounded-lg hover:bg-white/10 transition"
                >
                  <FaGithub /> Git Repository
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold hover:brightness-110 transition"
                >
                  <FiExternalLink /> Live Link
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
