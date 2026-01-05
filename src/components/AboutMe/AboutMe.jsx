import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/BFW09348-01.jpeg";
import { Code, Gamepad2, MapPin, MessageCircle } from "lucide-react";

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
        {/* Left Side */}
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

          <div className="flex flex-col md:flex-row gap-10 mt-6">
            {/* Column 1 */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-blue-300 mb-3">
                My Programming Journey
              </h1>
              <p
                className="text-lg font-semibold bg-gradient-to-r 
      from-[var(--gradient-start)] to-[var(--gradient-end)]
      bg-clip-text text-transparent leading-relaxed"
              >
                I started exploring programming out of curiosity and it soon
                became a passion. Over time, I built projects using JavaScript,
                React, Node.js and modern backend technologies — constantly
                aiming for cleaner design, better performance, and scalable
                architecture.
              </p>
            </div>

            {/* Divider */}
            <div
              className="hidden md:flex w-px bg-gradient-to-b 
    from-[var(--gradient-start)] to-[var(--gradient-end)]"
            ></div>

            {/* Column 2 */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-blue-300 mb-3">
                The Type of Work I Enjoy
              </h1>
              <p
                className="text-lg font-semibold bg-gradient-to-r 
      from-[var(--gradient-start)] to-[var(--gradient-end)]
      bg-clip-text text-transparent leading-relaxed"
              >
                I love building beautiful and interactive UI experiences and
                creating new things from scratch. I enjoy learning continuously,
                exploring new technologies, and gaining fresh experiences that
                help me grow as a developer. Outside of coding, I love traveling
                and discovering new places around the world
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center gap-10"
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
              className="w-100 h-100 object-cover rounded-2xl"
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

          {/* ⭐ NEW SECTION (Centered Under Image, Not Covering Anything) */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-300 text-center">
              {/* Interest */}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-slate-800/60 border border-slate-700">
                  <Code size={26} className="text-blue-400" />
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
                  Interest
                </p>
                <p className="text-lg font-semibold">Web Development</p>
              </div>

              {/* Hobby */}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-slate-800/60 border border-slate-700">
                  <Gamepad2 size={26} className="text-blue-400" />
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
                  Hobby
                </p>
                <p className="text-lg font-semibold">Gaming</p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-slate-800/60 border border-slate-700">
                  <MapPin size={26} className="text-blue-400" />
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
                  Location
                </p>
                <p className="text-lg font-semibold">Rajshahi, Bangladesh</p>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-slate-800/60 border border-slate-700">
                  <MessageCircle size={26} className="text-blue-400" />
                </div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
                  WhatsApp
                </p>
                <p className="text-lg font-semibold">+880-1916-836881</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glowing border & cloud style */}
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
