"use client";

import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Splash from "@/components/Splash";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Download, Briefcase, GraduationCap, Code, Award } from "lucide-react";

// Updated Resume Data Object
const RESUME = {
  basics: {
    name: "SAI DINESH",
    title: "Software Engineer",
    location: "USA",
    email: "saidinesh.r@outlook.com",
    phone: "+1-716-923-5487",
    summary: "Software Engineer with nearly 4 years of experience building scalable backend systems, event-driven microservices, and cloud-native applications across banking, payments, and high-traffic commerce domains. Hands-on expertise in Java, Spring Boot, Kafka, PostgreSQL, Redis, AWS, Kubernetes, and Snowflake, with a strong track record of improving throughput, reducing latency, and maintaining high system availability. Experienced in developing real-time payment and treasury platforms, optimizing APIs and database performance, and collaborating with cross-functional teams to deliver reliable, high-impact solutions"
  },
  impactHighlights:[
    "Increased processing throughput by 40% with event-driven pipelines",
    "Processed ~150,000 daily payment transactions",
    "Served 2M+ EU users on real-time order workflows"
  ],
  experience:[
    {
      id: 1,
      company: "HSBC",
      role: "Software Engineer",
      dates: "Mar 2025 – Present",
      location: "Buffalo",
      bullets:[
        "Engineered real-time, event-driven data pipelines using Java, Spring Boot, and Kafka to synchronize commercial payment transactions, treasury cash positions, and corporate account balances, increasing processing throughput by 40%",
        "Introduced GraphQL APIs to simplify data access patterns, reducing redundant client calls by 20% and improving efficiency for downstream finance and reporting applications",
        "Boosted application performance by implementing Redis-based distributed caching, reducing database load and cutting latency by 50% across high-volume payment workflows",
        "Enhanced system scalability through ExecutorService, CompletableFuture, and JVM tuning (heap sizing, garbage collection), enabling stable processing of millions of transactions during high-demand cycles",
        "Built and deployed scalable treasury and payment services on AWS (EKS, MSK, ElastiCache, DynamoDB) with auto-scaling and multi-AZ architecture, maintaining 99.9% service availability during peak transaction periods",
        "Established Snowflake as a centralized analytics layer for treasury and payment data, accelerating reconciliation, reporting, and operational insight generation for finance teams",
        "Partnered with portfolio analytics, risk, and finance teams to refine commercial settlement reconciliation workflows, reducing discrepancies and improving reporting accuracy and turnaround time",
        "Incorporated GitHub Copilot and AI-assisted development workflows to streamline coding, reduce repetitive engineering effort, and raise developer productivity by 25%"
      ]
    },
    {
      id: 2,
      company: "Metro bank",
      role: "Software Engineer",
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
      role: "Software Engineer",
      dates: "Aug 2021 – Jul 2022",
      location: "Hyderabad",
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
    }
  ],
  skills:[
    { category: "Languages", items: "Java, Python, SQL, JavaScript" },
    { category: "Backend & APIs", items: "Spring Boot, Spring Framework, Microservices, REST APIs, GraphQL, JPA, Hibernate" },
    { category: "Messaging & Concurrency", items: "Apache Kafka, RabbitMQ, ExecutorService, CompletableFuture" },
    { category: "Frontend", items: "React.js" },
    { category: "Cloud & DevOps", items: "AWS (EKS, MSK, ElastiCache, DynamoDB, EC2, RDS, S3), Docker, Kubernetes, Jenkins, GitLab CI/CD" },
    { category: "Databases & Data Platforms", items: "PostgreSQL, MongoDB, MySQL, Redis, Snowflake" },
    { category: "Testing, Security & Monitoring", items: "JUnit, Mockito, OAuth 2.0, Spring Boot Actuator, Splunk, Log4j" },
    { category: "Practices & Methodologies", items: "SDLC, Agile, TDD, Secure Coding, Performance Optimization, Cross-Functional Collaboration" }
  ],
  education:[
    { degree: "Masters in Computational Science", school: "University at Buffalo", date: "Feb 2025" }
  ]
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
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
            <span className="font-bold tracking-widest text-white">SD</span>
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
              <a 
                href="/Sai_Dinesh_Resume.pdf" 
                download="Sai_Dinesh_Resume.pdf"
                className="px-6 py-3 border border-white/10 hover:bg-white/5 bg-white/5 backdrop-blur-md text-white rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <Download size={18} /> Download Resume
              </a>
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
                          return (
                            <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                              <span dangerouslySetInnerHTML={{ __html: bullet.replace(/(\d+%|\d+M\+|\d+,\d+|99\.9%)/g, '<span class="text-white font-bold px-1 rounded bg-blue-500/20">$1</span>') }} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESUME.skills.map((skill, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-blue-400 font-semibold mb-2">{skill.category}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-500" size={28} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {RESUME.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-white/10">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-lg text-slate-400">{edu.school}</p>
                  <p className="text-sm text-slate-500 font-mono mt-2">{edu.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/10 text-slate-500 text-sm bg-black/50">
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