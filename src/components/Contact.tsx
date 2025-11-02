import { Mail, MessageCircle, Twitter, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const socialLinks = [
  {
    name: "Twitter/X",
    handle: "@Cedrum_Wallet",
    icon: Twitter,
    link: "https://twitter.com/Cedrum_Wallet",
    color: "hover:bg-blue-600"
  },
  {
    name: "Discord",
    handle: "discord.gg/QjtnsrhTM",
    icon: MessageCircle,
    link: "https://discord.gg/QjtnsrhTM",
    color: "hover:bg-indigo-600"
  },
  {
    name: "Telegram",
    handle: "@CedrumWallet",
    icon: Send,
    link: "https://t.me/CedrumWallet",
    color: "hover:bg-blue-500"
  },
  {
    name: "Email",
    handle: "poluluartem8@gmail.com",
    icon: Mail,
    color: "hover:bg-purple-600"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0f0f2e] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 mb-4" style={{fontSize: 30}}>Get in Touch</h2>
          <p className="text-blue-200 text-xl max-w-3xl mx-auto">
            Join our community and stay updated with the latest news, features, and developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-blue-950/50 to-indigo-950/50 border-blue-800/30 backdrop-blur-sm hover:border-blue-600/50 transition-all group"
            >
              <CardContent className="p-6">
                <a 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center"
                >
                  <div className={`w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors ${social.color}`}>
                    <social.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white mb-2">{social.name}</h3>
                  <p className="text-blue-300 text-sm break-all">{social.handle}</p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border-blue-800/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-white mb-4" style={{fontSize: 20}}>Stay Updated</h3>
              <p className="text-blue-300 mb-6">
                Follow us on social media to get the latest updates, announcements, and community events.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
