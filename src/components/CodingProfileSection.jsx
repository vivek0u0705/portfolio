import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    description: "Solving Data Structures & Algorithms challenges to improve problem-solving skills.",
    link: "https://leetcode.com/u/vivekvelugoti070705/", // Replace with actual LeetCode URL
    icon: "https://cdn.simpleicons.org/leetcode/FFA116",
    color: "text-yellow-500",
    bgFade: "bg-yellow-500/10",
  },
  {
    name: "GeeksForGeeks",
    description: "Regularly practicing Problem of the Day on GeeksforGeeks to strengthen Data Structures and Algorithms skills.",
    link: "https://www.geeksforgeeks.org/profile/vivekvelugoti", // Replace with actual GFG URL
    icon: "https://cdn.simpleicons.org/geeksforgeeks/2F8D46",
    color: "text-green-500",
    bgFade: "bg-green-500/10",
  },
  {
    name: "HackerRank",
    description: "Solving diverse coding problems on HackerRank to improve logical thinking and algorithmic problem-solving.",
    link: "https://www.hackerrank.com/profile/vivekvelugoti071", // Replace with actual HackerRank URL
    icon: "https://cdn.simpleicons.org/hackerrank/00EA64",
    color: "text-green-400",
    bgFade: "bg-green-400/10",
  },
];

export const CodingProfileSection = () => {
  return (
    <section id="coding-profile" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Coding Profiles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            return (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                className="group relative block p-8 bg-card rounded-2xl border border-secondary shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 card-hover overflow-hidden"
              >
                {/* Background Glow */}
                <div className={cn("absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity", profile.color, profile.bgFade)} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className={cn("p-3 rounded-lg bg-secondary flex items-center justify-center", profile.color)}>
                      <img src={profile.icon} alt={profile.name} className="w-8 h-8 object-contain" />
                    </div>
                    <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{profile.name}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {profile.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-primary font-medium group-hover:underline">
                    View Profile
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
