import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const SkillMeasurement = () => {
  const [open, setOpen] = useState(false);

  const skillLevels = [
    { name: "React", img: "https://i.ibb.co/Y4TTz48V/r.jpg", level: 92 },
    { name: "Figma", img: "https://i.ibb.co/5g8dFCWb/Figma.png", level: 75 },
    {
      name: "Firebase",
      img: "https://i.ibb.co/WWycpvfQ/images-2.png",
      level: 85,
    },
    {
      name: "MongoDB",
      img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      level: 80,
    },
    { name: "Express.js", img: "https://i.ibb.co/8LCphjKF/36.webp", level: 78 },
    {
      name: "Next.js",
      img: "https://i.ibb.co/B5Wxbncr/nextjs-icon-dark-background.png",
      level: 70,
    },
    {
      name: "TypeScript",
      img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      level: 68,
    },
    {
      name: "C++",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      level: 65,
    },
    {
      name: "C#",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      level: 60,
    },
    {
      name: "PostgreSQL",
      img: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
      level: 72,
    },
    {
      name: "HTML",
      img: "https://i.ibb.co/1G2BKwzK/HTML-5-Badge-Logo.png",
      level: 95,
    },
    {
      name: "Tailwind CSS",
      img: "https://i.ibb.co/kgR6RNrK/images-1.png",
      level: 90,
    },
  ];


  return (
    <div className="mt-20 max-w-5xl mx-auto px-4">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={false}
        whileHover={{
          scale: 1.06,
          boxShadow:
            "0 0 25px rgba(37,99,235,0.45), 0 0 60px rgba(131,141,156,0.35)",
        }}
        whileTap={{ scale: 0.96 }}
        className="
    relative overflow-hidden
    w-full flex items-center justify-center gap-4
    px-10 py-6 rounded-full
    text-xl md:text-2xl font-bold text-white
    bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
    shadow-2xl
  "
      >
        {/* 🌟 Shine sweep */}
        <motion.span
          className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-r
      from-transparent via-white/40 to-transparent
      -skew-x-12
    "
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 🧊 Glass inner highlight */}
        <span
          className="
      absolute inset-[2px]
      rounded-full
      bg-white/10
      backdrop-blur-sm
    "
        />

        {/* 🔮 Glow pulse */}
        <motion.span
          className="
      absolute -inset-2 rounded-full
      bg-gradient-to-r
      from-[var(--gradient-start)]
      to-[var(--gradient-end)]
      blur-xl opacity-30
    "
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-4">
          Skill Measurement
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Plus size={28} />
          </motion.span>
        </span>
      </motion.button>

      {/* Graph Section */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              mt-10 p-8 rounded-2xl
               backdrop-blur
              
            "
          >
            <div className="space-y-6">
              {skillLevels.map((skill, i) => (
                <div key={i} className="space-y-2">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-slate-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-slate-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-4 rounded-full bg-slate-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: i * 0.05,
                      }}
                      className="
                        h-full rounded-full
                        bg-gradient-to-r
                        from-[var(--gradient-start)]
                        to-[var(--gradient-end)]
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillMeasurement;
