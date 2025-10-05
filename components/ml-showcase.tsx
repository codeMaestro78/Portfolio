"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBrain, FaChartLine, FaExternalLinkAlt, FaEye, FaGithub, FaUsers } from "react-icons/fa";

import { mlModels } from "@/data";
import { cn } from "@/lib/utils";

import { MagicButton } from "./ui/magic-button";

const categoryIcons = {
  "Time Series": FaChartLine,
  "Natural Language Processing": FaBrain,
  "Computer Vision": FaEye,
  "Clustering & Analytics": FaUsers,
};

const complexityColors = {
  "Beginner": "bg-green-500/20 text-green-400 border-green-500/30",
  "Intermediate": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Advanced": "bg-red-500/20 text-red-400 border-red-500/30",
};

export const MLShowcase = () => {
  return (
    <section id="ml-showcase" className="py-20">
      <h1 className="heading">
        AI/ML <span className="text-purple">Projects & Models</span>
      </h1>
      <p className="text-center text-white-200 mt-4 max-w-3xl mx-auto">
        Explore my AI/ML expertise through these projects showcasing different machine learning domains and real-world applications.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {mlModels.map((model) => {
          const IconComponent = categoryIcons[model.category as keyof typeof categoryIcons];

          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: model.id * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-black-100 p-6 ml-card-hover hover:border-purple/50"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{model.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{model.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <IconComponent className="w-4 h-4 text-purple" />
                        <span className="text-sm text-white-200">{model.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium border",
                    complexityColors[model.complexity as keyof typeof complexityColors]
                  )}>
                    {model.complexity}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white-200 text-sm mb-4 line-clamp-2">
                  {model.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 text-white text-xs rounded-md ml-tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-purple ml-metric-counter">{model.accuracy}</div>
                    <div className="text-xs text-white-200">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white ml-metric-counter">{model.features.length}</div>
                    <div className="text-xs text-white-200">Features</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {model.features.map((feature, index) => (
                      <li key={index} className="text-xs text-white-200 flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={model.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <MagicButton
                      title="View Code"
                      icon={<FaGithub />}
                      position="right"
                      asChild
                    />
                  </Link>
                  <Link
                    href={model.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 rounded-lg text-white/80 hover:text-white hover:border-purple/50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
