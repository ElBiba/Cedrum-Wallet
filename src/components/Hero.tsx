import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 bg-[#0a0a1a]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4338ca 50%, #312e81 75%, #1e1b4b 100%)'}}>
            </div>
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 opacity-20 transform rotate-45 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 opacity-20 transform -rotate-45 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-600 opacity-10 transform rotate-12 blur-2xl"></div>
        </div>
        
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalStripes" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="100" stroke="#4338ca" strokeWidth="40" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#312e81" strokeWidth="40" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalStripes)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <img className="cedrum_logo" 
        src="https://i.ibb.co/QvpDbVsx/image-3-1.png"/>
        <h1 className="text-white mb-6 text-white-1" style={{fontSize: 40}}>Cedrum</h1>
        <p className="text-blue-200 text-xl mb-4 max-w-3xl mx-auto">
          The wallet of the Cedra Network — simple, secure and built with the community.
        </p>
        <p className="text-blue-300 text-lg mb-8 max-w-2xl mx-auto">
          More than just a tool, it's your gateway to Cedra's future.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/coming-soon">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 get-started-button" >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-950 px-10 py-7 text-lg learn-more-button">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}