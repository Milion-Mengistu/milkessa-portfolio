import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

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

      {/* 404 Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-4xl font-bold text-foreground">Page Not Found</h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Sorry! The page you're looking for doesn't exist. Let's get you back to exploring.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
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
};

export default NotFound;
