"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const interests = [
  {
    title: "Gym",
    desc: "I do powerlifting and bodybuilding for fun",
    image: "/assets/images/gym.jpeg",
  },
  {
    title: "Hiking",
    desc: "Love nature and exploringnew places",
    image: "/assets/images/hike.jpeg",
  },
  {
    title: "Snowboarding",
    desc: "I'm bad :( Trying to get better at this",
    image: "/assets/images/snowboard.jpeg",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              About Me
            </h2>
            <p className="text-gray-400 text-lg">
              <em>"one must find sisyphus happy"</em>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
  I'm a senior computer science student at the University of Michigan (Go Blue!). 
  I’ve lived in India, the UK, and South Africa, and now I’m based in the U.S. 
  It’s my final year of college, and I’m getting ready to start my career in 2026 
  (fingers crossed).
</p>

<p>
  I’m looking for full-time software engineering roles where I can use AI to solve 
  real-world problems — ideally building things that are actually useful, not just 
  better ad targeting.
</p>

<p>
  Outside of tech, I love lifting weights, hiking, and slowly getting better at 
  snowboarding. One of my goals for 2026 is to read more, and right now I’m working 
  through <em>Dune</em> by Frank Herbert after loving the movies.
</p>

          </div>
        </motion.div>

        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-bold mb-6">Touching Grass</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interests.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className={`relative aspect-[4/5] rounded-2xl overflow-hidden group ${index === 2 ? 'sm:col-span-2 aspect-[16/9] sm:aspect-[2/1]' : ''}`}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                            <p className="text-gray-300 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
