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

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Design & Development',
    description: 'A modern e-commerce platform with seamless checkout experience and inventory management.',
    fullDescription: 'A comprehensive e-commerce solution built for a growing retail business. The platform features a modern design, intuitive navigation, and powerful backend functionality to manage products, orders, and customers efficiently.',
    image: 'https://images.unsplash.com/photo-1760237877084-189a676623ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0JTIwbW9ja3VwfGVufDF8fHx8MTc3MjYzOTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
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
  }
];
