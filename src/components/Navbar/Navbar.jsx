import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon, Github } from "lucide-react";
import logome from '../../assets/F.png'

const getLinkStyle = ({ isActive }) => {
  return {
    borderBottom: isActive ? "2px solid var(--gradient-start)" : "none",
    paddingBottom: "2px",
    background:
      "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
};

const SpaceCanvas = ({ enabled }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const starsRef = useRef([]);
  const dimsRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimsRef.current = { w: window.innerWidth, h: window.innerHeight };
      initStars();
    };

    const initStars = () => {
      const { w, h } = dimsRef.current;
      const isMobile = window.innerWidth < 768;
      starsRef.current = Array.from({
        length: isMobile ? 60 : 150,
      }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        speed: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    let last = performance.now();
    const draw = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      const { w, h } = dimsRef.current;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      starsRef.current.forEach((s) => {
        s.phase += 0.05;
        const alpha = 0.5 + Math.abs(Math.sin(s.phase)) * 0.5;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();

        s.x += s.speed * dt * 60;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
      });

      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const a = starsRef.current[i];
          const b = starsRef.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 130) {
            const lineAlpha = 1 - dist / 130;
            ctx.strokeStyle = `rgba(255,255,255,${lineAlpha * 0.4})`;
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        opacity: enabled ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    />
  );
};

const Navbar = () => {
  const [night, setNight] = useState(() => {
    try {
      const raw = localStorage.getItem("site-theme-night");
      return raw !== null ? JSON.parse(raw) : true;
    } catch {
      return true;
    }
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    try {
      localStorage.setItem("site-theme-night", JSON.stringify(night));
    } catch {}

    document.body.classList.toggle("theme-night", night);
    document.body.classList.toggle("theme-day", !night);
  }, [night]);

  // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-me", "skills", "projects", "education"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setNight((v) => !v);

  const gradientTextClass =
    "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent";

  const links = (
    <>
      {["home", "about-me", "skills", "projects", "education"].map((section) => (
        <li key={section}>
          <a
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${section}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            style={getLinkStyle({ isActive: activeSection === section })}
          >
            {section
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <div>
      <SpaceCanvas enabled={night} />

      <div
        className="navbar shadow-sm mx-auto fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-black/30"
        style={{ zIndex: 999 }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* Gradient Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                  // This makes the stroke use your gradient
                  style={{
                    stroke: "url(#gradient-stroke)",
                  }}
                />
                {/* Hidden gradient definition – works everywhere */}
                <defs>
                  <linearGradient
                    id="gradient-stroke"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="var(--gradient-start)" />
                    <stop offset="100%" stopColor="var(--gradient-end)" />
                  </linearGradient>
                </defs>
              </svg>
            </label>

            <ul className="font-bold menu menu-sm dropdown-content backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {links}
              <li className="lg:hidden mt-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full px-3 py-2 rounded-md bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                    {night ? (
                      <Sun className="text-yellow-400 w-4 h-4" />
                    ) : (
                      <Moon className="text-gray-800 w-4 h-4" />
                    )}
                  </span>
                  <span>{night ? "Day Mode" : "Night Mode"}</span>
                </button>
              </li>
            </ul>
          </div>

          <a className={`btn btn-ghost text-xl ${gradientTextClass}`}>
            <img className="w-12 h-8" src={logome} alt="" />
            FAHIM WEB
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="font-bold menu menu-horizontal px-1 gap-10">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="hidden lg:flex theme-toggle-pulse items-center justify-center w-10 h-10 rounded-full border-2 border-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] p-[2px] transition-all hover:scale-105"
          >
            <span className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-black">
              {night ? (
                <Sun className="text-yellow-400 w-5 h-5" />
              ) : (
                <Moon className="text-gray-800 w-5 h-5" />
              )}
            </span>
          </button>

          <a
            href="https://github.com/Pranto78"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1 rounded-md border-none bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white hover:opacity-90 transition"
          >
            <Github strokeWidth={2.5} className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
