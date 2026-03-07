import { Button } from "./ui/button";
import { ArrowLeft, FileArchive, Settings, ToggleLeft, FolderOpen, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import "./Installation.css";

import step2Image from "../images/Instruction Step 2.png";
import step3Image from "../images/Instruction Step 3.png";
import step4Image from "../images/Instruction Step 4.png";

const steps = [
  {
    icon: FileArchive,
    title: "Unzip the file",
    description: "Extract the downloaded ZIP file to a folder on your computer.",
    showPlaceholder: false
  },
  {
    icon: Settings,
    title: "Open Extensions",
    description: "In Chrome, go to chrome://extensions/",
    showPlaceholder: false
  },
  {
    icon: ToggleLeft,
    title: "Enable Developer Mode",
    description: "Toggle the developer mode switch in the top right corner.",
    showPlaceholder: false
  },
  {
    icon: FolderOpen,
    title: "Load Unpacked",
    description: "Click 'Load Unpacked' and select the extracted build folder.",
    showPlaceholder: false
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Launch Cedrum Wallet from your Chrome extensions!",
    showPlaceholder: false
  }
];

export function InstallationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 opacity-20 transform rotate-45 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 opacity-20 transform -rotate-45 blur-3xl"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto text-center space-y-8 w-full">
          <h1 className="title">Installation Guide</h1>
          
          <div className="space-y-4 text-blue-200">
            <p className="text-xl">
              Follow these steps to install Cedrum Wallet on Chrome.
            </p>
          </div>

          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className={`step-card ${!step.image ? 'step-card-small' : ''}`}>
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {step.showPlaceholder && step.image && (
                  <img src={step.image} alt={step.title} className="step-image" />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap pt-8">
            <Link to="/download">
              <Button variant="outline" className="back-button px-8 py-6">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Download
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
