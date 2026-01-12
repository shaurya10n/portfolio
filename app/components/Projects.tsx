"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ShopGPT",
    description:
      "AI-powered shopping assistant that aggregates real-time deals and provides personalized recommendations using OpenAI.",
    tags: ["Python", "Django", "React", "MongoDB", "OpenAI", "Firebase"],
    link: "https://github.com/shaurya10n/shopping-assistant",
    image: "/assets/images/shopgpt.png",
    color: "bg-purple-900/20",
  },
  {
    title: "Tennis Meetup Bot",
    description:
      "Discord bot automating match scheduling and player matching for 100+ users based on skill, location, and availability.",
    tags: ["Python", "Discord.py", "AWS", "DynamoDB", "Docker"],
    link: "https://github.com/shaurya10n/tennis-meetup-bot",
    image: "/assets/images/discord.png",
    color: "bg-blue-900/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A showcase of my recent work and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 ${project.color} hover:border-white/20 transition-colors`}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Floating Link Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
