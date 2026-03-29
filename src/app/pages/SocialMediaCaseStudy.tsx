import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function SocialMediaCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: "#8F2D56" }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ background: "#FFBC42" }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "#73D2DE" }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/work/banner-design" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Banner Design
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-white font-light">
              Social Media
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light">
              Design Collection
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Banner Design
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                Social Posts
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-light">
                App Store Graphics
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
              This social media design collection features eye-catching banners, engaging posts,
              and app store graphics designed to capture attention and drive engagement across
              digital platforms. Each piece incorporates brand elements and seasonal themes.
            </p>
          </motion.div>

          {/* Banner Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-gray-900 font-light">
              Promotional Banners
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/Banner/Testerup_Banner.jpg"
                  alt="Social Media Banner"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/Banner/youmei.banner.png"
                  alt="Yalda Night Post"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Posts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-gray-900 font-light">
              Social Media Posts
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/Banner/posts/توی محل کارتون چقدر قهوه میل می_کنید؟_طبق یک تحقیق آماری بین کارمندان یک شرکت در کشور آمریکا، نو.jpg"
                  alt="Coffee at Work Post"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Coffee at Work</h4>
                <p className="text-gray-600 font-light">Engaging content about workplace coffee habits</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/Banner/posts/کافه میکس 3 در 1 تاپریکا تهیه شده از بهترین مدل قهوه با فعال کردن دوپامین و سروتونین در مغز به ج.jpg"
                  alt="Cafe Mix Post"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Cafe Mix 3-in-1</h4>
                <p className="text-gray-600 font-light">Promotional content for coffee products</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/Banner/posts/کاپوچینو باعث هوشیاری مغز و اعصاب شده در نتیجه خستگی عضلات و ماهیچه ها را برطرف میکند. تاپريكا💜.jpg"
                  alt="Cappuccino Benefits Post"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Cappuccino Benefits</h4>
                <p className="text-gray-600 font-light">Educational content about coffee benefits</p>
              </div>
            </div>
          </motion.div>

          {/* App Store Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl mb-8 text-gray-900 font-light">
              App Store Graphics
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/appstore_screenshot/2.2.jpg"
                  alt="App Store Screenshot 1"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <img
                  src="/projects/socialMedia/appstore_screenshot/appstore.jpg"
                  alt="App Store Screenshot 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>
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
                Create compelling social media content that resonates with target audiences,
                maintains brand consistency, and drives engagement across various platforms.
                The content needed to be visually striking while conveying clear brand messaging.
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 text-gray-900 font-light">
                Solution
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Designed a series of visually striking social media assets including banners,
                promotional posts, and app store graphics. Each design incorporates brand elements,
                seasonal themes, and engaging visuals to maximize audience interaction and brand awareness.
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
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">200%</div>
              <p className="text-gray-600 font-light">Increase in engagement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">150%</div>
              <p className="text-gray-600 font-light">Enhanced brand visibility</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">12</div>
              <p className="text-gray-600 font-light">Pieces of content created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-4 text-[#8F2D56] font-light">85%</div>
              <p className="text-gray-600 font-light">Audience interaction rate</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}