"use client";

import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Splash from "@/components/Splash";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Download, Briefcase, Award, GraduationCap, Code } from "lucide-react";

// Resume Data Object
const RESUME = {
  basics: {
    name: "SAI DINESH RACHAKONDA",
    title: "Software Development Engineer",
    location: "New York",
    email: "saidinesh.r@outlook.com",
    phone: "+1-716-923-5487",
    summary: "Software Development Engineer with 3+ years of experience developing backend applications for financial and e-commerce systems using Java, Spring Boot, Kafka, and AWS. Worked on REST APIs, database tuning, and deployments with Docker and Kubernetes. Completed an MS in Computational Science with hands-on experience in backend development and distributed systems."
  },
  impactHighlights:[
    "Reduced debugging time by 30% across 5 critical projects",
    "Processed ~150,000 daily payment transactions",
    "Served 2M+ EU users on real-time workflows"
  ],
  experience:[
    {
      id: 1,
      company: "University at Buffalo",
      role: "Software Engineer – EAS, UBIT",
      dates: "Jan 2025 – Present",
      location: "New York(Remote)",
      bullets:[
        "Reduced debugging time by 30% across 5 critical software projects by redesigning Java applications into modular components using OOP principles, improving maintainability and scalability",
        "Unified backend workflows and NoSQL integration by developing RESTful microservices with Spring Boot and Spring Cloud for shared application services",
        "Lowered deployment errors by 25% in Linux-based release environments by automating CI/CD pipelines with Bash scripting and Kubernetes",
        "Strengthened backend functional validation by implementing Selenium-based API testing frameworks in the release process"
      ]
    },
    {
      id: 2,
      company: "Wipro Ltd",
      role: "Software Engineer (Client: Metro Bank)",
      dates: "Aug 2022 – Jul 2023",
      location: "Bengaluru",
      bullets:[
        "Processed ~150,000 payment transactions per day across BACS and bill payment workflows by developing Java services on the Spring framework for core banking systems",
        "Lowered inter-service timeout and retry failures by ~20% in a multi-service banking environment by shifting communication to REST APIs and Apache Kafka",
        "Improved response times by ~30% and increased throughput for payment workloads by tuning PostgreSQL queries, indexing, and caching",
        "Secured internal and customer-facing service access by implementing OAuth 2.0 authentication and role-based authorization across banking applications",
        "Sustained zero-downtime releases for transaction-critical services by deploying with Docker, Kubernetes, AWS (EC2, RDS, S3), Jenkins, GitLab CI/CD, JUnit, Mockito, and Spring Boot Actuator"
      ]
    },
    {
      id: 3,
      company: "Wipro Ltd",
      role: "Software Engineer (Client: Delivery Hero)",
      dates: "Aug 2021 – Jul 2022",
      location: "Bengaluru",
      bullets:[
        "Served 2M+ EU users on real-time order and inventory workflows by building a microservices architecture with Spring Boot for high-traffic food delivery operations",
        "Dropped PostgreSQL and MongoDB query latency by 45% for order retrieval and inventory lookups through targeted caching and indexing",
        "Coordinated 1M+ daily events for order updates and cross-regional inventory sync using Apache Kafka and RabbitMQ pipelines",
        "Accelerated dashboard refresh speed by ~25% for operational users by building React.js interfaces and REST APIs for order tracking and inventory management",
        "Preserved application performance during 3x peak mealtime traffic and shortened mean time to resolution by ~35% by scaling Kubernetes-based services and adding Splunk and Log4j."
      ]
    }
  ],
  projects:[
    {
      title: "Smart Bank – Modular Banking System",
      link: "Github Link",
      bullets:[
        "Developed Spring Boot microservices architecture with secure REST APIs to handle core banking operations and financial transactions",
        "Deployed application using Docker containerization with PostgreSQL database integration for scalable system infrastructure",
        "Implemented test automation tools such as JUnit and Mockito to validate and verify software modules, producing bug reports and refining test cases through iterative feedback"
      ]
    },
    {
      title: "Lyft Bay Wheels ETL Pipeline",
      link: "Github Link",
      bullets:[
        "Built an end-to-end ETL pipeline with Python, Mage AI, BigQuery, and GCP to process and analyze 261,311 Bay Wheels ride records",
        "Modeled a star-schema data warehouse with fact and dimension tables for dimensions to support reporting and analytics",
        "Created a Looker Studio dashboard that highlighted usage trends, including 209,048 electric-bike rides, 52,263 classic-bike rides, and an average ride duration of 12.71 minutes"
      ]
    },
    {
      title: "E-Commerce Backend Simulation",
      link: "Github Link",
      bullets:[
        "Created Spring Boot backend with MySQL for comprehensive product, order, and inventory management functionality",
        "Integrated Kafka messaging for asynchronous updates and Role-Based Access Control (RBAC) for enhanced security",
        "Built automated test scripts to monitor inventory workflows, and collaborated with development teams to troubleshoot prod. issues"
      ]
    }
  ],
  skills:[
    { category: "Languages", items: "Java, Python, SQL, JavaScript" },
    { category: "Backend", items: "Spring Boot, REST APIs, Microservices, JPA, Hibernate" },
    { category: "Frontend", items: "React.js" },
    { category: "Cloud/DevOps", items: "AWS (EC2, RDS, S3), Docker, Kubernetes, Jenkins, GitLab CI/CD" },
    { category: "Databases", items: "PostgreSQL, MongoDB, MySQL" },
    { category: "Practices", items: "SDLC, TDD, Secure and maintainable code" },
    { category: "Messaging", items: "Kafka, RabbitMQ" },
    { category: "Testing/Security", items: "JUnit, Mockito, TDD, OAuth 2.0" },
    { category: "ML/Scientific", items: "PyTorch, torchdiffeq, scikit-learn, Neural Networks" },
    { category: "Methodologies", items: "Agile, TDD, OAuth 2.0, Swagger, Cross-disciplinary Collaboration" }
  ],
  education:[
    { degree: "Masters in Computational Science", school: "University at Buffalo", date: "Feb 2025" },
    { degree: "Bachelors in Electronics and communication", school: "KL University", date: "May 2021" }
  ],
  achievements:[
    "Amazon Certified — Amazon S3 with AWS SDK for Python",
    "Wipro Certified — Spring Boot Level 2",
    "Wipro Certified — Microservices Level 2"
  ]
};

