import { Button } from "./ui/button";
import { ArrowLeft, Download, Chrome, Smartphone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Download.css";

interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
  onDownload?: () => void;
}

function PlatformCard({ icon, title, description, comingSoon, onDownload }: PlatformCardProps) {
  return (
    <div className="platform-card">
      <div className="platform-icon">{icon}</div>
      <h3 className="platform-title">{title}</h3>
      <p className="platform-description">{description}</p>
      {comingSoon ? (
        <Button variant="outline" className="platform-button" disabled>
          Coming Soon
        </Button>
      ) : (
        <Button 
          className="platform-button bg-blue-600 hover:bg-blue-700" 
          onClick={onDownload}
        >
          <Download className="mr-2 w-4 h-4" />
          Download
        </Button>
      )}
    </div>
  );
}

export function DownloadPage() {
  const navigate = useNavigate();
  
  const handleChromeDownload = () => {
    const link = document.createElement("a");
    link.href = "/components/assets/build.zip";
    link.download = "build.zip";
    link.click();
    navigate("/installation");
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 opacity-20 transform rotate-45 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 opacity-20 transform -rotate-45 blur-3xl"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="title">Download Cedrum Wallet</h1>
          
          <div className="space-y-4 text-blue-200">
            <p className="text-xl">
              Choose your platform to get started with Cedrum Wallet.
            </p>
            <p className="text-lg text-blue-300">
              Secure, simple, and built for the Cedra Network.
            </p>
          </div>

          <div className="platforms-row">
            <PlatformCard 
              icon={<Chrome className="w-8 h-8" />}
              title="Chrome Extension"
              description="Add Cedrum to your Chrome browser"
              onDownload={handleChromeDownload}
            />
            <PlatformCard 
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile App"
              description="iOS & Android coming soon"
              comingSoon
            />
          </div>

          <div className="flex gap-4 justify-center flex-wrap pt-8">
            <Link to="/">
              <Button variant="outline" className="back-home-button px-8 py-6">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
