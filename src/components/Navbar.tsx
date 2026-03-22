"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#seed" },
  { name: "Roots", href: "#roots" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      
      setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ opacity }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl"
    >
      <nav className="relative flex items-center justify-between px-6 py-3 rounded-full bg-dark-card backdrop-blur-md border border-dark-border shadow-[0_0_20px_rgba(67,97,238,0.15)]">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/10 via-neon-blue/10 to-neon-green/10 -z-10 blur-md pointer-events-none" />
        
        <div className="flex gap-1 md:gap-4 w-full justify-between">
          {navLinks.map((link) => {
            const isActive = activeSection.toLowerCase() === link.href.substring(1).toLowerCase() || 
                             (activeSection === "Home" && link.name === "Home");
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative px-3 py-2 text-sm md:text-base transition-colors rounded-full ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Scroll Progress Indicator */}
      <div className="mt-4 flex justify-center">
         <div className="w-1/2 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
               className="h-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green"
               style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
            />
         </div>
      </div>
    </motion.header>
  );
};
