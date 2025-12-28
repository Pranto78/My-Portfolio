import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SkillMeasurement from "../SkillMeasurement/SkillMeasurement";

const skills = [
  { name: "React", img: "https://i.ibb.co/Y4TTz48V/r.jpg" },
  { name: "Figma", img: "https://i.ibb.co/5g8dFCWb/Figma.png" },
  { name: "Firebase", img: "https://i.ibb.co/WWycpvfQ/images-2.png" },
  {
    name: "MongoDB",
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  { name: "Express.js", img: "https://i.ibb.co/8LCphjKF/36.webp" },
  {
    name: "Next.js",
    img: "https://i.ibb.co/B5Wxbncr/nextjs-icon-dark-background.png",
  },
  {
    name: "TypeScript",
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "C#",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  { name: "HTML", img: "https://i.ibb.co/1G2BKwzK/HTML-5-Badge-Logo.png" },
  { name: "Tailwind CSS", img: "https://i.ibb.co/kgR6RNrK/images-1.png" },
];

const Skills = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();

 useEffect(() => {
   const updateWidth = () => {
     if (containerRef.current) {
       const width = containerRef.current.scrollWidth / 2;
       setContainerWidth(width);
     }
   };

   // Initial calculation
   updateWidth();

   // Recalculate after images load
   const images = containerRef.current?.querySelectorAll("img") || [];
   images.forEach((img) => img.addEventListener("load", updateWidth));

   // Recalculate on window resize
   window.addEventListener("resize", updateWidth);

   return () => {
     images.forEach((img) => img.removeEventListener("load", updateWidth));
     window.removeEventListener("resize", updateWidth);
   };
 }, []);

 useEffect(() => {
   if (containerWidth > 0) {
     controls.start({
       x: [0, -containerWidth],
       transition: {
         repeat: Infinity,
         repeatType: "loop",
         duration: 60,
         ease: "linear",
       },
     });
   }
 }, [containerWidth]);


  const pauseScroll = async () => {
    const current = await controls.get();
    controls.stop();
    controls.set({ x: current.x });
  };

  const resumeScroll = async () => {
    const current = await controls.get();
    controls.start({
      x: [current.x, -containerWidth],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration:
          ((Math.abs(current.x) + containerWidth) / containerWidth) * 60,
        ease: "linear",
      },
    });
  };

  return (
    <div id="skills" className="min-h-screen py-12 px-6">
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
          Skills
        </span>

        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>
      </motion.div>

      {/* Sections with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent mb-4">
          Frontend Technologies
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {[
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "DaisyUI",
            "HTML5",
            "CSS3",
          ].map((item, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] hover:scale-110 duration-300"
            >
              <span className="block px-4 py-2 rounded-full bg-slate-900 text-[var(--gradient-start)]">
                {item}
              </span>
            </motion.span>
          ))}
        </motion.div>

        <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent mb-4">
          Backend Technologies
        </h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {["Node.js", "Express.js", "MongoDB", "Firebase", "JWT"].map(
            (item, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] hover:scale-110 duration-300"
              >
                <span className="block px-4 py-2 rounded-full bg-slate-900 text-[var(--gradient-start)]">
                  {item}
                </span>
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Marquee enters with scroll reveal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative overflow-hidden"
        ref={containerRef}
      >
        <motion.div
          className="flex gap-4"
          animate={controls}
          onMouseEnter={pauseScroll}
          onMouseLeave={resumeScroll}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 12px var(--gradient-start), 0 0 24px var(--gradient-start)`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="flex-shrink-0 w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
            >
              <div className="skill-card relative w-full h-full flex flex-col items-center justify-center gap-2 bg-slate-100/80 border border-slate-200 rounded-lg overflow-hidden">
                <img
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  src={skill.img}
                />
                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <SkillMeasurement></SkillMeasurement>
    </div>
  );
};

export default Skills;
