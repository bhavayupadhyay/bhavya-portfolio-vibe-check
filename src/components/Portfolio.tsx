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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
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
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A data science enthusiast passionate about solving real-world problems through machine learning and intelligent systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced in building data pipelines, deploying AI models, and optimizing workflows with AWS and Python.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing M.S. in Data Science from University of California, Irvine (Fall 2025–Dec 2026).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Software Development</h3>
                  <p className="text-sm text-muted-foreground">Full-stack development and cloud solutions</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Database className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold mb-2">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground">ETL pipelines and data optimization</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Brain className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">AI models and deep learning</p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-warning" />
                  <h3 className="font-semibold mb-2">Research</h3>
                  <p className="text-sm text-muted-foreground">Published research and innovation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Research Publications</h2>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-secondary mb-2">
                        {pub.journal}
                      </CardDescription>
                      <p className="text-muted-foreground">{pub.achievement}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-4 md:mt-0">
                      <Calendar className="mr-2 h-4 w-4" />
                      {pub.period}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-3 h-6 w-6 text-primary" />
                  Languages & Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.concat(skills.cloud).map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-3 h-6 w-6 text-secondary" />
                  Libraries & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-3 h-6 w-6 text-accent" />
                  ML & AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.concat(skills.frameworks).map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-2">University of California, Irvine (UCI)</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      M.S. in Data Science
                    </CardDescription>
                    <Badge variant="outline" className="mt-2">
                      Sept 2025 – Dec 2026
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-2">SRM Institute of Science and Technology</CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      B.Tech in ECE with Data Science
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">2020–2024</Badge>
                      <Badge variant="secondary">GPA: 8.87/10.0</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-12 text-blue-100">
            Ready to collaborate on exciting data science projects? Let's discuss how we can work together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-100">officiallybhavya@gmail.com</p>
              </div>
            </div>
            
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Linkedin className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-blue-100">linkedin.com/in/bhavyaupadhyay</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="glow-on-hover">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Bhavya Upadhyay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;