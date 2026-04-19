import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { pageContent, siteConfig } from "../data/projects";

export function ContactPage() {
  const contactInfo = pageContent.contact;
  const heroSection = contactInfo.sections.hero;
  const formSection = contactInfo.sections.form;
  const config = siteConfig.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

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

        {/* Contact Info & Form */}
        <section className="px-6 mb-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl mb-12 text-white font-light">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                        <Mail size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-white mb-1 font-light">
                        Email
                      </h3>
                      <a
                        href={`mailto:${config.email}`}
                        className="text-white/80 hover:text-white transition-colors font-light"
                      >
                        {config.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                        <Phone size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-white mb-1 font-light">
                        Phone
                      </h3>
                      <a
                        href={`tel:${config.phone}`}
                        className="text-white/80 hover:text-white transition-colors font-light"
                      >
                        {config.phone}
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                        <MapPin size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-white mb-1 font-light">
                        Location
                      </h3>
                      <p className="text-white/80 font-light">
                        {config.location}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h3 className="text-lg text-white mb-4 font-light">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    {config.socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                      >
                        <span className="text-white/80 group-hover:text-white transition-colors font-light">
                          {social.name.charAt(0)}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                  <h2 className="text-2xl mb-6 text-white font-light">
                    {formSection.title}
                  </h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                    >
                      <p className="text-green-200 font-light">
                        {formSection.successMessage}
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formSection.fields.map((field) => (
                      <div key={field.name}>
                        <label className="block text-white/80 text-sm mb-2 font-light">
                          {field.label}
                        </label>
                        {field.name === "message" ? (
                          <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            required={field.required}
                            rows={5}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors font-light"
                          ></textarea>
                        ) : (
                          <input
                            type={field.name === "email" ? "email" : "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            required={field.required}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors font-light"
                          />
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
                    >
                      {formSection.submitButton}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
