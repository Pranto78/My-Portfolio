import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Facebook, Instagram, Linkedin } from "lucide-react";

import myPhoto from "../../assets/BFW09348-01.jpeg";

// Variants for slide-in animation
const leftSideVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.9,
    },
  },
};

const rightSideVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.9,
    },
  },
};

const Hero = () => {
  const fullName = "I'm Fahim";
  const [displayName, setDisplayName] = useState("");
  const typingSpeed = 120;
  const pauseTime = 1000;

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      if (index <= fullName.length) {
        setDisplayName(fullName.slice(0, index));
        index++;
        timeout = setTimeout(type, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          index = 0;
          setDisplayName("");
          timeout = setTimeout(type, typingSpeed);
        }, pauseTime);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  const socialLinks = [
    {
      icon: <Facebook strokeWidth={2.5} size={22} />,
      href: "https://www.facebook.com/shahriyar.pranto.2025",
    },
    {
      icon: <Instagram strokeWidth={2.5} size={22} />,
      href: "https://www.instagram.com/_ruthless_youngster_/",
    },
    {
      icon: <Linkedin strokeWidth={2.5} size={22} />,
      href: "https://www.linkedin.com/in/md-fahim-shahriyar-pranto/",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 md:px-16 mt-15 overflow-hidden"
    >
      {/* ================= LEFT SIDE ================= */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        variants={leftSideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-xl font-medium mb-4"
        >
          Hello There
        </motion.p>

        <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
          {displayName}
          <span className="border-r-4 border-primary ml-1 animate-pulse" />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent mb-4"
        >
          Full Stack Developer | MERN | React Enthusiast
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-sm font-semibold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent"
        >
          An aspiring Full-Stack Developer with a strong passion <br />
          for software engineering and building real, practical solutions.{" "}
          <br />
          I enjoy working across both frontend and backend, and I’m <br />
          currently focused on becoming proficient in the MERN stack.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="btn text-black border-none bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
          >
            Hire Me <UserPlus strokeWidth={4} size={15} />
          </a>

          <a
            href="https://drive.google.com/file/d/1dpJVVzb00ReFnjR-lwT2hBibVn7TXit3/view"
            target="_blank"
            className="btn bg-transparent border-2 border-[var(--gradient-start)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] hover:text-blue-400"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* ================= CENTER SOCIAL ICONS (DESKTOP) ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30"
      >
        {/* TOP LINE */}
        <div className="w-[2px] h-12 bg-blue-400/50 rounded-full" />

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex flex-col gap-6"
        >
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full shadow-md bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
              text-black transition-all duration-300 hover:scale-125 hover:-rotate-3 hover:shadow-2xl"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* BOTTOM LINE */}
        <div className="w-[2px] h-12 bg-blue-400/50 rounded-full" />
      </motion.div>

      {/* ================= RIGHT SIDE ================= */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-end mt-14 md:mt-0"
        variants={rightSideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative jelly-wrapper"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <motion.div
            className="jelly-outline"
            animate={{
              borderRadius: [
                "42% 58% 55% 45% / 48% 52% 48% 52%",
                "55% 45% 42% 58% / 52% 48% 52% 48%",
                "42% 58% 55% 45% / 48% 52% 48% 52%",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src={myPhoto}
            alt="Fahim"
            className="relative z-10 w-[400px] h-[460px] object-cover"
            animate={{
              borderRadius: [
                "38% 62% 60% 40% / 45% 55% 45% 55%",
                "60% 40% 38% 62% / 55% 45% 55% 45%",
                "38% 62% 60% 40% / 45% 55% 45% 55%",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ================= MOBILE SOCIAL ICONS ================= */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex md:hidden gap-5 mt-8"
        >
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full shadow-md bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
              text-black transition-all duration-300 hover:scale-125 hover:shadow-2xl"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .jelly-wrapper {
          padding: 5px;
          filter: drop-shadow(0 0 40px rgba(0, 255, 200, 0.4));
        }

        .jelly-outline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            var(--gradient-start),
            var(--gradient-end)
          );
          z-index: 0;
          animation: glow 5s ease-in-out infinite;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 25px var(--gradient-start);
          }
          50% {
            box-shadow: 0 0 55px var(--gradient-end);
          }
          100% {
            box-shadow: 0 0 25px var(--gradient-start);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
