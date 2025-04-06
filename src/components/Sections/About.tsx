"use client"
import GradientButton from "../GradientButton"
import ish from "@/../public/assets/ish.png"
import ellipse_1 from "@/../public/assets/ellipse-1.png"
import ellipse_2 from "@/../public/assets/ellipse-2.png"
import ellipse_3 from "@/../public/assets/ellipse-3.png"
import ellipse_4 from "@/../public/assets/ellipse-4.png"
import github from "@/../public/assets/github.png"
import linkedin from "@/../public/assets/linkedin.png"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const handleGithubClick = () => {
    window.open("https://github.com/IshmaelCasky", "_blank")
  }

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/ishmael-cascabel-25b675219", "_blank")
  }

  return (
    <div className="container mx-auto border-l-[1px] border-r-[1px] border-black border-opacity-20">
      <div className="flex justify-center items-center">
        <div className="flex xl:flex-row justify-center flex-col-reverse items-center lg:h-[50rem] 2xl:h-[50rem] w-full">
          {/* Info Container p-10 */}
          <div className="flex xl:text-left ssm:text-center xl:p-10 lg:mb-[3rem] text-center mb-7 flex-col w-[100%]">
            <h1 className="xl:text-[4rem] ssm:p-2 text-[2.6rem] xl:leading-[4rem] lg:leading-[3rem] font-extrabold leading-[4rem]">
              <span className="text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]">
                Building the web
              </span>{" "}
              <br /> one line at a time.
            </h1>
            <p className="w-[100%] p-3 mt-3 2xl:text-xl text-[#666666]">
              Hi! I&lsquo;m Ish, a web developer based in the Philippines. I create user-friendly web apps for fast-growing
              startups.
            </p>
            <div className="mt-8 xl:ml-[1rem] justify-center xl:justify-start flex">
              <GradientButton className="w-[8rem]">Book A Call</GradientButton>
              <a href="#" className="mt-1 ml-10 font-extrabold group text-black transition duration-300">
                Download CV
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative justify-start items-center flex-grow w-[100%] h-[20%] flex">
            <div className="flex justify-center relative w-[100%] h-auto">
              <div className="z-[1] h-auto flex ssm:w-[90%] sm:w-[60%] md:w-[55%] lg:w-[45%] xl:w-[70%] relative justify-center items-center">
                <Image src={ish || "/placeholder.svg"} alt="ish" className="z-[1]" />
                <Image src={ellipse_1 || "/placeholder.svg"} alt="ellipse" className="absolute w-[58%]" />
                <Image src={ellipse_2 || "/placeholder.svg"} alt="ellipse" className="absolute w-[70%]" />
                <Image src={ellipse_3 || "/placeholder.svg"} alt="ellipse" className="absolute w-[82%]" />
                <Image src={ellipse_4 || "/placeholder.svg"} alt="ellipse" className="absolute w-[93%]" />

                {/* GitHub Icon */}
                <motion.div
                  className="absolute left-[6.5%] animate-circular1 z-[2] cursor-pointer"
                  onClick={handleGithubClick}
                  whileHover={{
                    scale: 1.33, // 8% / 6% = 1.33
                    zIndex: 2,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={github || "/placeholder.svg"}
                    alt="github"
                    className="w-full bg-black rounded-full p-1"
                    width={25}
                  />
                </motion.div>

                {/* LinkedIn Icon */}
                <motion.div
                  className="absolute left-[94%] animate-circular2 z-[2] cursor-pointer"
                  onClick={handleLinkedinClick}
                  whileHover={{
                    scale: 1.33, // 8% / 6% = 1.33
                    zIndex: 2,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={linkedin || "/placeholder.svg"}
                    alt="linkedin"
                    className="w-full bg-black rounded-full p-1"
                    width={25}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

