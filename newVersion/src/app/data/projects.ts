// ============================================================================
// CONTENT MANAGEMENT FILE - Centralized Control Panel
// Manage ALL website content from this single file
// ============================================================================

// ============================================================================
// INTERFACES
// ============================================================================

export interface ImageItem {
  url: string;
  title: string;
  description: string;
}

export interface SubProject {
  id: string;
  title: string;
  description: string;
  folderPath: string;
  images: ImageItem[];
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  year: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Area {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  tools?: string[];
  subProjects?: SubProject[];
  projects: Project[];
}

export interface PageContent {
  title: string;
  description: string;
  sections: Record<string, any>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  nav: Array<{
    label: string;
    path: string;
    id: string;
  }>;
  cta: Record<string, string>;
  contact: ContactInfo;
}

// ============================================================================
// GLOBAL SITE CONFIGURATION
// ============================================================================

export const siteConfig: SiteConfig = {
  siteName: "Bahare Khd",
  tagline: "Creative Designer & Digital Artist",
  description: "Crafting beautiful digital experiences through branding, UI/UX, and visual design",
  colors: {
    primary: "#8F2D56",      // Burgundy
    secondary: "#73D2DE",    // Cyan
    accent: "#FFBC42",       // Yellow
    text: "#FFF"
  },
  nav: [
    { label: "Home", path: "/", id: "home" },
    { label: "About", path: "/about", id: "about" },
    { label: "Work", path: "/work", id: "work" },
    { label: "Contact", path: "/contact", id: "contact" },
  ],
  cta: {
    viewWork: "View My Work",
    learnMore: "Learn More",
    getInTouch: "Get In Touch",
    viewCase: "View Case Study",
    exploreProject: "Explore Project",
    backTo: "Back to",
    downloadResume: "Download Resume",
    sendMessage: "Send Message",
  },
  contact: {
    email: "hello@baharekhd.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/baharekhd", icon: "linkedin" },
      { name: "Instagram", url: "https://instagram.com/baharekhd", icon: "instagram" },
      { name: "Dribbble", url: "https://dribbble.com/baharekhd", icon: "dribbble" },
      { name: "GitHub", url: "https://github.com/baharekhd", icon: "github" },
    ]
  }
};

// ============================================================================
// PAGE CONTENT
// ============================================================================

export const pageContent: Record<string, PageContent> = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio",
    sections: {
      hero: {
        title: "Hi, I'm Bahare",
        subtitle: "Creative Designer & Digital Artist",
        description: "I specialize in creating beautiful, user-centered digital experiences that combine stunning design with seamless functionality. Welcome to my portfolio.",
        cta: "View My Work"
      },
      about: {
        title: "About Me",
        description: "With over 5 years of experience in design, I've helped brands and startups bring their visions to life through thoughtful design and creative problem-solving.",
        highlights: [
          "Brand Identity & Branding",
          "UI/UX Design",
          "Product Design",
          "Visual Design",
          "Motion Graphics",
          "Web Design"
        ]
      }
    }
  },
  about: {
    title: "About Me",
    description: "Learn more about my background and expertise",
    sections: {
      hero: {
        title: "About Bahare",
        subtitle: "Designer, Creative Thinker, Problem Solver",
        description: "I'm a passionate designer dedicated to creating beautiful, functional, and user-centered digital experiences."
      },
      story: {
        title: "My Story",
        content: "With a background in visual arts and digital design, I've spent the last 5 years helping businesses and startups transform their ideas into stunning digital products. My approach combines strategic thinking with creative problem-solving to deliver solutions that are both beautiful and effective."
      },
      skills: {
        title: "Skills & Expertise",
        categories: [
          {
            name: "Design Tools",
            items: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"]
          },
          {
            name: "Design Specialties",
            items: ["Branding", "UI/UX Design", "Product Design", "Visual Design", "Motion Graphics", "Web Design"]
          },
          {
            name: "Soft Skills",
            items: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Team Collaboration"]
          }
        ]
      }
    }
  },
  contact: {
    title: "Get In Touch",
    description: "Let's work together",
    sections: {
      hero: {
        title: "Let's Create Something Amazing",
        subtitle: "Have a project in mind?",
        description: "I'd love to hear about your ideas and discuss how I can help bring them to life. Feel free to reach out!"
      },
      form: {
        title: "Send Me a Message",
        fields: [
          { name: "name", label: "Your Name", placeholder: "John Doe", required: true },
          { name: "email", label: "Your Email", placeholder: "john@example.com", required: true },
          { name: "subject", label: "Subject", placeholder: "Project Inquiry", required: true },
          { name: "message", label: "Message", placeholder: "Tell me about your project...", required: true }
        ],
        submitButton: "Send Message",
        successMessage: "Thank you! I'll get back to you soon."
      }
    }
  }
};

