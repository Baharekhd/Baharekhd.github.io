import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { pageContent, aboutData, siteImages } from "../data/projects";

export function AboutPage() {
  const aboutInfo = pageContent.about;
  const heroSection = aboutInfo.sections.hero;
  const storySection = aboutInfo.sections.story;
  const skillsSection = aboutInfo.sections.skills;

  return (
    <div style={{ background: "#8F2D56" }} className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20 relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#FFBC42" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: "#73D2DE" }}
          ></div>
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

              <h1 className="text-5xl md:text-7xl mb-2 text-white font-light">
                {heroSection.title}
              </h1>
              <p className="text-2xl text-white/80 mb-6 font-light">
                {heroSection.subtitle}
              </p>
              <p className="text-lg text-white/70 max-w-3xl font-light">
                {heroSection.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story & Photo Section */}
        <section className="px-6 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl mb-6 text-white font-light">
                  {storySection.title}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed font-light">
                  {storySection.content}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="aspect-square bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
              >
                <img
                  src={siteImages.about.mainPhoto}
                  alt={siteImages.profile.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-6 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-12 text-white font-light">
                {skillsSection.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {skillsSection.categories.map((category, idx) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                  >
                    <h3 className="text-xl mb-4 text-white font-light">
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="text-white/80 font-light flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-6 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-12 text-white font-light">Experience</h2>

              <div className="space-y-8">
                {aboutData.experience.map((job, idx) => (
                  <motion.div
                    key={`${job.company}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-white/20 pl-6"
                  >
                    <h3 className="text-xl text-white mb-1 font-light">
                      {job.title}
                    </h3>
                    <p className="text-white/60 mb-2 font-light">
                      {job.company} • {job.period}
                    </p>
                    <p className="text-white/80 font-light">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-6 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-12 text-white font-light">Education</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {aboutData.education.map((edu, idx) => (
                  <motion.div
                    key={`${edu.school}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                  >
                    <h3 className="text-lg text-white mb-1 font-light">
                      {edu.degree}
                    </h3>
                    <p className="text-white/60 mb-2 font-light">{edu.school}</p>
                    <p className="text-white/80 font-light">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-8 text-white font-light">
                Certifications
              </h2>

              <div className="space-y-4">
                {aboutData.certifications.map((cert, idx) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
                  >
                    <p className="text-white/80 font-light">{cert}</p>
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
