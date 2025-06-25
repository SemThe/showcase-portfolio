"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import GlitchText from "@/components/glitch-text"
import CustomCursor from "@/components/custom-cursor"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const sectionsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine current section
      const sections = sectionsRef.current
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setCurrentSection(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <CustomCursor />
      <ScrollIndicator />

      <main className="bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex flex-col justify-center items-center relative"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full p-8">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>

          {/* Main Title */}
          <div className="z-10 text-center">
            <GlitchText text="SEMTHE" className="mb-8" />
            <div className="space-y-2 font-mono text-sm tracking-wider">
              <div className="text-green-400">[CREATIVE DEVELOPER]</div>
              <div className="text-white/60">PORTFOLIO.2025.V1</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
            onClick={() => scrollToSection(1)}
          >
            <div className="flex flex-col items-center space-y-2 text-white/60 group-hover:text-white transition-colors">
              <span className="font-mono text-xs">SCROLL</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>

          {/* Side Navigation */}
          <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col space-y-4">
              {["HOME", "ABOUT", "WORK", "CONTACT"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index)}
                  className={`font-mono text-xs tracking-wider transition-all duration-300 ${
                    currentSection === index ? "text-green-400 scale-110" : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </section>

        {/* About Section */}
        <section ref={(el) => (sectionsRef.current[1] = el)} className="min-h-screen flex items-center px-8 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-8 text-white">
                ABOUT<span className="text-green-400">.</span>
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  Creative developer met passie voor <span className="text-green-400">futuristisch design</span> en
                  interactieve ervaringen. Gespecialiseerd in moderne web technologieën.
                </p>
                <p>
                  Ik combineer technische skills met creatieve visie om unieke digitale ervaringen te creëren die zowel
                  functioneel als visueel indrukwekkend zijn.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-12">
                <h3 className="font-mono text-green-400 mb-4">SKILLS</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["React/Next.js", "JavaScript", "CSS/Tailwind", "Node.js", "UI/UX Design", "Motion Design"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="font-mono text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                      >
                        → {skill}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Animated Element */}
            <div className="relative">
              <div className="w-full h-96 border border-green-400/30 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                  }}
                ></div>
                <div className="absolute bottom-4 right-4 font-mono text-xs text-green-400">[CREATIVE_VISION]</div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold mb-16 text-white">
              WORK<span className="text-green-400">.</span>
            </h2>

            <div className="space-y-16">
              {/* Project 1 */}
              <div className="group cursor-pointer">
                <div className="border border-white/20 p-8 hover:border-green-400/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">PROJECT_001</h3>
                    <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-green-400 transition-colors" />
                  </div>
                  <p className="text-white/60 mb-4">
                    Futuristische portfolio website met interactieve elementen en moderne animaties.
                  </p>
                  <div className="flex space-x-4 font-mono text-xs text-green-400">
                    <span>REACT</span>
                    <span>NEXT.JS</span>
                    <span>TAILWIND</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group cursor-pointer">
                <div className="border border-white/20 p-8 hover:border-green-400/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">PROJECT_002</h3>
                    <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-green-400 transition-colors" />
                  </div>
                  <p className="text-white/60 mb-4">
                    Interactieve web applicatie met focus op gebruikerservaring en moderne interface.
                  </p>
                  <div className="flex space-x-4 font-mono text-xs text-green-400">
                    <span>JAVASCRIPT</span>
                    <span>CSS</span>
                    <span>UI/UX</span>
                  </div>
                </div>
              </div>

              {/* Coming Soon */}
              <div className="border border-white/10 p-8 opacity-50">
                <h3 className="text-2xl font-bold mb-4">MORE_PROJECTS</h3>
                <p className="text-white/40 font-mono text-sm">[COMING_SOON]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={(el) => (sectionsRef.current[3] = el)} className="min-h-screen flex items-center px-8 py-16">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-6xl font-bold mb-16 text-white">
              CONTACT<span className="text-green-400">.</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xl text-white/80 mb-8">
                  Klaar voor een samenwerking? Laten we iets <span className="text-green-400">futuristisch</span>{" "}
                  bouwen.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:contact@semthe.dev"
                    className="flex items-center space-x-4 text-white/60 hover:text-green-400 transition-colors group"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-mono">contact@semthe.dev</span>
                  </a>

                  <a
                    href="https://github.com/semthe"
                    className="flex items-center space-x-4 text-white/60 hover:text-green-400 transition-colors group"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-mono">github.com/semthe</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/semthe"
                    className="flex items-center space-x-4 text-white/60 hover:text-green-400 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-mono">linkedin.com/in/semthe</span>
                  </a>
                </div>
              </div>

              <div className="border border-white/20 p-8">
                <div className="font-mono text-xs text-green-400 mb-4">[STATUS]</div>
                <div className="text-white mb-4">Available for freelance work</div>
                <div className="text-white/40 text-sm">
                  Currently based in Netherlands
                  <br />
                  Open to remote opportunities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 py-8 px-8">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-mono text-xs text-white/40">© 2025 SEMTHE. ALL RIGHTS RESERVED.</div>
            <div className="font-mono text-xs text-white/40">DESIGNED & DEVELOPED BY SEMTHE</div>
          </div>
        </footer>
      </main>
    </>
  )
}
