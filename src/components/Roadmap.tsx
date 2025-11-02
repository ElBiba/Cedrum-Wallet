import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q4 2025",
    title: "Foundation",
    status: "completed",
    items: [
      "Building the Cedrum community",
      "Attracting early users and interest",
      "Developing the demo version of the extension",
      "Designing the Cedrum interface"
    ]
  },
  {
    quarter: "Q1 2026",
    title: "Technical Infrastructure (Chrome Extension)",
    status: "upcoming",
    items: [
      "Building wallet backend",
      "Developing integration architecture with Cedra Blockchain",
      "Implementing core features: account creation, key storage, transaction signing",
      "Setting up internal testing environment"
    ]
  },
  {
    quarter: "Q2 2026",
    title: "Cedrum Extension Beta",
    status: "upcoming",
    items: [
      "Launch of closed beta testing",
      "Testing interaction with Cedra Blockchain",
      "UX/UI optimization",
      "Preparing for public release"
    ]
  },
  {
    quarter: "Q3 2026",
    title: "Public Release of Cedrum Extension",
    status: "upcoming",
    items: [
      "Launch of Cedrum in Chrome Web Store",
      "Full integration with Cedra Blockchain",
      "Security audit",
      "Launch of marketing campaign"
    ]
  },
  {
    quarter: "Q4 2026",
    title: "Optimization and Monetization",
    status: "upcoming",
    items: [
      "Performance and stability optimization",
      "Implementing profitability mechanisms (fees, partnerships, Cedra rewards)",
      "Expanding features (dApp integrations, transaction history, cache)",
      "Scaling user base"
    ]
  },
  {
    quarter: "Q1 2027",
    title: "Preparation for Mobile Platforms",
    status: "upcoming",
    items: [
      "Market analysis and mobile app architecture planning",
      "Preparing UI/UX for iOS and Android",
      "Developing Cedrum Mobile prototypes",
      "Scheduling launch after stable profit from Chrome version"
    ]
  }
];

function getStatusIcon(status: string) {
  if (status === "completed") {
    return <CheckCircle2 className="w-8 h-8 text-green-400" />;
  } else if (status === "current") {
    return <Clock className="w-8 h-8 text-blue-400" />;
  } else {
    return <Circle className="w-8 h-8 text-blue-600" />;
  }
}

function getStatusColor(status: string) {
  if (status === "completed") return "border-green-600/50";
  if (status === "current") return "border-blue-600";
  return "border-blue-800/30";
}

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 opacity-5 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 mb-4" style={{fontSize: 30}}>Roadmap</h2>
          <p className="text-blue-200 text-xl max-w-3xl mx-auto">
            Our journey to revolutionize cryptocurrency wallets. Follow our progress as we build the future together.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-blue-600 to-blue-800/30"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <div className={`w-16 h-16 rounded-full border-4 ${getStatusColor(item.status)} bg-[#0a0a1a] flex items-center justify-center`}>
                    {getStatusIcon(item.status)}
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border ${getStatusColor(item.status)} rounded-lg p-6 backdrop-blur-sm`}>
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      {getStatusIcon(item.status)}
                      <span className="text-blue-400 uppercase tracking-wider">{item.quarter}</span>
                    </div>
                    <span className="hidden lg:inline-block text-blue-400 uppercase tracking-wider mb-3">{item.quarter}</span>
                    <h3 className="text-white mb-4">{item.title}</h3>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-blue-300 flex items-start gap-2">
                          <span className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}>•</span>
                          <span className="flex-1">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
