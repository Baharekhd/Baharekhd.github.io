import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { projects } from "../data/projects";

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg flex items-center justify-center hover:bg-white/30 transition-colors text-white"
        >
            <ChevronRight size={24} />
        </button>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg flex items-center justify-center hover:bg-white/30 transition-colors text-white"
        >
            <ChevronLeft size={24} />
        </button>
    );
}

export function Work() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <section
            id="work"
            className="py-20 px-6 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, hsl(330,100%,75%) 0%, hsl(340,90%,80%) 50%, hsl(320,100%,90%) 100%)",
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div
                    className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl"
                    style={{ background: "hsl(350,100%,85%)" }}
                ></div>
                <div
                    className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: "hsl(320,100%,90%)" }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-white font-light">
                        Selected Work
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl font-light">
                        Here are some of my recent projects that showcase my
                        approach to design and development.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Slider {...settings}>
                        {projects.map((project) => (
                            <div key={project.id} className="px-4">
                                <Link to={`/work/${project.id}`}>
                                    <div className="group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 max-w-4xl mx-auto">
                                        <div className="aspect-[16/9] overflow-hidden bg-gray-900/50">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="p-8 md:p-12">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <p className="text-sm text-white/60 mb-2 font-light">
                                                        {project.category}
                                                    </p>
                                                    <h3 className="text-3xl md:text-4xl mb-3 text-white font-light">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                                <ArrowUpRight
                                                    size={28}
                                                    className="text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                                />
                                            </div>

                                            <p className="text-white/80 text-lg mb-6 font-light">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
}
