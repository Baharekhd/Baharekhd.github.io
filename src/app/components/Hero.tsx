import { Warp } from "@paper-design/shaders-react";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    const scrollToWork = () => {
        const element = document.getElementById("work");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            {/* Shader Background */}
            <div className="absolute inset-0">
                <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={0.45}
                    softness={1}
                    distortion={0.25}
                    swirl={0.8}
                    swirlIterations={10}
                    shape="checks"
                    shapeScale={0.1}
                    scale={1}
                    rotation={0}
                    speed={1}
                    colors={[
                        "hsl(330, 100%, 75%)",
                        "hsl(350, 100%, 85%)",
                        "hsl(340, 90%, 80%)",
                        "hsl(320, 100%, 90%)",
                    ]}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
                <div className="max-w-4xl w-full text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm mb-6 text-white">
                            Available for freelance work
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white text-5xl md:text-7xl font-light text-balance"
                    >
                        I'm Bahareh
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        Designer & Developer crafting beautiful digital
                        experiences with clean code and thoughtful design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <button
                            onClick={scrollToWork}
                            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                        >
                            <span>View my work</span>
                            <ArrowDown size={20} />
                        </button>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-8 py-4 bg-white rounded-full text-gray-800 font-medium hover:scale-105 transition-transform duration-300"
                        >
                            Get in touch
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
