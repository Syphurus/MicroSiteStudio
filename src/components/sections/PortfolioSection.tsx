"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

const PortfolioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      title: "Elite Fitness Empire",
      category: "Gym Chain",
      type: "gym",
      description:
        "Luxury website for a premium gym chain with 15 locations. Increased membership signups by 340% and online bookings by 280%.",
      features: [
        "Custom Booking System",
        "Multi-location Management",
        "Member Portal",
        "AI Chatbot",
      ],
      results: {
        conversions: "+340%",
        revenue: "+$2.3M",
        traffic: "+225%",
        retention: "+180%",
      },
      tech: ["Next.js", "React", "TypeScript", "Stripe", "AI Integration"],
      image: "/api/placeholder/800/600",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      testimonial:
        "Microsite Studio transformed our digital presence completely. We went from struggling to fill classes to having waiting lists.",
      client: "Sarah Mitchell, CEO",
      year: "2024",
      timeline: "8 weeks",
      investment: "$15,000",
    },
    {
      id: 2,
      title: "FitCoach Pro Platform",
      category: "Personal Training",
      type: "personal-trainer",
      description:
        "Revolutionary platform for celebrity personal trainers. Features client management, workout planning, and automated lead generation.",
      features: [
        "Client Management",
        "Workout Builder",
        "Progress Tracking",
        "Payment Integration",
      ],
      results: {
        conversions: "+450%",
        revenue: "+$1.8M",
        traffic: "+190%",
        retention: "+220%",
      },
      tech: ["React Native", "Node.js", "MongoDB", "Stripe", "WebRTC"],
      image: "/api/placeholder/800/600",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      testimonial:
        "This platform revolutionized how I connect with clients. My booking rate increased 5x in just 3 months.",
      client: "Marcus Johnson, Celebrity Trainer",
      year: "2024",
      timeline: "12 weeks",
      investment: "$25,000",
    },
    {
      id: 3,
      title: "Yoga Sanctuary Network",
      category: "Yoga Studio",
      type: "yoga",
      description:
        "Serene and modern website for a chain of premium yoga studios. Integrated class scheduling, teacher profiles, and mindfulness content.",
      features: [
        "Class Scheduling",
        "Teacher Profiles",
        "Online Classes",
        "Membership Tiers",
      ],
      results: {
        conversions: "+280%",
        revenue: "+$950K",
        traffic: "+165%",
        retention: "+145%",
      },
      tech: ["Vue.js", "Laravel", "MySQL", "Zoom API", "PayPal"],
      image: "/api/placeholder/800/600",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      testimonial:
        "The website perfectly captures our zen philosophy while driving incredible business results.",
      client: "Luna Patel, Founder",
      year: "2023",
      timeline: "10 weeks",
      investment: "$18,000",
    },
    {
      id: 4,
      title: "CrossFit Champions Hub",
      category: "CrossFit Box",
      type: "crossfit",
      description:
        "High-energy website for competitive CrossFit boxes. Features WOD tracking, competition results, and community features.",
      features: [
        "WOD Tracking",
        "Leaderboards",
        "Event Registration",
        "Community Forum",
      ],
      results: {
        conversions: "+380%",
        revenue: "+$1.2M",
        traffic: "+210%",
        retention: "+195%",
      },
      tech: ["React", "Express.js", "PostgreSQL", "Socket.io", "Stripe"],
      image: "/api/placeholder/800/600",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      testimonial:
        "Our community engagement skyrocketed. Members are more active than ever before.",
      client: "Jake Rodriguez, Owner",
      year: "2023",
      timeline: "14 weeks",
      investment: "$22,000",
    },
    {
      id: 5,
      title: "Nutrition Coach Academy",
      category: "Nutrition Coaching",
      type: "nutrition",
      description:
        "Educational platform for certified nutrition coaches. Includes course delivery, client tracking, and meal planning tools.",
      features: [
        "Course Platform",
        "Client Portal",
        "Meal Planning",
        "Progress Analytics",
      ],
      results: {
        conversions: "+420%",
        revenue: "+$3.1M",
        traffic: "+275%",
        retention: "+260%",
      },
      tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "OpenAI"],
      image: "/api/placeholder/800/600",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      testimonial:
        "This platform allowed us to scale from 50 to 2000+ clients while maintaining personalized service.",
      client: "Dr. Amanda Foster",
      year: "2024",
      timeline: "16 weeks",
      investment: "$35,000",
    },
    {
      id: 6,
      title: "Athletic Performance Center",
      category: "Sports Performance",
      type: "sports",
      description:
        "High-tech website for elite athletic performance center. Features athlete assessments, training programs, and performance analytics.",
      features: [
        "Performance Testing",
        "Custom Programs",
        "Analytics Dashboard",
        "Athlete Profiles",
      ],
      results: {
        conversions: "+310%",
        revenue: "+$1.7M",
        traffic: "+185%",
        retention: "+175%",
      },
      tech: ["React", "Node.js", "MongoDB", "D3.js", "Stripe"],
      image: "/api/placeholder/800/600",
      beforeImage: "/api/placeholder/400/300",
      afterImage: "/api/placeholder/400/300",
      testimonial:
        "We now train Olympic athletes and professional sports teams. The platform speaks to serious athletes.",
      client: "Coach David Chen",
      year: "2023",
      timeline: "20 weeks",
      investment: "$45,000",
    },
  ];

  const filterCategories = [
    { key: "all", label: "All Projects", icon: "🌟" },
    { key: "gym", label: "Gym Chains", icon: "🏋️" },
    { key: "personal-trainer", label: "Personal Trainers", icon: "💪" },
    { key: "yoga", label: "Yoga Studios", icon: "🧘" },
    { key: "crossfit", label: "CrossFit Boxes", icon: "⚡" },
    { key: "nutrition", label: "Nutrition Coaching", icon: "🥗" },
    { key: "sports", label: "Sports Performance", icon: "🏆" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.type === activeFilter);

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative py-32 bg-gradient-to-b from-luxury-charcoal via-luxury-black to-luxury-charcoal overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-red rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-sm font-medium mb-8"
          >
            <span className="mr-2">🎨</span>
            Our Premium Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-luxury-white mb-8"
          >
            Digital Excellence
            <span className="block bg-gradient-to-r from-luxury-gold via-luxury-red to-luxury-gold bg-clip-text text-transparent">
              That Delivers Results
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-luxury-lightGray max-w-4xl mx-auto leading-relaxed"
          >
            Every project is a masterpiece designed to drive conversions,
            enhance user experience, and establish market dominance in the
            fitness industry.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={category.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.key
                  ? "bg-luxury-gold text-luxury-black shadow-glow"
                  : "bg-luxury-charcoal/50 text-luxury-lightGray border border-luxury-gold/20 hover:border-luxury-gold/50 hover:text-luxury-gold"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(212, 175, 55, 0.3)",
                }}
                onClick={() => setSelectedProject(project.id)}
                className="bg-luxury-charcoal/70 backdrop-blur-lg border border-luxury-gold/20 rounded-3xl overflow-hidden cursor-pointer hover:border-luxury-gold/60 transition-all duration-500 group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-luxury-gold/20 to-luxury-red/20 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-full h-full bg-luxury-charcoal/30 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="text-6xl opacity-50"
                    >
                      {project.type === "gym" && "🏋️"}
                      {project.type === "personal-trainer" && "💪"}
                      {project.type === "yoga" && "🧘"}
                      {project.type === "crossfit" && "⚡"}
                      {project.type === "nutrition" && "🥗"}
                      {project.type === "sports" && "🏆"}
                    </motion.div>
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-luxury-gold font-medium px-3 py-1 bg-luxury-gold/10 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-luxury-lightGray">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-luxury-white mb-3 group-hover:text-luxury-gold transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-luxury-lightGray text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-luxury-gold">
                        {project.results.conversions}
                      </div>
                      <div className="text-xs text-luxury-lightGray">
                        Conversions
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-luxury-gold">
                        {project.results.revenue}
                      </div>
                      <div className="text-xs text-luxury-lightGray">
                        Revenue
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-luxury-black/50 text-luxury-lightGray rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-luxury-black/50 text-luxury-lightGray rounded">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { label: "Total Projects", value: "500+", icon: "🚀" },
            { label: "Average ROI", value: "340%", icon: "📈" },
            { label: "Client Retention", value: "98%", icon: "💎" },
            { label: "Industries Served", value: "15+", icon: "🌍" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(212, 175, 55, 0.1)",
              }}
              className="bg-luxury-charcoal/50 backdrop-blur-lg border border-luxury-gold/20 rounded-2xl p-6 text-center hover:border-luxury-gold/50 transition-all duration-500"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="text-3xl mb-3"
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-luxury-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-luxury-lightGray">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-luxury-gold/10 to-luxury-red/10 backdrop-blur-lg border border-luxury-gold/30 rounded-3xl p-12 max-w-4xl"
          >
            <h3 className="text-3xl font-display font-bold text-luxury-white mb-6">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-luxury-lightGray mb-8">
              Let&apos;s create a website that not only looks amazing but drives
              real business results for your fitness brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxury-gold text-luxury-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-luxury-gold/90 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal would go here - simplified for this example */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-luxury-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-luxury-charcoal border border-luxury-gold/30 rounded-3xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-luxury-white">
                  Project Details
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-luxury-gold hover:text-luxury-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-luxury-lightGray">
                Detailed project information would be displayed here with
                before/after images, full case study, testimonials, and complete
                feature breakdown.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
