import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { areas } from "../data/projects";

export function SubProjectDetail() {
  const { areaId, subProjectId } = useParams();
  
  const area = areas.find((a) => a.id === areaId);
  const subProject = area?.subProjects?.find((p) => p.id === subProjectId);

  if (!area || !subProject) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#8F2D56" }}>
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-white font-light">Project not found</h1>
          <Link to="/" className="text-white/80 hover:text-white font-light">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: "#8F2D56" }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ background: "#FFBC42" }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#73D2DE" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to={`/work/${areaId}`} className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to {area.title}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white font-light">
              {subProject.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light">
              {subProject.description}
            </p>
            {subProject.tags && subProject.tags.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-8">
                {subProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Images Gallery Section */}
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
              Gallery
            </h2>
          </motion.div>

          {subProject.images && subProject.images.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {subProject.images.map((image, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${subProject.title} ${index + 1}`}
                    className="w-full h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg font-light">No images available for this project yet.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}