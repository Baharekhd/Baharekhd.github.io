import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Warp } from "@paper-design/shaders-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";

export function WorkDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-700 to-rose-900">
                <div className="text-center">
                    <h1 className="text-4xl mb-4 text-white font-light">
                        Project not found
                    </h1>
                    <Link
                        to="/"
                        className="text-pink-300 hover:underline font-light"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-700 via-rose-800 to-pink-700">
            <Header />

            <main className="pt-24 pb-20 relative">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
                </div>

                {/* Hero Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group font-light"
                            >
                                <ArrowLeft
                                    size={20}
                                    className="group-hover:-translate-x-1 transition-transform"
                                />
                                <span>Back to home</span>
                            </Link>

                            <div className="mb-6">
                                <span className="text-sm text-white/60 font-light">
                                    {project.category}
                                </span>
                                <span className="text-sm text-white/40 mx-3">
                                    •
                                </span>
                                <span className="text-sm text-white/60 font-light">
                                    {project.year}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl mb-6 text-white font-light">
                                {project.title}
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl font-light">
                                {project.fullDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-12">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="aspect-[16/9] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Project Details */}
                <section className="px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h2 className="text-3xl mb-4 text-white font-light">
                                    The Challenge
                                </h2>
                                <p className="text-white/80 text-lg leading-relaxed font-light">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h2 className="text-3xl mb-4 text-white font-light">
                                    The Solution
                                </h2>
                                <p className="text-white/80 text-lg leading-relaxed font-light">
                                    {project.solution}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12"
                        >
                            <h2 className="text-3xl mb-6 text-white font-light">
                                Results & Impact
                            </h2>
                            <ul className="space-y-4">
                                {project.results.map((result, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <ExternalLink
                                                size={14}
                                                className="text-white"
                                            />
                                        </div>
                                        <span className="text-white/80 text-lg font-light">
                                            {result}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Other Projects */}
                <section className="px-6 mt-20 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl mb-8 text-white font-light">
                            Other Projects
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects
                                .filter((p) => p.id !== id)
                                .slice(0, 2)
                                .map((otherProject, index) => (
                                    <motion.div
                                        key={otherProject.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.6 + index * 0.1,
                                        }}
                                    >
                                        <Link
                                            to={`/work/${otherProject.id}`}
                                            className="group block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all"
                                        >
                                            <div className="aspect-[16/10] overflow-hidden bg-gray-900/50">
                                                <img
                                                    src={otherProject.image}
                                                    alt={otherProject.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <p className="text-sm text-white/60 mb-2 font-light">
                                                    {otherProject.category}
                                                </p>
                                                <h3 className="text-xl mb-2 text-white font-light">
                                                    {otherProject.title}
                                                </h3>
                                                <p className="text-white/70 text-sm font-light">
                                                    {otherProject.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
