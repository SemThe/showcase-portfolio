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
          {/* Green Glow Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[75vw] h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-20 left-1/4 w-[50vw] h-64 bg-green-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-32 right-1/4 w-[60vw] h-80 bg-emerald-400/15 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 left-1/6 w-[40vw] h-48 bg-green-300/8 rounded-full blur-2xl"></div>

            {/* Animated floating particles - spread across wider area */}
            <div
              className="absolute top-20 left-[15%] w-2 h-2 bg-green-400/60 rounded-full animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-32 right-[15%] w-1 h-1 bg-green-300/80 rounded-full animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-16 left-[70%] w-1.5 h-1.5 bg-emerald-400/70 rounded-full animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            ></div>
            <div
              className="absolute top-40 left-[10%] w-1 h-1 bg-green-500/60 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
            ></div>
            <div
              className="absolute top-24 right-[10%] w-2 h-2 bg-green-400/50 rounded-full animate-bounce"
              style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
            ></div>
            <div
              className="absolute top-28 left-[85%] w-1 h-1 bg-emerald-300/70 rounded-full animate-bounce"
              style={{ animationDelay: "2.5s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-36 left-[5%] w-1.5 h-1.5 bg-green-500/50 rounded-full animate-bounce"
              style={{ animationDelay: "1.2s", animationDuration: "3.8s" }}
            ></div>
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-transparent to-transparent"></div>

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
                  Beginnende developer met passie voor <span className="text-green-400">creatieve technologie</span> en
                  interactieve ervaringen. Momenteel bezig met mijn studie ICT Studio richting Media aan Fontys.
                </p>
                <p>
                  Ik leer elke dag bij en experimenteer graag met nieuwe technologieën om unieke digitale ervaringen te
                  creëren.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-12">
                <h3 className="font-mono text-green-400 mb-4">SKILLS</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["React/Next.js", "JavaScript", "CSS/Tailwind", "Node.js", "UI/UX Design"].map((skill) => (
                    <div
                      key={skill}
                      className="font-mono text-sm text-white/60 hover:text-green-400 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      → {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="relative overflow-hidden border border-green-400/30">
                <img
                  src="/images/portfoliofoto.png"
                  alt="Sem - Creative Developer"
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 font-mono text-xs text-green-400 bg-black/50 px-2 py-1">
                  [CREATIVE_DEVELOPER]
                </div>
                {/* Subtle green glow overlay */}
                <div className="absolute inset-0 bg-green-400/5 mix-blend-overlay"></div>
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
              {/* Project 1 - KNMI Website */}
              <div className="group cursor-pointer">
                <a href="https://github.com/lucasBFontys/knmi-opdracht" target="_blank" rel="noopener noreferrer">
                  <div className="border border-white/20 p-8 hover:border-green-400/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">
                        KNMI_WEBSITE_001
                      </h3>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-green-400 transition-colors" />
                    </div>
                    <p className="text-white/60 mb-4">
                      Promotie website voor de open-source KNMI weather app. Interactieve en informatieve pagina's om
                      gebruikers te informeren over de voordelen van de app en downloads te verhogen.
                    </p>
                    <div className="flex space-x-4 font-mono text-xs text-green-400">
                      <span>NEXT.JS</span>
                      <span>REACT</span>
                      <span>JAVASCRIPT</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Project 2 - DJ Leont */}
              <div className="group cursor-pointer">
                <a href="https://github.com/SemThe/djleont" target="_blank" rel="noopener noreferrer">
                  <div className="border border-white/20 p-8 hover:border-green-400/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">DJ_LEONT_002</h3>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-green-400 transition-colors" />
                    </div>
                    <p className="text-white/60 mb-4">
                      Professionele DJ portfolio website met moderne interface, event showcase en booking
                      functionaliteiten. Focus op visuele presentatie en gebruikerservaring.
                    </p>
                    <div className="flex space-x-4 font-mono text-xs text-green-400">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JAVASCRIPT</span>
                    </div>
                  </div>
                </a>
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
                  Interesse in samenwerken of gewoon een praatje? Laten we contact maken!
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:semthe.03@icloud.com"
                    className="flex items-center space-x-4 text-white/60 hover:text-green-400 transition-colors group"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-mono">semthe.03@icloud.com</span>
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
                <div className="text-white mb-4">Momenteel niet beschikbaar</div>
                <div className="text-white/40 text-sm">
                  Bezig met studie aan Fontys
                  <br />
                  Focus op leren en ontwikkelen
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
