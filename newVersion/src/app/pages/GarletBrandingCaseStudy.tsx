import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function GarletBrandingCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: "#8F2D56" }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ background: "#FFBC42" }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#73D2DE" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/work/branding" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Branding
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white font-light">
              Garlet
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light">
              Complete Brand Identity System
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Logo Design
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Packaging
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                UI Design
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                2024
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
              Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl font-light leading-relaxed">
              Garlet represents a comprehensive brand identity project that encompasses logo design,
              packaging solutions, and user interface elements. The goal was to create a cohesive
              visual system that communicates the brand's values across all touchpoints, from physical
              products to digital experiences.
            </p>
          </motion.div>

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-gray-900 font-light">
              Logo Design
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                  The Garlet logo was designed to be versatile and memorable, with clean lines and
                  modern typography that works across various applications. Multiple variations were
                  created to accommodate different usage scenarios.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <img
                  src="/projects/branding/Logo/Garlet/Garlet_Logo.png"
                  alt="Garlet Logo"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Packaging Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-gray-900 font-light">
              Packaging Design
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/branding/Packaging/JamDesign1.jpg"
                  alt="Jam Packaging"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Jam Packaging</h4>
                <p className="text-gray-600 font-light">Creative packaging design for jam products</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/branding/Packaging/garletChocolade1.jpg"
                  alt="Chocolate Packaging"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Chocolate Packaging</h4>
                <p className="text-gray-600 font-light">Elegant packaging for chocolate products</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/branding/Packaging/Packaging1.jpg"
                  alt="General Packaging"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900 mb-2">General Packaging</h4>
                <p className="text-gray-600 font-light">Versatile packaging solutions</p>
              </div>
            </div>
          </motion.div>

          {/* UI Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-gray-900 font-light">
              User Interface Design
            </h3>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src="/projects/products/UI_Garlet/PRODUCT Portfolio (1).png"
                  alt="Garlet UI Design 1"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/projects/products/UI_Garlet/PRODUCT Portfolio (2).png"
                  alt="Garlet UI Design 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
                Challenge
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Create a cohesive brand identity for Garlet that spans multiple touchpoints including
                logo, packaging, and digital interfaces, while maintaining consistency and visual
                appeal across all applications. The challenge was to develop a versatile system that
                could adapt to different mediums while preserving brand integrity.
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
                Solution
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Developed a versatile logo system with multiple variations, designed packaging that
                reflects the brand personality, and created UI components that complement the overall
                brand aesthetic. Ensured all elements work harmoniously together through consistent
                color palettes, typography, and design principles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
              Results
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">150%</div>
              <p className="text-gray-600 font-light">Increase in brand recognition</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">100%</div>
              <p className="text-gray-600 font-light">Consistent brand application</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">4</div>
              <p className="text-gray-600 font-light">Touchpoints covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">95%</div>
              <p className="text-gray-600 font-light">Client satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
              Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              The design process involved research, conceptualization, and iterative refinement
              to create a comprehensive brand system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8F2D56] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-light">1</span>
              </div>
              <h3 className="text-xl mb-4 text-gray-900 font-medium">Research & Strategy</h3>
              <p className="text-gray-600 font-light">Analyzed brand requirements and target audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8F2D56] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-light">2</span>
              </div>
              <h3 className="text-xl mb-4 text-gray-900 font-medium">Design Development</h3>
              <p className="text-gray-600 font-light">Created logo, packaging, and UI concepts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8F2D56] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-light">3</span>
              </div>
              <h3 className="text-xl mb-4 text-gray-900 font-medium">Implementation</h3>
              <p className="text-gray-600 font-light">Applied brand system across all touchpoints</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}