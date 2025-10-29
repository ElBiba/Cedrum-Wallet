import { Shield, Users, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Built with industry-leading security protocols to keep your assets safe and protected."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Developed with input from the Cedra community, ensuring it meets real user needs."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant transactions with optimized performance on the Cedra Network."
  },
  {
    icon: Lock,
    title: "Full Control",
    description: "You own your keys, you own your crypto. Complete control over your digital assets."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 mb-4">About Us</h2>
          <p className="text-blue-200 text-xl max-w-3xl mx-auto">
            Cedrum is more than just a cryptocurrency wallet. We're building the future of digital finance on the Cedra Network, 
            combining cutting-edge technology with user-friendly design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border-blue-800/30 backdrop-blur-sm hover:border-blue-600/50 transition-all"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-blue-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-blue-200 text-lg leading-relaxed">
            Our mission is to provide a seamless, secure, and intuitive experience for managing your digital assets. 
            Whether you're a seasoned crypto enthusiast or just getting started, Cedrum offers the tools and features 
            you need to navigate the world of decentralized finance with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
