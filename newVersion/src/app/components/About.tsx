import { Code, Palette, Zap, Users } from "lucide-react";
import { motion } from "motion/react";
import { siteImages } from "../data/projects";

const skills = [
    {
        icon: Code,
        title: "Development",
        description:
            "Building robust web applications with modern technologies like React, TypeScript, and Node.js.",
    },
    {
        icon: Palette,
        title: "Design",
        description:
            "Creating beautiful, user-centered interfaces with attention to detail and accessibility.",
    },
    {
        icon: Zap,
        title: "Performance",
        description:
            "Optimizing for speed and efficiency to deliver the best user experience possible.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with teams and clients to bring visions to life through clear communication.",
    },
];

export function About() {
    return (
        <section
            id="about"
            className="py-20 px-6 relative overflow-hidden"
            style={{
                background: "#8F2D56",
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div
                    className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl"
                    style={{ background: "#FFBC42" }}
                ></div>
                <div
                    className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl"
                    style={{ background: "#73D2DE" }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl mb-6 text-white font-light">
                            About Me
                        </h2>
                        <div className="space-y-4 text-lg text-white/80 font-light">
                            <p>
                                I'm Bahareh, a creative and detail-oriented Product Designer
                                with over 3 years of experience delivering impactful digital
                                and print designs, branding systems, and motion graphics.
                            </p>
                            <p>
                                Strong undrestanding of user behaivior and design performane,
                                including experience with A/B testing, conversion driven design,
                                and cross-platform visual consistency.
                                
                            </p>
                            <p>
                                Skilled in Adobe Creative Suitte, Figma, Webflow and HTML/CSS collabration
                                I enjoy learning new technologies and sharing knowledge with the community.
                                
                                
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={siteImages.about.mainPhoto}
                            alt={siteImages.profile.alt}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all"
                            >
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center mb-4">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl mb-3 text-white font-light">
                                    {skill.title}
                                </h3>
                                <p className="text-white/70 font-light">
                                    {skill.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
