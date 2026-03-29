import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function PackagingDesignsCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: "#8F2D56" }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ background: "#FFBC42" }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#73D2DE" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/work/product-design" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Product Design
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white font-light">
              Packaging
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light">
              Design Collection
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Food Packaging
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Consumer Goods
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Brand Communication
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
              This packaging design collection showcases innovative solutions for various product
              categories. Each design focuses on functionality, aesthetics, and effective brand
              communication while ensuring product protection and shelf appeal.
            </p>
          </motion.div>

          {/* Packaging Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="bg-gray-50 p-6 rounded-2xl">
              <img
                src="/projects/branding/Packaging/JamDesign1.jpg"
                alt="Jam Packaging Design"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Jam Packaging</h3>
              <p className="text-gray-600 font-light">Creative and functional packaging for jam products with clear branding and product visibility.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <img
                src="/projects/branding/Packaging/garletChocolade1.jpg"
                alt="Chocolate Packaging Design"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Chocolate Packaging</h3>
              <p className="text-gray-600 font-light">Elegant packaging design that conveys premium quality and appeals to chocolate lovers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <img
                src="/projects/branding/Packaging/Packaging1.jpg"
                alt="General Packaging Design"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">General Packaging</h3>
              <p className="text-gray-600 font-light">Versatile packaging solutions adaptable to various product categories and brand requirements.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
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
                Design packaging that not only protects products but also serves as a marketing tool,
                communicates brand values, and stands out on crowded shelves. The challenge was to
                balance functionality with aesthetic appeal across different product categories.
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
                Solution
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Created distinctive packaging designs for various products including jams, chocolates,
                and general consumer goods. Each design incorporates unique visual elements, clear
                branding, and practical functionality while maintaining aesthetic appeal and shelf impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
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
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">40%</div>
              <p className="text-gray-600 font-light">Increased shelf visibility</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">25%</div>
              <p className="text-gray-600 font-light">Improved brand recognition</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">3</div>
              <p className="text-gray-600 font-light">Product categories covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">90%</div>
              <p className="text-gray-600 font-light">Client satisfaction rate</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}