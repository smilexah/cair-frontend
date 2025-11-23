// src/modules/landing/components/TimelineContent/Content24.tsx
import { motion } from "framer-motion";

const events2024 = [
    {
        id: 1,
        title: "AI Research Expansion",
        description:
            "Launched new research initiatives focusing on generative AI and machine learning optimization.",
        date: "Jan 2024",
    },
    {
        id: 2,
        title: "Tech Innovation Hub",
        description:
            "Opened a state-of-the-art innovation hub for students and startups to collaborate on cutting-edge projects.",
        date: "Apr 2024",
    },
    {
        id: 3,
        title: "Global Partnerships",
        description:
            "Established collaborations with top universities and tech companies worldwide.",
        date: "Jul 2024",
    },
    {
        id: 4,
        title: "Student Achievements",
        description:
            "SDU teams won multiple international hackathons and competitions in AI and robotics.",
        date: "Oct 2024",
    },
    {
        id: 5,
        title: "Sustainability Goals",
        description:
            "Integrated green computing and eco-friendly practices into all research and development activities.",
        date: "Dec 2024",
    },
];

export default function Content24() {
    return (
        <div className="relative flex flex-col lg:grid lg:grid-cols-9 lg:gap-6">
            {/* вертикальная линия */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300/40 -translate-x-1/2" />

            {events2024.map((event, index) => (
                <motion.div
                    key={event.id}
                    className={`
            relative p-6 rounded-2xl shadow-md border border-gray-200 bg-card
            lg:col-span-4
            ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6"}
          `}
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    {/* точка на линии */}
                    <div className="hidden lg:block absolute top-6 left-full lg:-ml-[9px] w-4 h-4 rounded-full bg-tags border-2 border-white shadow-md" />

                    <h3 className="text-lg sm:text-xl font-semibold text-tags">
                        {event.title}
                    </h3>
                    <p className="text-foreground opacity-80 mt-2 text-sm sm:text-base">
                        {event.description}
                    </p>
                    <span className="text-xs sm:text-sm text-gray-400 mt-3 block">
            {event.date}
          </span>
                </motion.div>
            ))}
        </div>
    );
}
