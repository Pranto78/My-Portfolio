import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  BookOpenCheck,
  PenLine,
  MonitorCog,
  NotebookPen,
} from "lucide-react";

const Education = () => {
  return (
    <div id="education" className="min-h-screen py-10 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center my-12"
      >
        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>
        <span
          className="mx-4 px-6 py-3 text-xl md:text-2xl font-bold rounded-full border-2 border-transparent text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
          style={{
            backgroundOrigin: "border-box",
            borderImage:
              "linear-gradient(to right, var(--gradient-start), var(--gradient-end)) 1",
            borderRadius: "999px",
          }}
        >
          Education
        </span>
        <div className="flex-grow h-px bg-slate-300/20 dark:bg-slate-700/50"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Animated Laptop Illustration */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full max-w-md"
          >
            <div className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl shadow-purple-500/40 transform hover:scale-105 transition-all duration-500">
              <div className="bg-gray-900 rounded-2xl p-4 shadow-inner">
                <div className="bg-gradient-to-br from-blue-500 to-purple-700 rounded-xl h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-12 px-6 text-white/90">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                      <div>
                        <div className="h-3 bg-white/30 rounded w-32"></div>
                        <div className="h-2 bg-white/20 rounded w-24 mt-2"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 bg-white/10 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 bg-gray-800 rounded-b-xl h-12"></div>
              </div>

              {/* Floating Animated Icons */}
              <motion.div
                initial={{ y: 0 }}
                whileInView={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6"
              >
                <div className="w-12 h-12 bg-blue-500/30 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-6"
              >
                <div className="w-10 h-10 bg-blue-500/40 rounded-full flex items-center justify-center shadow-lg">
                  <NotebookPen className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                whileInView={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-2"
              >
                <div className="w-14 h-14 bg-cyan-500/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <MonitorCog className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 right-0"
              >
                <div className="w-16 h-16 bg-purple-600/40 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpenCheck className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0, x: 0 }}
                whileInView={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 left-3"
              >
                <div className="w-10 h-10 bg-green-500/50 rounded-lg flex items-center justify-center shadow-lg">
                  <PenLine className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Tiny animated people */}
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 left-16"
            >
              <div className="w-8 h-12 bg-pink-400 rounded-t-full shadow-md"></div>
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ y: [-6, 6, -6] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute bottom-10 right-20"
            >
              <div className="w-8 h-12 bg-blue-400 rounded-t-full shadow-md"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-10"
        >
          {[
            {
              icon: <GraduationCap className="w-7 h-7 text-white" />,
              period: "2022 - 2026",
              title: "BACHELOR DEGREE",
              description:
                "American International University of Bangladesh (AIUB)",
              bgGradient: "from-purple-500 to-pink-500",
              borderColor: "border-purple-500/30",
              hoverBorder: "hover:border-purple-400/70",
            },
            {
              icon: <BookOpen className="w-7 h-7 text-white" />,
              period: "2020 - 2021",
              title: "HIGHER SECONDARY CERTIFICATE",
              description:
                "Rajshahi Education Board Govt. Model School & College",
              bgGradient: "from-blue-500 to-cyan-500",
              borderColor: "border-blue-500/30",
              hoverBorder: "hover:border-cyan-400/70",
            },
            {
              icon: <School className="w-7 h-7 text-white" />,
              period: "2018 - 2019",
              title: "SECONDARY SCHOOL CERTIFICATE",
              description:
                "Rajshahi Education Board Govt. Model School & College",
              bgGradient: "from-emerald-500 to-teal-500",
              borderColor: "border-emerald-500/30",
              hoverBorder: "hover:border-teal-400/70",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-16">
              <div
                className={`absolute left-0 top-2 w-12 h-12 bg-gradient-to-br ${item.bgGradient} rounded-xl flex items-center justify-center shadow-xl`}
              >
                {item.icon}
              </div>
              <div
                className={`bg-gradient-to-r from-gray-900/40 to-gray-800/20 backdrop-blur-md rounded-2xl p-6 border ${item.borderColor} ${item.hoverBorder} transition-all hover:scale-105 shadow-xl`}
              >
                <span className="text-cyan-400 text-sm font-semibold">
                  {item.period}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
