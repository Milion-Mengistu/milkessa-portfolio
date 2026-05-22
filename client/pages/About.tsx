import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Palette, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-8">About Me</h1>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            I'm mILKESSA BULTI, a passionate frontend developer currently in my 4th year at ASTU (Adama Science and Technology University). 
            I'm dedicated to creating beautiful, accessible, and performant web experiences that delight users and solve real problems.
          </p>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Currently, I'm gaining practical experience as an intern at Ozone Technology PLC, where I contribute to the development of modern web applications.
            I believe in the power of clean code, thoughtful design, and continuous learning.
          </p>
        </div>

        {/* Skills & Expertise */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Development</h3>
            <p className="text-muted-foreground mb-4">
              Building responsive web applications with modern frameworks and best practices.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">React • TypeScript • JavaScript</p>
              <p className="text-sm font-medium text-foreground">HTML5 • CSS3 • Tailwind CSS</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border hover:border-secondary/30 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Design</h3>
            <p className="text-muted-foreground mb-4">
              Creating intuitive user interfaces with attention to detail and user experience.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Figma • UI Design</p>
              <p className="text-sm font-medium text-foreground">Responsive Design • Accessibility</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Performance</h3>
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
          <h2 className="text-3xl font-bold text-foreground mb-8">Experience & Education</h2>
          
          <div className="space-y-8">
            {/* Current Experience */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-primary">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Frontend Developer Intern</h3>
                  <p className="text-primary font-semibold">Ozone Technology PLC</p>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">Current</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Contributing to web application development using modern technologies. 
                Working with the team to implement features, fix bugs, and improve application performance.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-secondary">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                  <p className="text-secondary font-semibold">ASTU (4th Year Student)</p>
                </div>
                <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">2024</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Pursuing computer science degree with focus on software development and web technologies. 
                Active learner committed to mastering modern development practices.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:milkessa@example.com"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold">mILKESSA BULTI</h3>
              <p className="text-gray-400 mt-2">Frontend Developer & Problem Solver</p>
            </div>
            <div className="flex gap-6">
              <a href="mailto:milkessa@example.com" className="text-gray-300 hover:text-white transition-colors">
                Email
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 mILKESSA BULTI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
