import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Twitter, Github, Linkedin, Youtube, Globe, Mail, ExternalLink } from "lucide-react"

const links = [
  {
    title: "Website",
    url: "https://example.com",
    icon: Globe,
    description: "My personal website",
  },
  {
    title: "GitHub",
    url: "https://github.com/username",
    icon: Github,
    description: "Check out my code",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: Linkedin,
    description: "Professional network",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/username",
    icon: Twitter,
    description: "Follow me for updates",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/username",
    icon: Instagram,
    description: "Behind the scenes",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@username",
    icon: Youtube,
    description: "Video content",
  },
  {
    title: "Email",
    url: "mailto:hello@example.com",
    icon: Mail,
    description: "Get in touch",
  },
]

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 py-8 px-4">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-lg">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
            <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h1>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
            Full-stack developer, content creator, and coffee enthusiast. Building amazing things on the web ✨
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Card
                key={index}
                className="transition-all duration-200 hover:scale-105 hover:shadow-lg border-0 shadow-md"
              >
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full h-auto p-4 justify-start text-left hover:bg-gray-50"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 mb-1">{link.title}</div>
                        <div className="text-sm text-gray-500 truncate">{link.description}</div>
                      </div>

                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Made with ❤️ using Vite</p>
        </div>
      </div>
    </div>
  )
}
