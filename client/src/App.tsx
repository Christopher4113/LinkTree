import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, School, NotepadText, Dumbbell, Headphones } from "lucide-react"

const links = [
  {
    title: "RateMySchools",
    url: "https://www.ratemyschools.org",
    icon: School,
  },
  {
    title: "AI Cover Letter Generator",
    url: "https://www.cover-ai.ca",
    icon: NotepadText,
  },
  {
    title: "Workout Tracker",
    url: "https://workout-tracker-2vyd.onrender.com",
    icon: Dumbbell,
  },
  {
    title: "Song and Artist to MP3",
    url: "https://song-artist-to-mp3.onrender.com",
    icon: Headphones,
  },

]

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-pink-50 p-4">
      <div className="w-full max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-lg">
            <AvatarImage src="/image.jpg" alt="User profile image" />
            <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-purple-500 to-pink-50 text-white">
              CL
            </AvatarFallback>
          </Avatar>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Christopher Lam</h1>
          
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
            Software Engineer. Building cool things for the web 
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
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 mb-1">{link.title}</div>
                      </div>
                      
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}