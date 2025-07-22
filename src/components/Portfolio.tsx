import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Code,
  Database,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  FileText,
  Github
} from "lucide-react";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/83b23e72-d1d7-4e39-ae40-14a7ee2189c7.png';
    link.download = 'Bhavya_Upadhyay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/bhavyaupadhyay', '_blank');
  };

  const skills = {
    languages: ["Python", "SQL", "JavaScript", "TypeScript"],
    cloud: ["AWS Lambda", "CloudWatch", "Athena", "Git"],
    tools: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Power BI", "Tableau"],
    ml: ["Machine Learning", "Deep Learning", "NLP", "YOLOv8", "Transformers", "RAG"],
    frameworks: ["React.js", "Node.js", "Streamlit", "Jupyter", "VS Code"]
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "Tata Consultancy Services",
      period: "Jun 2024 – Jul 2025",
      achievements: [
        "Built ETL pipelines on AWS Lambda processing 10M+ records/month; cut latency by 50%",
        "Created 12+ Grafana dashboards integrated with AWS CloudWatch; improved SLA to 99.9%",
        "Optimized 50+ Athena SQL queries; reduced query time by 40%"
      ]
    },
    {
      title: "Web Development Intern",
      company: "DEEVA",
      period: "Apr 2021 – Sep 2021",
      achievements: [
        "Built secure login with React.js and Node.js for 5,000+ users; scaled to 120,000 monthly visitors",
        "Improved onboarding UX; reduced support tickets by 80%"
      ]
    }
  ];

  const projects = [
    {
      title: "Construction Site Object Detection Using YOLOv8",
      description: "Real-time detection system for construction safety monitoring",
      achievements: [
        "Real-time detection of 12+ object classes from 500+ hours of video",
        "Improved accuracy from 70% to 98%; reduced safety incidents by 25%"
      ],
      tech: ["YOLOv8", "Computer Vision", "Python", "Deep Learning"]
    },
    {
      title: "Duplicate Detection in Job Postings Using LLMs",
      description: "Semantic similarity pipeline for job posting deduplication",
      achievements: [
        "Built semantic similarity pipeline using Sentence Transformers and LLMs",
        "Boosted precision from 68% to 92% on 250K+ entries",
        "Deployed with Milvus + RAG; cut manual effort by 70%"
      ],
      tech: ["LLMs", "Sentence Transformers", "Milvus", "RAG", "NLP"]
    }
  ];

  const publications = [
    {
      title: "Real-Time Safety Equipment Detection Using YOLOv8",
      journal: "Research Square (Preprint)",
      period: "Jan 2024 – May 2024",
      achievement: "Achieved 98% accuracy on 10,000+ annotated images for PPE detection"
    },
    {
      title: "Predicting & Enhancing Fluctuations of Cryptocurrency",
      journal: "IJARESM Journal",
      period: "Jan 2023 – Apr 2023",
      achievement: "Compared LSTM, Random Forest, SVR; increased forecasting accuracy by 15%"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          {/* Mountain landscape background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
          
          {/* Mountain silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-96">
            <svg viewBox="0 0 1200 400" className="absolute bottom-0 w-full h-full opacity-60">
              <path d="M0,400 L0,200 L200,150 L400,180 L600,120 L800,160 L1000,100 L1200,140 L1200,400 Z" fill="#1e293b" opacity="0.8"/>
              <path d="M0,400 L0,250 L150,220 L350,240 L550,190 L750,210 L950,170 L1200,200 L1200,400 Z" fill="#334155" opacity="0.6"/>
              <path d="M0,400 L0,300 L100,280 L300,290 L500,260 L700,270 L900,250 L1200,270 L1200,400 Z" fill="#475569" opacity="0.4"/>
            </svg>
          </div>
          
          {/* Subtle atmospheric haze */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-800/20 to-slate-700/30"></div>
          
          {/* Minimal noise texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className={`fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="font-inter text-4xl md:text-6xl lg:text-7xl font-light mb-12 text-white tracking-[0.3em] uppercase leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Bhavya Upadhyay
              </span>
            </h1>
          </div>
          <div className={`fade-in-up delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-inter text-base md:text-lg lg:text-xl mb-8 text-slate-300 font-light tracking-[0.2em] uppercase">
              Data Scientist
            </p>
          </div>
          <div className={`fade-in-up delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-inter text-sm md:text-base lg:text-lg mb-16 text-slate-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              MS Data Science @ UCI · Building intelligent systems through data and AI
            </p>
          </div>
          <div className={`fade-in-up delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} flex flex-wrap gap-6 justify-center`}>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 font-inter font-light text-sm tracking-wider uppercase px-8 py-4" onClick={handleDownloadResume}>
              <Download className="mr-3 h-4 w-4" />
              Resume
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 font-inter font-light text-sm tracking-wider uppercase px-8 py-4" onClick={handleLinkedInClick}>
              <Linkedin className="mr-3 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-inter text-2xl md:text-3xl font-light mb-6 text-white tracking-[0.3em] uppercase">About</h2>
            <div className="w-24 h-px bg-slate-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="font-inter text-lg text-slate-300 leading-relaxed font-light tracking-wide">
                A data science enthusiast passionate about solving real-world problems through machine learning and intelligent systems.
              </p>
              <p className="font-inter text-lg text-slate-300 leading-relaxed font-light tracking-wide">
                Experienced in building data pipelines, deploying AI models, and optimizing workflows with AWS and Python.
              </p>
              <p className="font-inter text-lg text-slate-300 leading-relaxed font-light tracking-wide">
                Currently pursuing M.S. in Data Science from University of California, Irvine (Fall 2025–Dec 2026).
              </p>
            </div>
            <div 
              className="h-96 bg-cover bg-center rounded-lg opacity-80"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=400&fit=crop')`,
                filter: 'grayscale(30%) contrast(110%)'
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-inter text-2xl md:text-3xl font-light mb-6 text-white tracking-[0.3em] uppercase">Experience</h2>
            <div className="w-24 h-px bg-slate-400 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="font-inter text-xl font-light text-white mb-2 tracking-wide">{exp.title}</h3>
                    <p className="font-inter text-lg text-slate-300 tracking-wide uppercase text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-inter text-slate-400 text-sm tracking-wider mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1 h-1 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="font-inter text-slate-300 leading-relaxed font-light">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-slate-800 relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&h=800&fit=crop')`,
            filter: 'grayscale(100%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-800/80"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-inter text-2xl md:text-3xl font-light mb-6 text-white tracking-[0.3em] uppercase">Projects</h2>
            <div className="w-24 h-px bg-slate-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="border border-slate-700 bg-slate-900/70 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="font-inter text-xl font-light text-white mb-4 tracking-wide">{project.title}</h3>
                <p className="font-inter text-slate-300 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1 h-1 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="font-inter text-sm text-slate-300 font-light">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="font-inter text-xs text-slate-400 border border-slate-600 px-3 py-1 rounded tracking-wider uppercase">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-inter text-2xl md:text-3xl font-light mb-6 text-white tracking-[0.3em] uppercase">Publications</h2>
            <div className="w-24 h-px bg-slate-400 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-inter text-xl font-light text-white mb-3 tracking-wide">{pub.title}</h3>
                    <p className="font-inter text-slate-300 font-light mb-4 tracking-wide uppercase text-sm">
                      {pub.journal}
                    </p>
                    <p className="font-inter text-slate-300 font-light leading-relaxed">{pub.achievement}</p>
                  </div>
                  <span className="font-inter text-slate-400 text-sm tracking-wider mt-4 md:mt-0">
                    {pub.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-slate-800 relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop')`,
            filter: 'grayscale(100%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-800/80"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-inter text-2xl md:text-3xl font-light mb-6 text-white tracking-[0.3em] uppercase">Skills</h2>
            <div className="w-24 h-px bg-slate-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border border-slate-700 bg-slate-900/70 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-inter text-lg font-light text-white mb-6 tracking-wider uppercase">Languages & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.concat(skills.cloud).map((skill, i) => (
                  <span key={i} className="font-inter text-xs text-slate-400 border border-slate-600 px-3 py-1 rounded tracking-wider uppercase">{skill}</span>
                ))}
              </div>
            </div>

            <div className="border border-slate-700 bg-slate-900/70 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-inter text-lg font-light text-white mb-6 tracking-wider uppercase">Libraries & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="font-inter text-xs text-slate-400 border border-slate-600 px-3 py-1 rounded tracking-wider uppercase">{skill}</span>
                ))}
              </div>
            </div>

            <div className="border border-slate-700 bg-slate-900/70 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-inter text-lg font-light text-white mb-6 tracking-wider uppercase">ML & AI</h3>
              <div className="flex flex-wrap gap-3">
                {skills.ml.concat(skills.frameworks).map((skill, i) => (
                  <span key={i} className="font-inter text-xs text-slate-400 border border-slate-600 px-3 py-1 rounded tracking-wider uppercase">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-inter text-2xl md:text-3xl font-light mb-6 text-white tracking-[0.3em] uppercase">Education</h2>
            <div className="w-24 h-px bg-slate-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <GraduationCap className="h-8 w-8 text-slate-400 mt-1" />
                <div>
                  <h3 className="font-inter text-xl font-light text-white mb-3 tracking-wide">University of California, Irvine</h3>
                  <p className="font-inter text-slate-300 font-light mb-4 tracking-wide uppercase text-sm">
                    M.S. in Data Science
                  </p>
                  <span className="font-inter text-slate-400 text-sm tracking-wider">
                    Sept 2025 – Dec 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-slate-700 bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-6">
                <GraduationCap className="h-8 w-8 text-slate-400 mt-1" />
                <div>
                  <h3 className="font-inter text-xl font-light text-white mb-3 tracking-wide">SRM Institute of Science and Technology</h3>
                  <p className="font-inter text-slate-300 font-light mb-4 tracking-wide uppercase text-sm">
                    B.Tech in ECE with Data Science
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="font-inter text-slate-400 text-sm tracking-wider">2020–2024</span>
                    <span className="font-inter text-slate-400 text-sm tracking-wider">GPA: 8.87/10.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-slate-900 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop')`,
            filter: 'grayscale(100%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="font-inter text-2xl md:text-3xl font-light mb-12 tracking-[0.3em] uppercase">Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 border border-slate-600 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-slate-300" />
              </div>
              <div>
                <h3 className="font-inter font-light mb-3 tracking-wider uppercase text-sm">Email</h3>
                <p className="font-inter text-slate-300 font-light tracking-wide">officiallybhavya@gmail.com</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 border border-slate-600 rounded-full flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-slate-300" />
              </div>
              <div>
                <h3 className="font-inter font-light mb-3 tracking-wider uppercase text-sm">LinkedIn</h3>
                <p className="font-inter text-slate-300 font-light tracking-wide">linkedin.com/in/bhavyaupadhyay</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 font-inter font-light text-sm tracking-wider uppercase px-8 py-4">
              <Mail className="mr-3 h-4 w-4" />
              Email
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 font-inter font-light text-sm tracking-wider uppercase px-8 py-4">
              <Linkedin className="mr-3 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-inter text-sm tracking-wider uppercase">&copy; 2024 Bhavya Upadhyay</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;