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
      title: "Social Media Automation System with n8n",
      description: "End-to-end automated content creation and publishing across multiple platforms",
      achievements: [
        "Built automated workflow with n8n, GPT-4, and DALL·E for content generation",
        "Integrated approval flow via Gmail & Telegram for quality control",
        "Automated posting to Instagram, Facebook, LinkedIn, and Twitter (X)",
        "Aggregated results reporting via email and Telegram notifications"
      ],
      tech: ["n8n", "OpenAI GPT-4", "DALL·E", "Gmail API", "Telegram Bot", "Social Media APIs"]
    },
    {
      title: "Construction Site Object Detection Using YOLOv8",
      description: "Real-time detection system for construction safety monitoring",
      achievements: [
        "Real-time detection of 12+ object classes from 500+ hours of video",
        "Improved accuracy from 70% to 98%; reduced safety incidents by 25%",
        "Deployed computer vision pipeline for PPE detection and safety monitoring"
      ],
      tech: ["YOLOv8", "Computer Vision", "Python", "Deep Learning", "OpenCV"]
    },
    {
      title: "LinkedIn Post Generator using Llama 3.2",
      description: "AI-powered content generation tool that analyzes writing styles",
      achievements: [
        "Analyzes LinkedIn influencer posts to extract topics, language, and writing style",
        "Uses few-shot learning with Llama 3.2 for personalized content generation",
        "Built with Streamlit interface for topic selection and post customization",
        "Enables content creators to maintain consistent voice across posts"
      ],
      tech: ["Llama 3.2", "Python", "Streamlit", "Few-shot Learning", "NLP", "Groq API"]
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-glow rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary/60 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse opacity-50 animation-delay-3000"></div>
        </div>
        
        {/* Modern mountain silhouettes with gradients */}
        <div className="absolute bottom-0 left-0 w-full h-96">
          <svg viewBox="0 0 1200 400" className="absolute bottom-0 w-full h-full">
            <defs>
              <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.3}} />
              </linearGradient>
              <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.7}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.2}} />
              </linearGradient>
              <linearGradient id="mountain3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.5}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.1}} />
              </linearGradient>
            </defs>
            <path d="M0,400 L0,200 L200,150 L400,180 L600,120 L800,160 L1000,100 L1200,140 L1200,400 Z" fill="url(#mountain1)"/>
            <path d="M0,400 L0,250 L150,220 L350,240 L550,190 L750,210 L950,170 L1200,200 L1200,400 Z" fill="url(#mountain2)"/>
            <path d="M0,400 L0,300 L100,280 L300,290 L500,260 L700,270 L900,250 L1200,270 L1200,400 Z" fill="url(#mountain3)"/>
          </svg>
        </div>
        
        {/* Atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-secondary/5"></div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* Enhanced backdrop for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
          
          <div className="relative z-10 py-16 px-8">
            <div className={`fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-none">
                <span className="inline-block hover:scale-105 transition-all duration-700 glow-on-hover bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-2xl">
                  Bhavya Upadhyay
                </span>
              </h1>
              {/* Animated underline */}
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg mb-8 animate-pulse"></div>
            </div>
            
            <div className={`fade-in-up delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative mb-8">
                <p className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-2">
                  Data Scientist & AI Engineer
                </p>
                <div className="flex items-center justify-center gap-3 text-primary/80">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium">Innovating with Intelligence</span>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse animation-delay-500"></div>
                </div>
              </div>
            </div>
            
            <div className={`fade-in-up delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-12 shadow-xl">
                <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed max-w-5xl mx-auto">
                  MS Data Science @ UCI · <span className="text-primary font-semibold">Transforming complex data</span> into 
                  <span className="text-accent font-semibold"> intelligent solutions</span> that drive innovation and impact
                </p>
              </div>
            </div>
            
            <div className={`fade-in-up delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'} flex flex-wrap gap-8 justify-center`}>
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-glow transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-2 border-white/20" 
                onClick={handleDownloadResume}
              >
                <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-3 border-primary/80 bg-white/10 backdrop-blur-lg text-primary hover:bg-primary hover:text-white font-semibold text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-glow transform hover:-translate-y-2 hover:scale-105 transition-all duration-300" 
                onClick={handleLinkedInClick}
              >
                <Linkedin className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-card via-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-8 text-primary-gradient">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-lg"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-left">
              <div className="bg-card/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-border/30 card-hover">
                <p className="text-body text-foreground font-medium mb-8 leading-relaxed">
                  A passionate data science professional dedicated to transforming complex challenges into innovative solutions through cutting-edge machine learning and artificial intelligence.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Expert in architecting scalable data pipelines, deploying production-ready AI models, and optimizing enterprise workflows using cloud technologies and advanced analytics.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 p-8 rounded-2xl border border-primary/30 shadow-lg">
                <p className="text-body text-foreground leading-relaxed font-semibold">
                  🎓 Currently pursuing M.S. in Data Science at University of California, Irvine (Fall 2025–Dec 2026)
                </p>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div 
                  className="relative h-96 bg-cover bg-center rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=500&fit=crop')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-8 text-secondary-gradient">Work Experience</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full shadow-lg"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 p-8 rounded-2xl shadow-xl card-hover transition-all duration-500">
                  {/* Company Icon */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="font-inter text-2xl font-bold text-foreground mb-2 tracking-wide">{exp.title}</h3>
                          <p className="font-inter text-lg text-primary font-semibold uppercase tracking-wider">
                            {exp.company}
                          </p>
                        </div>
                        <div className="bg-muted/50 px-4 py-2 rounded-lg border border-border/50 mt-4 md:mt-0">
                          <span className="font-inter text-muted-foreground text-sm font-medium tracking-wider">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/30 hover:bg-primary/5 transition-colors">
                        <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-inter text-foreground leading-relaxed font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/20 via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-8 text-primary-gradient">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 p-8 rounded-2xl shadow-xl card-hover transition-all duration-500 h-full">
                  {/* Project Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                      <Code className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-inter text-xl font-bold text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="font-inter text-muted-foreground mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  {/* Achievements with enhanced styling */}
                  <div className="space-y-4 mb-8">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/30 hover:bg-primary/5 transition-colors">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                        <span className="font-inter text-sm text-foreground font-medium leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech stack with gradient badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="font-inter text-xs font-medium text-primary-foreground bg-gradient-primary px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary-foreground hover:bg-primary w-full"
                      onClick={() => {
                        const links = [
                          'https://github.com/bhavayupadhyay/Automate-Multi-Platform-Social-Media-Content-Creation-with-n8n',
                          'https://github.com/bhavayupadhyay/Construction-Site-Object-Detection',
                          'https://github.com/bhavayupadhyay/LinkedIn-Post-Generator-using-Llama-3.2'
                        ];
                        window.open(links[index], '_blank');
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
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
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-white">Publications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full shadow-lg"></div>
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
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-8 text-secondary-gradient">Technical Skills</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full shadow-lg"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages & Cloud */}
            <div className="group">
              <div className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 p-8 rounded-2xl shadow-xl card-hover h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <Code className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-inter text-xl font-bold text-foreground tracking-wide">Languages & Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.concat(skills.cloud).map((skill, i) => (
                    <span key={i} className="font-inter text-sm font-medium text-primary-foreground bg-gradient-primary px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Libraries & Tools */}
            <div className="group">
              <div className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-secondary/50 p-8 rounded-2xl shadow-xl card-hover h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <Database className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-inter text-xl font-bold text-foreground tracking-wide">Libraries & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, i) => (
                    <span key={i} className="font-inter text-sm font-medium text-primary-foreground bg-gradient-to-r from-secondary to-accent px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ML & AI */}
            <div className="group">
              <div className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-accent/50 p-8 rounded-2xl shadow-xl card-hover h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-inter text-xl font-bold text-foreground tracking-wide">ML & AI</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.ml.concat(skills.frameworks).map((skill, i) => (
                    <span key={i} className="font-inter text-sm font-medium text-primary-foreground bg-gradient-to-r from-accent to-primary px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-white">Education</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full shadow-lg"></div>
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
      <section className="py-24 px-4 bg-gradient-to-br from-card via-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        
        {/* Floating contact elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="heading-secondary mb-8 text-primary-gradient">Let's Connect</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary via-primary to-accent mx-auto rounded-full shadow-lg"></div>
            <p className="text-body text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on innovative data science projects? Let's explore how we can create intelligent solutions together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
            {/* Email Card */}
            <div className="group">
              <div className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 p-8 rounded-2xl shadow-xl card-hover">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-inter text-xl font-bold text-foreground mb-4 tracking-wide">Email</h3>
                <p className="font-inter text-muted-foreground font-medium">officiallybhavya@gmail.com</p>
              </div>
            </div>
            
            {/* LinkedIn Card */}
            <div className="group">
              <div className="bg-card/90 backdrop-blur-sm border-2 border-border/50 hover:border-secondary/50 p-8 rounded-2xl shadow-xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 mx-auto mb-6">
                  <Linkedin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-inter text-xl font-bold text-foreground mb-4 tracking-wide">LinkedIn</h3>
                <p className="font-inter text-muted-foreground font-medium">linkedin.com/in/bhavyaupadhyay</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium text-sm tracking-wide px-8 py-4 glow-on-hover shadow-xl"
              onClick={() => window.open('mailto:officiallybhavya@gmail.com', '_blank')}
            >
              <Mail className="mr-3 h-5 w-5" />
              Send Email
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground font-inter font-medium text-sm tracking-wide px-8 py-4 backdrop-blur-sm"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="mr-3 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="font-inter text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Bhavya Upadhyay</h3>
            <p className="font-inter text-muted-foreground">Data Scientist & AI Enthusiast</p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
          <p className="font-inter text-sm text-muted-foreground tracking-wider">&copy; 2024 Bhavya Upadhyay. Crafted with passion for data science.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;