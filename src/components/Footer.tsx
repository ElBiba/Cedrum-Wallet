import "./Footer.css";
export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-blue-900/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
           <img className="cedrum_logo_footer" src="https://i.ibb.co/QvpDbVsx/image-3-1.png"/>
           <span className="text-white">Cedrum</span>
          </div>

          <p className="text-blue-400 text-sm text-center">
            © 2025 Cedrum. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#about" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              About
            </a>
            <a href="#roadmap" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Roadmap
            </a>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
