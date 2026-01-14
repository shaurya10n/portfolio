"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "VVDN Technologies",
    role: "Software Engineer Intern",
    date: "June 2025 – Aug 2025",
    logo: "/assets/images/vvdn.jpg",
    points: [
      <>
        Built <span className="font-bold text-white">agentic workflow</span> platform to analyze router device logs, reducing anomaly detection time from hours to minutes as proof-of-concept for expansion to other IoT devices
      </>,
      <>
        Developed <span className="font-bold text-white">RAG pipeline</span> with <span className="font-bold text-white">Vector DB</span> for rapid querying across router manuals and telemetry records
      </>,
      <>
        Designed <span className="font-bold text-white">Python-based</span> backend APIs and event-driven architecture, deployed on <span className="font-bold text-white">Google Cloud Platform</span> using <span className="font-bold text-white">Docker</span> with automated <span className="font-bold text-white">CI/CD pipelines</span>
      </>,
      <>
        Integrated <span className="font-bold text-white">Transformer models</span> with <span className="font-bold text-white">prompt engineering</span>, achieving 85% log classification accuracy and reducing manual triage by 45%
      </>,
    ],
  },
  {
    company: "Michigan State University",
    role: "Undergraduate Research Assistant",
    date: "May 2024 – Aug 2024",
    logo: "/assets/images/msu.png",
    points: [
      <>
        Implemented an automated pipeline in <span className="font-bold text-white">Python (pandas, scikit-learn)</span> for Nano Biosensors Lab, reducing spectroscopic data processing time from Excel files by 95%
      </>,
      <>
        Applied <span className="font-bold text-white">K-means clustering, statistical analysis</span>, and interactive <span className="font-bold text-white">data visualization</span> through <span className="font-bold text-white">SciPy, NumPy,</span> and <span className="font-bold text-white">openpyxl</span> to enhance interpretation of experimental data
      </>,
    ],
  },
  {
    company: "Geniemode",
    role: "Software Development Intern",
    date: "May 2023 – Aug 2023",
    logo: "/assets/images/geniemode.png",
    points: [
      "Collaborated with 6-person development team to enhance global supply chain platform serving 10+ enterprise clients, including Zara and H&M, by implementing 5+ new features and optimizing existing workflows",
      <>
        Optimized backend operations with <span className="font-bold text-white">Node.js </span>through database query improvements and caching strategies, reducing API response times by 40%, and deployed on <span className="font-bold text-white">AWS</span> to improve scalability and system reliability
      </>,
      <>
        Improved platform user experience through <span className="font-bold text-white">React Native</span> features, reducing order placement time by 30% and enabling real-time tracking for 500+ daily orders
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and achievements.
          </p>
        </motion.div>

        <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-8 pl-8 md:pl-12 py-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[59px] top-0 w-5 h-5 bg-[#050505] border border-white/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-gray-400 mb-4">
                    <span className="font-medium text-white/80">
                      {exp.company}
                    </span>
                    <span className="hidden md:block">•</span>
                    <span className="text-sm border border-white/10 px-2 py-0.5 rounded-full inline-block w-fit">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-400 list-disc list-outside ml-4">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
