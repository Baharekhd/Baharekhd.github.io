import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:hello@bahareh.com",
        username: "hello@bahareh.com",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com",
        username: "linkedin.com/in/bahareh",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com",
        username: "github.com/bahareh",
    },
    {
        icon: Twitter,
        label: "Twitter",
        href: "https://twitter.com",
        username: "@bahareh",
    },
];

export function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, hsl(330,100%,75%) 0%, hsl(340,90%,80%) 50%, hsl(320,100%,90%) 100%)",
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
                    style={{ background: "hsl(350,100%,85%)" }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ background: "hsl(320,100%,90%)" }}
                ></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl mb-6 text-white font-light">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
                        I'm always interested in hearing about new projects and
                        opportunities. Feel free to reach out if you'd like to
                        collaborate.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 transition-all group"
                            >
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-pink-700 transition-colors">
                                    <Icon
                                        size={20}
                                        className="text-white group-hover:text-pink-700"
                                    />
                                </div>
                                <p className="font-light mb-1 text-white">
                                    {link.label}
                                </p>
                                <p className="text-sm text-white/60 font-light">
                                    {link.username}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white rounded-full text-teal-900 font-medium hover:shadow-lg transition-all"
                >
                    Send me a message
                </motion.button>
            </div>
        </section>
    );
}
