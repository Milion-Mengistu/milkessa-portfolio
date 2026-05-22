import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Palette, Zap, Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* About Header */}
        <h1 className="text-5xl sm:text-6xl font-bold text-black mb-8">About Me</h1>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            I'm MILKESSA BULTI, a passionate frontend developer currently in my 4th year at ASTU (Adama Science and Technology University).
            I'm dedicated to creating beautiful, accessible, and performant web experiences that delight users and solve real problems.
          </p>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Currently, I'm gaining practical experience as an intern at Ozone Technology PLC, where I contribute to the development of modern web applications.
            I believe in the power of clean code, thoughtful design, and continuous learning.
          </p>
        </div>

        {/* Skills & Expertise */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-border hover:border-black transition-all shadow-sm hover:shadow-xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Development</h3>
            <p className="text-muted-foreground mb-4">
              Building responsive web applications with modern frameworks and best practices.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">React • TypeScript • JavaScript</p>
              <p className="text-sm font-medium text-foreground">HTML5 • CSS3 • Tailwind CSS</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border hover:border-black transition-all shadow-sm hover:shadow-xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Design</h3>
            <p className="text-muted-foreground mb-4">
              Creating intuitive user interfaces with attention to detail and user experience.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Figma • UI Design</p>
              <p className="text-sm font-medium text-foreground">Responsive Design • Accessibility</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border hover:border-black transition-all shadow-sm hover:shadow-xl hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Performance</h3>
            <p className="text-muted-foreground mb-4">
              Optimizing applications for speed, efficiency, and excellent user experience.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Web Optimization • Testing</p>
              <p className="text-sm font-medium text-foreground">Debugging • Problem Solving</p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Experience & Education</h2>
          
          <div className="space-y-8">
            {/* Current Experience */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-black hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-black" />
                  <div>
                    <h3 className="text-xl font-bold text-black">Frontend Developer Intern</h3>
                    <p className="text-gray-700 font-semibold">Ozone Technology PLC</p>
                  </div>
                </div>
                <span className="text-sm text-white bg-black px-3 py-1 rounded-full">Current</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Contributing to web application development using modern technologies.
                Working with the team to implement features, fix bugs, and improve application performance.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-black hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-black" />
                  <div>
                    <h3 className="text-xl font-bold text-black">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-700 font-semibold">ASTU (4th Year Student)</p>
                  </div>
                </div>
                <span className="text-sm text-white bg-black px-3 py-1 rounded-full">2024</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Pursuing computer science degree with focus on software development and web technologies.
                Active learner committed to mastering modern development practices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:milkessa@example.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-24 border-t border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6" />
              <div>
                <h3 className="text-2xl font-bold">MILKESSA BULTI</h3>
                <p className="text-gray-400 mt-2">Frontend Developer & Problem Solver</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="mailto:milkessa@example.com" className="text-gray-300 hover:text-white transition-all flex items-center gap-2 hover:scale-110 transform duration-200 group">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                Email
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all flex items-center gap-2 hover:scale-110 transform duration-200">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all flex items-center gap-2 hover:scale-110 transform duration-200">
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
