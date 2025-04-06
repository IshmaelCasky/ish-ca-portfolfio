"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample project data with real images
const projects = [
  {
    id: 1,
    name: "LTN",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    logo: "LTN",
    description: "A digital platform for seamless content delivery and management.",
    technologies: ["React", "Node.js", "MongoDB"],
    color: "bg-blue-900",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Incognito",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2080&auto=format&fit=crop",
    logo: "incognito",
    description: "Modern interior design solutions with a focus on minimalism and functionality.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    color: "bg-neutral-100",
    textColor: "text-black",
  },
  {
    id: 3,
    name: "Gridify",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
    logo: "⋮⋮⋮",
    description: "Data visualization tool that transforms complex datasets into intuitive grid layouts.",
    technologies: ["React", "D3.js", "Firebase"],
    color: "bg-purple-600",
    textColor: "text-white",
  },
  {
    id: 4,
    name: "Wavelength",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    logo: "〰️",
    description: "Audio processing application with real-time visualization and editing capabilities.",
    technologies: ["Angular", "Web Audio API", "TypeScript"],
    color: "bg-teal-500",
    textColor: "text-white",
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right, 0 for initial
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate indices for visible projects
  const getVisibleProjects = () => {
    const leftIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1
    const rightIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1

    return {
      left: leftIndex,
      center: activeIndex,
      right: rightIndex,
    }
  }

  const { left, center, right } = getVisibleProjects()

  // Smooth scroll to next project
  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 800)
  }

  // Smooth scroll to previous project
  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 800)
  }

  // Handle click on a project card
  const goToProject = (index: number) => {
    if (isAnimating || index === activeIndex) return

    // Determine if we're going left or right based on the clicked item
    let newDirection

    // Calculate the shortest path to the target index
    if (index === left) {
      newDirection = -1
    } else if (index === right) {
      newDirection = 1
    } else {
      // For non-adjacent items, determine the shortest path
      const clockwiseDistance = (index - activeIndex + projects.length) % projects.length
      const counterClockwiseDistance = (activeIndex - index + projects.length) % projects.length
      newDirection = clockwiseDistance <= counterClockwiseDistance ? 1 : -1
    }

    setIsAnimating(true)
    setDirection(newDirection)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 400)
  }

  // Preload images for smoother transitions
  useEffect(() => {
    projects.forEach((project) => {
      const img = new window.Image()
      img.src = project.image
    })
  }, [])

  return (
    <div className="border-l-[1px] border-b-[1px] border-r-[1px] w-full relative flex mx-auto border-black border-opacity-20">
      <div className="w-full max-w-6xl mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-[15rem] right-20 w-12 h-12"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-orange-400 transform rotate-45"></div>
        </motion.div>

    


        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Built with <span className="text-pink-500">efficient</span> and{" "}
            <span className="text-orange-500">maintainable</span> code
          </h2>
          <div className="inline-block relative">
            <span className="text-transparent text-[1.4rem] drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B] uppercase font-bold tracking-wider ">Projects</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]"></div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative h-[450px] flex items-center justify-center perspective overflow-hidden">
          {/* Left project */}
          <motion.div
            key={`left-${projects[left].id}-${activeIndex}`}
            className={`absolute cursor-pointer mr-[5rem] ${projects[left].color} rounded-lg overflow-hidden shadow-lg`}
            style={{
              width: "220px",
              height: "280px",
              transformStyle: "preserve-3d",
              zIndex: 1,
            }}
            initial={{
              x: direction >= 0 ? -300 : 220,
              opacity: 0,
              scale: 0.6,
              rotateY: direction >= 0 ? -30 : 15,
            }}
            animate={{
              x: -220,
              opacity: 0.7,
              scale: 0.8,
              rotateY: 15,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // Custom ease
              },
            }}
            onClick={() => goToProject(left)}
            onHoverStart={() => setHoveredIndex(left)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{
              scale: 0.9,
              y: -20,
              opacity: 1,
              zIndex: 10,
              transition: { duration: 1 },
            }}
          >
            <div className="relative w-full h-full">
              <NextImage
                src={projects[left].image || "/placeholder.svg"}
                alt={projects[left].name}
                fill
                className="object-cover"
                priority={true}
                sizes="220px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className={`text-4xl font-bold ${projects[left].textColor}`}>{projects[left].logo}</div>
              </div>

              {/* Hover info */}
              {hoveredIndex === left && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-80 p-4 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{projects[left].name}</h3>
                  <p className="text-sm text-white mb-2">{projects[left].description}</p>
                  <div className="flex flex-wrap gap-1">
                    {projects[left].technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Center (active) project */}
          <motion.div
            key={`center-${projects[center].id}-${activeIndex}`}
            className={`absolute cursor-pointer ${projects[center].color} rounded-lg overflow-hidden shadow-xl`}
            style={{
              width: "300px",
              height: "380px",
              transformStyle: "preserve-3d",
              zIndex: 2,
            }}
            initial={{
              x: direction > 0 ? 220 : -220,
              opacity: 0.7,
              scale: 0.8,
              rotateY: direction > 0 ? -15 : 15,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom ease
              },
            }}
            onClick={() => goToProject(center)}
            onHoverStart={() => setHoveredIndex(center)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{
              scale: 1.05,
              y: -20,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full h-full">
              <NextImage
                src={projects[center].image || "/placeholder.svg"}
                alt={projects[center].name}
                fill
                className="object-cover"
                priority={true}
                sizes="300px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className={`text-5xl font-bold ${projects[center].textColor}`}>{projects[center].logo}</div>
              </div>

              {/* Hover info */}
              {hoveredIndex === center && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-80 p-6 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{projects[center].name}</h3>
                  <p className="text-white mb-3">{projects[center].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[center].technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right project */}
          <motion.div
            key={`right-${projects[right].id}-${activeIndex}`}
            className={`absolute cursor-pointer ml-[5rem] ${projects[right].color} rounded-lg overflow-hidden shadow-lg`}
            style={{
              width: "220px",
              height: "280px",
              transformStyle: "preserve-3d",
              zIndex: 1,
            }}
            initial={{
              x: direction <= 0 ? 300 : -220,
              opacity: 0,
              scale: 0.6,
              rotateY: direction <= 0 ? 30 : -15,
            }}
            animate={{
              x: 220,
              opacity: 0.7,
              scale: 0.8,
              rotateY: -15,
              transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom ease
              },
            }}
            onClick={() => goToProject(right)}
            onHoverStart={() => setHoveredIndex(right)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{
              scale: 0.9,
              y: -20,
              opacity: 1,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-full h-full">
              <NextImage
                src={projects[right].image || "/placeholder.svg"}
                alt={projects[right].name}
                fill
                className="object-cover"
                priority={true}
                sizes="220px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className={`text-4xl font-bold ${projects[right].textColor}`}>{projects[right].logo}</div>
              </div>

              {/* Hover info */}
              {hoveredIndex === right && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-80 p-4 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{projects[right].name}</h3>
                  <p className="text-sm text-white mb-2">{projects[right].description}</p>
                  <div className="flex flex-wrap gap-1">
                    {projects[right].technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 -ml-10 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous project"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 -mr-10 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next project"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-10 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-pink-500 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

