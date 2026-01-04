import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/BFW09348-01.jpeg";

const AboutMe = () => {
  const fullText = "Who Am I ?";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      const typingInterval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            index = 0;
            setDisplayedText("");
            typeText();
          }, 2000);
        }
      }, 150);
    };

    typeText();
  }, []);

  const cloudVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div id="about-me" className="min-h-screen md:py-12 md:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center my-8"
      >
        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>

        <span
          className="
            mx-4 px-6 py-3 text-xl md:text-2xl font-bold
            rounded-full
            border-2 border-transparent
            text-transparent bg-clip-text
            bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
          "
          style={{
            backgroundOrigin: "border-box",
            borderImage:
              "linear-gradient(to right, var(--gradient-start), var(--gradient-end)) 1",
          }}
        >
          About Me
        </span>

        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row items-start gap-12 px-12 py-10">
        {/* Left Side - Scroll animation */}
        <motion.div
          className="md:w-1/2 text-slate-700 dark:text-slate-300"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h3
            className="text-4xl font-extrabold mb-4 bg-gradient-to-r 
              from-[var(--gradient-start)] to-[var(--gradient-end)] 
              bg-clip-text text-transparent"
          >
            {displayedText}
          </motion.h3>

          <p
            className="mb-4 font-bold text-2xl bg-gradient-to-r 
              from-[var(--gradient-start)] to-[var(--gradient-end)] 
              bg-clip-text text-transparent"
          >
            An aspiring Full-Stack Developer with a strong passion for software
            engineering and building real, practical solutions. I enjoy working
            across both frontend and backend, and I’m currently focused on
            becoming proficient in the MERN stack.
          </p>
          <h1 className="text-4xl font-bold text-blue-300">My Programming Journey</h1>
          <p
            className="mb-4 font-bold text-2xl bg-gradient-to-r 
              from-[var(--gradient-start)] to-[var(--gradient-end)] 
              bg-clip-text text-transparent"
          >
            An aspiring Full-Stack Developer with a strong passion for software
            engineering and building real, practical solutions. I enjoy working
            across both frontend and backend, and I’m currently focused on
            becoming proficient in the MERN stack.
          </p>
        </motion.div>

        {/* Right Side - Premium zoom + fade Scroll animation */}
        {/* Right Side - Premium zoom + fade Scroll animation */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="relative rounded-3xl shadow-lg glow-border perspective-1000"
            whileHover="visible"
            initial="hidden"
          >
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-80 h-80 object-cover rounded-2xl"
            />

            {/* Cloud Overlay */}
            <motion.div
              variants={cloudVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="pointer-events-none absolute -top-30 -right-30 -translate-x-1/2 flex justify-center"
            >
              <div className="cloud">
                <span className="cloud-text">Assalamu alaikum</span>
                <span className="cloud-tail" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Glowing animated border */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 12px var(--gradient-start),
              0 0 24px var(--gradient-end);
          }
          50% {
            box-shadow: 0 0 24px var(--gradient-start),
              0 0 48px var(--gradient-end);
          }
        }
        .glow-border {
          animation: glow 2s ease-in-out infinite;
          border-radius: 1rem;
        }

        .cloud {
          position: relative;
          width: 260px;
          height: 135px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.98),
            rgba(255, 255, 255, 0.75)
          );
          border-radius: 80px;
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.25),
            inset 0 -12px 20px rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          filter: blur(0.2px);
        }


        .cloud-tail {
          position: absolute;
          bottom: -28px;
          left: 50%;
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .cloud-tail::after {
          content: "";
          position: absolute;
          bottom: -14px;
          left: -10px;
          width: 9px;
          height: 9px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
        }

        .cloud-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: rgba(17, 24, 39, 0.8);
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8),
            0 4px 8px rgba(0, 0, 0, 0.15);
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
