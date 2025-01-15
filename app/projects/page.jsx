"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub, BsGlobe, BsVimeo, BsWindowDesktop } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    // num: "01",
    category: "Fullstack",
    title: "Gideon Rogue Productions",
    description:
      "A full stack application a music venue production house.",
    stack: [{ name: "NEXT JS" }, { name: "Flask" }],
    image: "/assets/projects/GRProductions.png",
    live: "https://gideon-rogue-productions.vercel.app/",
    github: "https://github.com/jharreldesign/Gideon-Rogue-Productions",
  },
  {
    // num: "04",
    category: "Fullstack",
    title: "Earthwise Packaging",
    description: "An eco-friendly e-commerce app for restaurants.",
    stack: [{ name: "React" }, { name: "MongoDB" }, { name: "Express" }, { name: "NodeJS" }],
    image: "/assets/projects/earthwise.png",
    live: "https://earthwisepackaging.netlify.app/",
    github: "https://github.com/jharreldesign/Earthwise-Packaging-Server",
  },
  {
    // num: "02",
    category: "Fullstack",
    title: "Cat Collector",
    description:
      "A full stack application to keep track of all your furry friends.",
    stack: [{ name: "Django" }, { name: "Python" }],
    image: "/assets/projects/catcollector.png",
    live: "https://cat-collector-django-0b9c0caf7459.herokuapp.com",
    github: "https://github.com/jharreldesign/django-crud-app-cat-collector",
  },
  {
    // num: "03",
    category: "Frontend",
    title: "MTG: League",
    description:
      "A revision of what a league page would look like if Magic: The Gathering had a sports league.",
    stack: [{ name: "HTML" }, { name: "JavaScript" }, { name: "CSS" }],
    image: "/assets/projects/mtg.png",
    live: "https://mtgleague.surge.sh/",
    github: "https://github.com/jharreldesign/MTGLeague",
  },
  {
    // num: "05",
    category: "Fullstack",
    title: "Real Time Chat",
    description: "A full stack app that allows you to chat in real time with others.",
    stack: [{ name: "React" }, { name: "Firebase" }],
    image: "/assets/projects/chat.png",
    live: "https://react-slack-clone-80647.firebaseapp.com/login",
    github: "",
  },
  {
    // num: "06",
    category: "Frontend",
    title: "Zombie Attack",
    description: "A React based game to show lifting state.",
    stack: [{ name: "React" }, { name: "CSS" }],
    image: "/assets/projects/zombies.png",
    live: "https://attackofthezombies.surge.sh/",
    github: "",
  },
  {
    // num: "06",
    category: "Video Production",
    title: "Demo Reel",
    description: "2023 Demo Reel",
    stack: [{ name: "Premiere Pro" }, { name: "After Effects" }],
    image: "/assets/projects/demo-reel.jpg",
    live: "https://vimeo.com/823934123",
    github: "",
    vimeo: "https://vimeo.com/823934123",
    videoUrl: "https://player.vimeo.com/video/823934123", 
  },
  {
    // num: "07",
    category: "Video Production",
    title: "Playoff Highlights: Golden State Warriors",
    description: "Highlight reel for the Golden State Warriors playoff game vs. Sacramento Kings",
    stack: [{ name: "Premiere Pro" }, { name: "After Effects" }],
    image: "/assets/projects/curry-playoff.png",
    live: "https://vimeo.com/823899563",
    github: "",
    vimeo: "https://vimeo.com/823899563",
    videoUrl: "https://player.vimeo.com/video/823899563", 
  },
  {
    // num: "07",
    category: "Motion Graphics",
    title: "Mr. Robot Title Sequence",
    description: "Title squence for the show Mr. Robot",
    stack: [{ name: "Premiere Pro" }, { name: "After Effects" }, {name: "Adobe Illustrator"}, {name: "Adobe Photoshop"}],
    image: "/assets/projects/mr-robot.jpg",
    live: "https://vimeo.com/233770793",
    github: "",
    vimeo: "https://vimeo.com/233770793",
    videoUrl: "https://player.vimeo.com/video/233770793", 
  },
  {
    // num: "07",
    category: "Video Production",
    title: "UC Davis Football Intro Hype",
    description: "Intro video for the UC Davis football team.",
    stack: [{ name: "Premiere Pro" }, { name: "After Effects" }],
    image: "/assets/projects/uc-davis-football-intro.jpg",
    live: "https://vimeo.com/779450696",
    github: "",
    vimeo: "https://vimeo.com/779448273",
    videoUrl: "https://player.vimeo.com/video/779450696", 
  },
  {
    // num: "08",
    category: "Video Production",
    title: "UC Davis Homeoming Commercial",
    description: "Promotional commercial played around the UC Davis campus to promote Homecoming.",
    stack: [{ name: "Premiere Pro" }, { name: "After Effects" }],
    image: "/assets/projects/homecoming.jpg",
    live: "https://vimeo.com/779448273",
    github: "",
    vimeo: "https://vimeo.com/779448273",
    videoUrl: "https://player.vimeo.com/video/779448273", 
  },
  {
    // num: "08"
    category: "Graphic Design",
    title: "UC Davis Football Countdown",
    description: "Social Media Content for Football Kickoff.",
    stack: [{ name: "Photoshop" }],
    image: "/assets/images/1-day-FB-IG.jpg",
    live: "https://dribbble.com/shots/25481574-UC-Davis",
    github: "",
    vimeo: "",
    videoUrl: "", 
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIframe, setCurrentIframe] = useState("");

  const openModal = (videoUrl) => {
    setCurrentIframe(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIframe("");
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6 xl:items-start"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-4 bg-white/10 rounded-lg shadow-lg"
            >
              {/* Image with click handler to open modal */}
              <div
                onClick={() => project.videoUrl && openModal(project.videoUrl)}
                className="relative h-48 w-full cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">
                  {project.category} Project: {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <li key={i} className="text-sm text-accent">
                      {tech.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {/* Live Project Button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center">
                        <BsGlobe className="text-white text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Conditional GitHub or Vimeo Icon */}
                {project.github ? (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center">
                          <BsGithub className="text-white text-xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : project.vimeo ? (
                  <div
                    onClick={() => openModal(project.videoUrl)}
                    className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center cursor-pointer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>
                          <BsVimeo className="text-white text-xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Vimeo Video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content relative">
            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="modal-close-btn"
            >
              Close
            </button>
            {/* Embed Vimeo Video */}
            <iframe
              src={currentIframe}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Project Video"
              className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;