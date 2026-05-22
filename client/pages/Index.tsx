import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Code2, Zap, Palette } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-black">
            MB
          </Link>
          <div className="flex gap-8 items-center">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <a href="mailto:milkessa@example.com" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground animate-slide-in-left">MILKESSA BULTI</span>
              <span className="block text-foreground mt-2 animate-slide-in-right">
                Frontend Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-in-up">
              Crafting beautiful, responsive web experiences with modern technologies. Passionate about clean code, pixel-perfect designs, and creating intuitive user interfaces.
            </p>
          </div>

          {/* Experience & Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {/* Experience */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border hover:border-black transition-all shadow-sm hover:shadow-xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                  <Code2 className="text-white font-bold text-lg w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Experience</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    <strong>Intern</strong> at Ozone Technology PLC
                  </p>
                  <p className="text-muted-foreground text-xs mt-2">Building and maintaining web applications with modern frontend technologies</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border hover:border-black transition-all shadow-sm hover:shadow-xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white font-bold text-lg w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Education</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    <strong>4th Year Student</strong> at ASTU
                  </p>
                  <p className="text-muted-foreground text-xs mt-2">Pursuing studies in computer science and technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 active:scale-95 transition-all font-semibold text-lg group duration-200"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:milkessa@example.com"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all font-semibold text-lg duration-200"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#" className="w-12 h-12 rounded-lg bg-white border border-black hover:border-black hover:bg-black hover:text-white transition-all flex items-center justify-center group hover:scale-110 transform duration-200">
              <Github className="w-5 h-5 group-hover:animate-spin" />
            </a>
            <a href="#" className="w-12 h-12 rounded-lg bg-white border border-black hover:border-black hover:bg-black hover:text-white transition-all flex items-center justify-center group hover:scale-110 transform duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-lg bg-white border border-black hover:border-black hover:bg-black hover:text-white transition-all flex items-center justify-center group hover:scale-110 transform duration-200">
              <ExternalLink className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground animate-fade-in-up">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-border hover:border-black transition-all hover:shadow-2xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-black h-40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">React Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">React Dashboard</h3>
                <p className="text-muted-foreground mt-2">
                  Interactive analytics dashboard built with React and modern data visualization. Fully responsive design with real-time updates.
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-3 py-1 bg-black text-white text-sm rounded">React</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded">Tailwind</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-border hover:border-black transition-all hover:shadow-2xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-black h-40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">E-Commerce Platform</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">E-Commerce Platform</h3>
                <p className="text-muted-foreground mt-2">
                  Modern e-commerce web application with product catalog, cart management, and secure checkout. Optimized for performance.
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-3 py-1 bg-black text-white text-sm rounded">React</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded">CSS</span>
                  <span className="px-3 py-1 bg-black text-white text-sm rounded">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-24 border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Code2 className="w-6 h-6" />
                MILKESSA BULTI
              </h3>
              <p className="text-gray-400 mt-2">Frontend Developer & Problem Solver</p>
            </div>
            <div className="flex gap-6">
              <a href="mailto:milkessa@example.com" className="text-gray-300 hover:text-white transition-all flex items-center gap-2 hover:scale-110 transform duration-200 group">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                Email
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all flex items-center gap-2 hover:scale-110 transform duration-200 group">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all flex items-center gap-2 hover:scale-110 transform duration-200 group">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 MILKESSA BULTI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
