import { Link } from "react-router";
import { ArrowLeft, ExternalLink, Users, Target, Zap, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { siteImages } from "../data/projects";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function StyleFactoryCaseStudy() {
    return (
        <div style={{ background: "#8F2D56" }} className="min-h-screen">
            <Header />

            <main className="pt-24 pb-20 relative">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#FFBC42" }}></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#73D2DE" }}></div>
                </div>

                {/* Hero Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
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
                                    Product Design & UI/UX
                                </span>
                                <span className="text-sm text-white/40 mx-3">
                                    •
                                </span>
                                <span className="text-sm text-white/60 font-light">
                                    2025
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl mb-6 text-white font-light">
                                Style Factory
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-3xl font-light">
                                A modern e-commerce platform designed to provide seamless shopping experiences
                                with intuitive navigation and powerful inventory management capabilities.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-12">
                                {['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'E-commerce', 'UI/UX Design'].map((tag) => (
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
                                src={siteImages.hero.work}
                                alt="Style Factory E-commerce Platform"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid md:grid-cols-2 gap-16"
                        >
                            <div>
                                <h2 className="text-3xl mb-6 text-white font-light">
                                    Project Overview
                                </h2>
                                <p className="text-white/80 text-lg leading-relaxed font-light mb-6">
                                    Style Factory is a comprehensive e-commerce platform designed for modern retail businesses.
                                    The project focused on creating an intuitive, scalable solution that could handle high-traffic
                                    periods while maintaining exceptional user experience across all devices.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Users className="text-white/60" size={20} />
                                        <span className="text-white/80 font-light">Client: Style Factory Retail</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Target className="text-white/60" size={20} />
                                        <span className="text-white/80 font-light">Duration: 6 months</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Zap className="text-white/60" size={20} />
                                        <span className="text-white/80 font-light">Platform: Web & Mobile</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl mb-4 text-white font-light">
                                    Key Features
                                </h3>
                                <ul className="space-y-3 text-white/80 font-light">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Responsive design for all devices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Advanced product filtering and search</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Streamlined checkout process</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Real-time inventory management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-white/40 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Analytics dashboard for business insights</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Challenge Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl mb-8 text-white font-light">
                                The Challenge
                            </h2>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
                                <p className="text-white/80 text-lg leading-relaxed font-light mb-6">
                                    The client was struggling with an outdated e-commerce platform that couldn't handle
                                    peak season traffic, resulting in lost sales and frustrated customers. The existing
                                    system had poor mobile experience, complex navigation, and lacked modern features
                                    that customers expect from contemporary online stores.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-light text-white mb-2">50%</div>
                                        <div className="text-white/60 font-light">Cart abandonment rate</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-light text-white mb-2">2.1s</div>
                                        <div className="text-white/60 font-light">Average load time</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-light text-white mb-2">35%</div>
                                        <div className="text-white/60 font-light">Mobile conversion rate</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl mb-8 text-white font-light">
                                The Solution
                            </h2>
                            <div className="space-y-12">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-xl mb-4 text-white font-light">
                                            Design Strategy
                                        </h3>
                                        <p className="text-white/80 font-light leading-relaxed">
                                            I conducted extensive user research and competitive analysis to understand
                                            the pain points in the current e-commerce landscape. The design focused on
                                            creating a clean, intuitive interface that guides users naturally through
                                            the shopping journey.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl mb-4 text-white font-light">
                                            Technical Implementation
                                        </h3>
                                        <p className="text-white/80 font-light leading-relaxed">
                                            Built with modern web technologies including React and TypeScript for the
                                            frontend, with a robust Node.js backend. Implemented advanced caching,
                                            lazy loading, and image optimization to ensure fast performance even
                                            during peak traffic.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
                                    <h3 className="text-xl mb-6 text-white font-light">
                                        Key Design Decisions
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-white font-light mb-2">Simplified Navigation</h4>
                                            <p className="text-white/70 font-light text-sm">
                                                Clear category structure with intuitive search and filtering options
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light mb-2">Mobile-First Approach</h4>
                                            <p className="text-white/70 font-light text-sm">
                                                Designed for mobile first, ensuring excellent experience on all devices
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light mb-2">Trust Indicators</h4>
                                            <p className="text-white/70 font-light text-sm">
                                                Clear pricing, reviews, and security badges to build customer confidence
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light mb-2">Performance Optimization</h4>
                                            <p className="text-white/70 font-light text-sm">
                                                Fast loading times with progressive image loading and caching strategies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl mb-8 text-white font-light">
                                Results & Impact
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <TrendingUp className="text-white" size={24} />
                                        <span className="text-white font-light">Conversion Rate</span>
                                    </div>
                                    <div className="text-3xl font-light text-white mb-2">+40%</div>
                                    <div className="text-white/60 font-light">Increase in conversion rate</div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Zap className="text-white" size={24} />
                                        <span className="text-white font-light">Load Time</span>
                                    </div>
                                    <div className="text-3xl font-light text-white mb-2">-60%</div>
                                    <div className="text-white/60 font-light">Faster page load times</div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="text-white" size={24} />
                                        <span className="text-white font-light">Customer Satisfaction</span>
                                    </div>
                                    <div className="text-3xl font-light text-white mb-2">95%</div>
                                    <div className="text-white/60 font-light">Customer satisfaction score</div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Target className="text-white" size={24} />
                                        <span className="text-white font-light">Traffic Handling</span>
                                    </div>
                                    <div className="text-3xl font-light text-white mb-2">10x</div>
                                    <div className="text-white/60 font-light">Peak traffic capacity</div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
                                <h3 className="text-xl mb-6 text-white font-light">
                                    Key Achievements
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Successfully handled 10x traffic during Black Friday sales",
                                        "Reduced cart abandonment rate from 50% to 15%",
                                        "Improved mobile conversion rate to 65%",
                                        "Achieved 95% customer satisfaction score",
                                        "Reduced average page load time to 0.8 seconds"
                                    ].map((achievement, index) => (
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
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="px-6 mb-20 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl mb-8 text-white font-light">
                                Design Process
                            </h2>
                            <div className="grid md:grid-cols-4 gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Research",
                                        description: "User interviews, competitive analysis, and market research"
                                    },
                                    {
                                        step: "02",
                                        title: "Wireframing",
                                        description: "Low-fidelity wireframes and user flow mapping"
                                    },
                                    {
                                        step: "03",
                                        title: "Design",
                                        description: "High-fidelity mockups and interactive prototypes"
                                    },
                                    {
                                        step: "04",
                                        title: "Testing",
                                        description: "User testing, iteration, and final implementation"
                                    }
                                ].map((phase, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-4xl font-light text-white/40 mb-4">
                                            {phase.step}
                                        </div>
                                        <h3 className="text-xl font-light text-white mb-2">
                                            {phase.title}
                                        </h3>
                                        <p className="text-white/60 font-light text-sm">
                                            {phase.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Next Project */}
                <section className="px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl mb-8 text-white font-light">
                                More Projects
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    {
                                        id: 'fitness-app',
                                        title: 'Fitness Tracking App',
                                        category: 'Mobile App Design',
                                        image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTU4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                                    },
                                    {
                                        id: 'brand-identity',
                                        title: 'Brand Identity System',
                                        category: 'Branding',
                                        image: 'https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI1NTk4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                                    }
                                ].map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <Link
                                            to={`/work/${project.id}`}
                                            className="group block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all"
                                        >
                                            <div className="aspect-[16/10] overflow-hidden bg-gray-900/50">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <p className="text-sm text-white/60 mb-2 font-light">
                                                    {project.category}
                                                </p>
                                                <h3 className="text-xl mb-2 text-white font-light">
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}