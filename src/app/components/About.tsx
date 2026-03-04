import { Code, Palette, Zap, Users } from "lucide-react";
import { motion } from "motion/react";

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
                background:
                    "linear-gradient(135deg, hsl(330,100%,75%) 0%, hsl(340,90%,80%) 50%, hsl(320,100%,90%) 100%)",
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div
                    className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl"
                    style={{ background: "hsl(350,100%,85%)" }}
                ></div>
                <div
                    className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl"
                    style={{ background: "hsl(320,100%,90%)" }}
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
                                I'm Bahareh, a designer and developer with a
                                passion for creating digital experiences that
                                are both beautiful and functional.
                            </p>
                            <p>
                                With over 5 years of experience, I've worked
                                with startups and established companies to bring
                                their ideas to life through thoughtful design
                                and clean code.
                            </p>
                            <p>
                                When I'm not designing or coding, you can find
                                me exploring new technologies, contributing to
                                open source, or sharing knowledge with the
                                community.
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
                            src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNTk2MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Workspace"
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