export default function Home() {
  const[showSplash, setShowSplash] = useState(true);
  const [activeExp, setActiveExp] = useState<number | null>(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  },[]);

  return (
    <>
      <AnimatePresence>{showSplash && <Splash />}</AnimatePresence>
      <AnimatedBackground />

      <div className="relative z-10 w-full min-h-screen">
        {/* Navigation / Header */}
        <header className="fixed top-0 w-full border-b border-white/5 bg-black/40 backdrop-blur-md z-40">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-bold tracking-widest text-white">SDR</span>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            </nav>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!showSplash ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4">
              {RESUME.basics.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-6">
              {RESUME.basics.title}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              {RESUME.basics.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#experience" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                View Experience
              </a>
              <button className="px-6 py-3 border border-white/10 hover:bg-white/5 bg-white/5 backdrop-blur-md text-white rounded-lg font-medium transition-all flex items-center gap-2">
                <Download size={18} /> Download Resume
              </button>
            </div>

            {/* TOP 3 IMPACT STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {RESUME.impactHighlights.map((highlight, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-400 shrink-0 mt-1" size={20} />
                    <p className="text-sm text-slate-300">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 flex items-center gap-3"
          >
            <Briefcase className="text-blue-500" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </motion.div>

          <div className="space-y-4">
            {RESUME.experience.map((exp) => (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md cursor-pointer
                  ${activeExp === exp.id ? "border-blue-500/50 bg-white/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
                onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-slate-300 font-medium">{exp.dates}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {activeExp === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 md:px-8 pb-8"
                    >
                      <ul className="space-y-3 mt-4 border-t border-white/10 pt-6">
                        {exp.bullets.map((bullet, i) => {
                          const hasMetric = /\d+%|\d+M\+|\d+,\d+/.test(bullet);
                          return (
                            <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                              <span dangerouslySetInnerHTML={{ __html: bullet.replace(/(\d+%|\d+M\+|\d+,\d+)/g, '<span class="text-white font-bold px-1 rounded bg-blue-500/20">$1</span>') }} />
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 flex items-center gap-3"
          >
            <Code className="text-purple-500" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{proj.title}</h3>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {proj.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-purple-500 mt-1 opacity-70">▹</span> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESUME.skills.map((skill, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-blue-400 font-semibold mb-2">{skill.category}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <section id="education" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-blue-500" size={28} />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                {RESUME.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-white/10">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-slate-400">{edu.school}</p>
                    <p className="text-sm text-slate-500 font-mono mt-1">{edu.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-purple-500" size={28} />
                <h2 className="text-3xl font-bold">Achievements</h2>
              </div>
              <div className="space-y-4">
                {RESUME.achievements.map((ach, idx) => {
                  const [issuer, cert] = ach.split(" — ");
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                        <Award size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-200 text-sm md:text-base">{cert || ach}</p>
                        {cert && <p className="text-xs text-slate-500">{issuer}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/10 text-slate-500 text-sm">
          <p>{RESUME.basics.name} &copy; {new Date().getFullYear()} • Built with Next.js & Framer Motion</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href={`mailto:${RESUME.basics.email}`} className="hover:text-white transition">Email</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Portfolio</a>
          </div>
        </footer>
      </div>
    </>
  );
}