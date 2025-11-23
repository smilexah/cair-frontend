// Content23.tsx
"use client";

import { motion } from "framer-motion";

const mockEvents2023 = [
    {
        id: 1,
        title: "AI Hackathon Winner",
        description:
            "Our team secured 1st place at the International AI Hackathon with a project focused on NLP for education.",
        icon: "🤖",
    },
    {
        id: 2,
        title: "TechnoPark Expansion",
        description:
            "The SDU TechnoPark expanded with new labs for robotics and software engineering.",
        icon: "🏢",
    },
    {
        id: 3,
        title: "Research Publications",
        description:
            "Students and professors published over 30 research papers in top-tier international journals.",
        icon: "📚",
    },
    {
        id: 4,
        title: "Global Conference",
        description:
            "Represented SDU at the Global Software Engineering Conference in Berlin.",
        icon: "🌍",
    },
];

const Content23 = () => {
    return (
        <div
            className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-4
      "
        >
            {mockEvents2023.map((event, index) => (
                <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="
            p-5 rounded-2xl shadow-lg
            bg-card/80 backdrop-blur-sm
            hover:scale-[1.02] transition-transform
          "
                >
                    <div className="flex items-center gap-3 text-base sm:text-lg text-tags font-semibold">
                        <span className="text-xl sm:text-2xl">{event.icon}</span>
                        {event.title}
                    </div>
                    <p className="text-foreground mt-2 text-sm sm:text-base">
                        {event.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Content23;