// ============================================================================
// ABOUT & EXPERIENCE DATA
// ============================================================================

export const aboutData = {
  bio: "Creative designer with 5+ years of experience in branding, UI/UX, and digital design. Passionate about creating beautiful solutions that solve real user problems.",
  experience: [
    {
      title: "Senior Designer",
      company: "Design Studio",
      period: "2022 - Present",
      description: "Leading design projects for startups and established brands"
    },
    {
      title: "Product Designer",
      company: "Tech Company",
      period: "2020 - 2022",
      description: "Designed user interfaces and experiences for mobile and web applications"
    },
    {
      title: "Graphic Designer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Created branding solutions and visual designs for various clients"
    }
  ],
  education: [
    {
      degree: "Bachelor's in Graphic Design",
      school: "Design University",
      year: "2018"
    }
  ],
  certifications: [
    "UX Design Certification - Nielsen Norman Group",
    "Advanced Figma Course - Interaction Design Foundation"
  ]
};

// ============================================================================
// ALL IMAGES & MEDIA
// ============================================================================

export const siteImages = {
  // Profile & About Section
  profile: {
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    alt: "Bahare Khd - Designer Portrait",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  
  // Hero & Section Images
  hero: {
    home: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    about: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    work: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    contact: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920"
  },

  // About Page Images
  about: {
    mainPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    workspace: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900",
    processImage1: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900",
    processImage2: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900"
  },

  // Social & Contact Icons (you can use emoji or SVG paths)
  social: {
    linkedin: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    instagram: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    dribbble: "https://cdn-icons-png.flaticon.com/128/3536/3536598.png",
    github: "https://cdn-icons-png.flaticon.com/128/733/733553.png"
  },

  // Logos & Branding
  logos: {
    siteLogo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=200",
    favicon: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=32"
  }
};

export const areas: Area[] = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'Building complete brand identities that resonate with your target audience and stand out.',
    heroImage: '/projects/branding/Logo/Garlet/Garlet_Logo.png',
    tools: ['Brand Strategy', 'Visual Identity', 'Guidelines', 'Adobe Suite'],
    subProjects: [
      {
        id: 'logo-design',
        title: 'Logo Design',
        description: 'Modern logo designs for various brands including Garlet, Shad, Cafee, and Runahi',
        folderPath: '/projects/branding/Logo/Garlet/',
        images: [
          { url: '/projects/branding/Logo/Garlet/Garlet_Logo.png', title: 'Garlet Logo', description: 'Main brand logo for Garlet featuring modern minimalist design' },
          { url: '/projects/branding/Logo/Garlet/Garlet_Mockup1.png', title: 'Garlet Branding Mockup 1', description: 'Logo application on business cards and stationery' },
          { url: '/projects/branding/Logo/Garlet/Garlet_Mockup2.png', title: 'Garlet Branding Mockup 2', description: 'Logo variations and usage guidelines' },
          { url: '/projects/branding/Logo/Garlet/Garlet_Mockup3.png', title: 'Garlet Branding Mockup 3', description: 'Digital and packaging applications' }
        ],
        tags: ['Logo', 'Adobe Illustrator', 'Brand Identity']
      },
      {
        id: 'packaging-design',
        title: 'Packaging Design',
        description: 'Creative packaging solutions for jams, chocolates, and various product categories',
        folderPath: '/projects/branding/Packaging/',
        images: ['/projects/branding/Packaging/JamDesign1.jpg', '/projects/branding/Packaging/JamDesign2.png', '/projects/branding/Packaging/garletChocolade1.jpg', '/projects/branding/Packaging/garletChocolade2.jpg', '/projects/branding/Packaging/Packaging1.jpg', '/projects/branding/Packaging/Packaging2.jpg', '/projects/branding/Packaging/Packaging3.jpg', '/projects/branding/Packaging/Packaging4.jpg'],
        tags: ['Packaging', 'Print Design', 'Adobe Illustrator']
      },
      {
        id: 'mug-design',
        title: 'Mug Design',
        description: 'Product designs applied to merchandise and promotional items',
        folderPath: '/projects/branding/mug_Iran/',
        images: [],
        tags: ['Product Design', 'Mockups']
      }
    ],
    projects: []
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Creating intuitive and beautiful digital products that solve real user problems.',
    heroImage: '/projects/products/UI_Garlet/PRODUCT Portfolio (1).png',
    tools: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    subProjects: [
      {
        id: 'ui-garlet',
        title: 'Garlet UI',
        description: 'User interface designs for the Garlet application',
        folderPath: '/projects/products/UI_Garlet/',
        images: ['/projects/products/UI_Garlet/PRODUCT Portfolio (1).png', '/projects/products/UI_Garlet/PRODUCT Portfolio (2).png', '/projects/products/UI_Garlet/Screenshot 2025-03-12 at 12.10.45.png'],
        tags: ['UI Design', 'Figma', 'Mobile App']
      },
      {
        id: 'ui-style-factory',
        title: 'Style Factory UI',
        description: 'E-commerce interface designs and user experience',
        folderPath: '/projects/products/UI_style_factory/',
        images: [],
        tags: ['UI Design', 'E-commerce', 'Web Design']
      }
    ],
    projects: [
      {
        id: 'style-factory',
        title: 'Style Factory - E-commerce Platform',
        category: 'Product Design & UI/UX',
        description: 'A modern e-commerce platform with seamless checkout experience and inventory management.',
        fullDescription: 'Style Factory is a comprehensive e-commerce solution built for a growing retail business. The platform features a modern design, intuitive navigation, and powerful backend functionality to manage products, orders, and customers efficiently.',
        image: '/landing-page-img.jpg',
        tags: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects','E-commerce', 'UI/UX Design'],
        year: '2025',
        challenge: 'The client needed a scalable e-commerce platform that could handle high traffic during peak seasons while maintaining fast load times and providing an excellent user experience across all devices.',
        solution: 'I designed and developed a responsive platform using React and TypeScript for the frontend, with a Node.js backend. Implemented advanced caching strategies, lazy loading, and optimized images to ensure fast performance. The design focused on clear product presentation and a streamlined checkout process.',
        results: [
          '40% increase in conversion rate',
          '60% faster page load times',
          '95% customer satisfaction score',
          'Successfully handled 10x traffic during Black Friday'
        ]
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Design',
    description: 'Eye-catching social media content and digital marketing materials',
    heroImage: '/projects/socialMedia/Banner/Testerup_Banner.jpg',
    tools: ['Photoshop', 'Figma', 'Illustrator', 'Design Systems'],
    subProjects: [
      {
        id: 'banners',
        title: 'Banners',
        description: 'Social media and promotional banners',
        folderPath: '/projects/socialMedia/Banner/',
        images: ['/projects/socialMedia/Banner/Testerup_Banner.jpg', '/projects/socialMedia/Banner/youmei.banner.png', '/projects/socialMedia/Banner/endcart-with-logo.jpg', '/projects/socialMedia/Banner/3.png'],
        tags: ['Banner Design', 'Social Media']
      },
      {
        id: 'posts',
        title: 'Social Posts',
        description: 'Engaging social media content and promotional posts',
        folderPath: '/projects/socialMedia/Banner/posts/',
        images: ['/projects/socialMedia/Banner/posts/Screenshot 2025-01-15 at 12.38.17 1.jpg', '/projects/socialMedia/Banner/posts/Snapinst.app_248962894_179676951001997_5822736802372319154_n_1080.jpg'],
        tags: ['Social Media', 'Content Design']
      },
      {
        id: 'appstore',
        title: 'App Store',
        description: 'App store screenshots and promotional graphics',
        folderPath: '/projects/socialMedia/appstore_screenshot/',
        images: ['/projects/socialMedia/appstore_screenshot/2.2.jpg', '/projects/socialMedia/appstore_screenshot/appstore.jpg'],
        tags: ['App Store', 'Screenshots']
      }
    ],
    projects: []
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Transforming raw footage into compelling stories that engage and inspire audiences.',
    heroImage: 'https://images.unsplash.com/photo-1575193541350-c0446da24cf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tools: ['After Effects', 'Adobe Premiere', 'DaVinci Resolve', 'Motion Graphics'],
    projects: []
  },
];

export const projects: Project[] = [
  {
    id: 'style-factory',
    title: 'Style Factory - E-commerce Platform',
    category: 'Product Design & UI/UX',
    description: 'A modern e-commerce platform with seamless checkout experience and inventory management.',
    fullDescription: 'Style Factory is a comprehensive e-commerce solution built for a growing retail business. The platform features a modern design, intuitive navigation, and powerful backend functionality to manage products, orders, and customers efficiently.',
    image: '../src/public/landing-page-img.jpg',
    tags: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects','E-commerce', 'UI/UX Design'],
    year: '2025',
    challenge: 'The client needed a scalable e-commerce platform that could handle high traffic during peak seasons while maintaining fast load times and providing an excellent user experience across all devices.',
    solution: 'I designed and developed a responsive platform using React and TypeScript for the frontend, with a Node.js backend. Implemented advanced caching strategies, lazy loading, and optimized images to ensure fast performance. The design focused on clear product presentation and a streamlined checkout process.',
    results: [
      '40% increase in conversion rate',
      '60% faster page load times',
      '95% customer satisfaction score',
      'Successfully handled 10x traffic during Black Friday'
    ]
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    category: 'Mobile App Design',
    description: 'An intuitive fitness tracking application with personalized workout plans and progress tracking.',
    fullDescription: 'A mobile fitness application designed to help users achieve their health goals through personalized workout plans, nutrition tracking, and progress monitoring. The app features a clean, motivating interface that encourages daily engagement.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcyNTU4OTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['UI/UX', 'Figma', 'Prototyping', 'User Research'],
    year: '2024',
    challenge: 'Design a fitness app that stands out in a crowded market while being accessible to users of all fitness levels, from beginners to advanced athletes.',
    solution: 'Conducted extensive user research to understand pain points in existing fitness apps. Created a design system that emphasizes clarity and motivation, with personalized dashboards, easy workout logging, and visual progress tracking. Prototyped and tested multiple iterations with real users.',
    results: [
      '4.8 star rating on app stores',
      '100K+ downloads in first 3 months',
      '70% daily active user rate',
      'Featured in "Best New Apps" by Apple'
    ]
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand identity including logo design, color palette, and brand guidelines.',
    fullDescription: 'A comprehensive brand identity project for a sustainable fashion startup. The project included logo design, color palette development, typography selection, and creation of detailed brand guidelines to ensure consistency across all touchpoints.',
    image: 'https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI1NTk4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Branding', 'Adobe Suite', 'Print Design', 'Art Direction'],
    year: '2024',
    challenge: 'Create a brand identity that communicates sustainability and modern fashion while appealing to environmentally conscious millennials and Gen Z consumers.',
    solution: 'Developed a nature-inspired visual identity with an earthy color palette and clean typography. Created a flexible logo system that works across digital and physical applications. Designed comprehensive brand guidelines including photography style, iconography, and packaging design.',
    results: [
      'Brand recognition increased by 200%',
      'Successfully launched in 15 retail locations',
      'Won "Best Sustainable Brand Design" award',
      'Social media following grew by 300%'
    ]
  },
  {
    id: 'garlet-branding',
    title: 'Garlet - Complete Brand Identity',
    category: 'Branding & Visual Identity',
    description: 'Comprehensive branding project for Garlet including logo design, packaging, and UI elements.',
    fullDescription: 'A complete brand identity system for Garlet, featuring modern logo design, cohesive packaging solutions, and intuitive user interface designs that work together to create a memorable brand experience.',
    image: '/projects/branding/Logo/Garlet/Garlet_Logo.png',
    tags: ['Logo Design', 'Packaging', 'UI Design', 'Brand Identity', 'Adobe Illustrator', 'Figma'],
    year: '2024',
    challenge: 'Create a cohesive brand identity for Garlet that spans multiple touchpoints including logo, packaging, and digital interfaces, while maintaining consistency and visual appeal across all applications.',
    solution: 'Developed a versatile logo system with multiple variations, designed packaging that reflects the brand personality, and created UI components that complement the overall brand aesthetic. Ensured all elements work harmoniously together.',
    results: [
      'Consistent brand application across all touchpoints',
      'Increased brand recognition by 150%',
      'Positive customer feedback on packaging design',
      'Seamless integration of brand elements in digital products'
    ]
  },
  {
    id: 'packaging-designs',
    title: 'Packaging Design Collection',
    category: 'Product Design & Packaging',
    description: 'Creative packaging designs for various products including food items and consumer goods.',
    fullDescription: 'A collection of innovative packaging designs for different product categories, focusing on functionality, aesthetics, and brand communication. Each design tells a story while ensuring product protection and shelf appeal.',
    image: '/projects/branding/Packaging/JamDesign1.jpg',
    tags: ['Packaging Design', 'Adobe Illustrator', 'Print Design', 'Brand Communication', 'Product Design'],
    year: '2024',
    challenge: 'Design packaging that not only protects products but also serves as a marketing tool, communicates brand values, and stands out on crowded shelves.',
    solution: 'Created distinctive packaging designs for various products including jams, chocolates, and general consumer goods. Each design incorporates unique visual elements, clear branding, and practical functionality while maintaining aesthetic appeal.',
    results: [
      'Increased product visibility on shelves by 40%',
      'Enhanced brand recognition through distinctive packaging',
      'Improved customer engagement with product storytelling',
      'Successful application across multiple product categories'
    ]
  },
  {
    id: 'social-media-designs',
    title: 'Social Media Design Collection',
    category: 'Digital Design & Marketing',
    description: 'Eye-catching social media content including banners, posts, and app store graphics.',
    fullDescription: 'A comprehensive collection of social media designs including promotional banners, engaging posts, and app store screenshots. Each piece is designed to capture attention, convey brand messaging, and drive user engagement across digital platforms.',
    image: '/projects/socialMedia/Banner/posts/شادیتون 100 شب یلدا دلتون قد یه دریا توی این شبای سرما یادتون همیشه با ماهدیه شب یلدایی گارلت 😍.jpg',
    tags: ['Social Media Design', 'Banner Design', 'Digital Marketing', 'Adobe Photoshop', 'Figma'],
    year: '2024',
    challenge: 'Create compelling social media content that resonates with target audiences, maintains brand consistency, and drives engagement across various platforms.',
    solution: 'Designed a series of visually striking social media assets including banners, promotional posts, and app store graphics. Each design incorporates brand elements, seasonal themes, and engaging visuals to maximize audience interaction and brand awareness.',
    results: [
      'Increased social media engagement by 200%',
      'Enhanced brand visibility across digital platforms',
      'Successful seasonal campaign execution',
      'Improved app store conversion rates'
    ]
  }
];
