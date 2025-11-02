import { Button } from "./ui/button";
import { ArrowLeft, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import "./ComingSoon.css";
export function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4338ca 50%, #312e81 75%, #1e1b4b 100%)'
          }}></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 opacity-20 transform rotate-45 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 opacity-20 transform -rotate-45 blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-white mb-4">Cedrum Extension — Coming Soon</h1>
          
          <div className="space-y-6 text-blue-200">
            <p className="text-xl">
              We're not ready to publish the Cedrum Chrome Extension just yet.
            </p>
            <p className="text-xl">
              Our team is actively building and testing to ensure you get the most secure and seamless wallet experience on the Cedra Blockchain.
            </p>
          </div>

          <div className="pt-8 space-y-6">
            <p className="text-blue-300 text-xl">
              Stay connected — the launch is closer than you think.
            </p>
            <p className="text-blue-300">
              Follow us on <span className="text-blue-400">Twitter</span> and stay active in our <span className="text-blue-400">Discord</span> community —<br />
              that's where the first download opportunity will be announced.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-white text-2xl tracking-wide">
              Be early. Be ready. Be part of Cedrum.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap pt-8">
            <Link to="/">
                <Button variant="outline" className="back-home-button px-8 py-6">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Home
                </Button>
            </Link>
            <a href="https://x.com/Cedrum_Wallet" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
                <Twitter className="mr-2 w-5 h-5" />
                Follow on Twitter
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
