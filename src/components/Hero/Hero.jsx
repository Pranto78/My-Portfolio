import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Facebook, Instagram, Linkedin } from "lucide-react";

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

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5"
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
        className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent"
      >
        Full Stack Developer | MERN | React Enthusiast
      </motion.h2>

      {/* Social Icons */}
      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }} // show once, no repeat
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex gap-5 mt-2 mb-2"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="flex gap-5"
        >
          {[
            {
              icon: <Facebook size={22} />,
              href: "https://www.facebook.com/shahriyar.pranto.2025",
            },
            {
              icon: <Instagram size={22} />,
              href: "https://www.instagram.com/_ruthless_youngster_/",
            },
            {
              icon: <Linkedin size={22} />,
              href: "https://www.linkedin.com/in/md-fahim-shahriyar-pranto/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full shadow-md cursor-pointer bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
        text-white transition-all duration-300 hover:scale-125 hover:-rotate-3 hover:shadow-2xl"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="btn text-white border-none bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] hover:opacity-90"
        >
          Hire Me <UserPlus size={20} />
        </a>

        <a
          href="https://drive.google.com/file/d/1dpJVVzb00ReFnjR-lwT2hBibVn7TXit3/view?usp=sharing"
          download="Fahim_Resume.pdf"
          target="_blank"
          className="btn bg-transparent border-2 border-[var(--gradient-start)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] hover:bg-gradient-to-r hover:text-white hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)]"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
