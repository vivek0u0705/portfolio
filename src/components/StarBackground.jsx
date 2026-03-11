import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 7000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
        animationDuration: Math.random() * 4 + 3,
        color: ["#ffffff", "#a6c8ff", "#ffd1dc"][
          Math.floor(Math.random() * 3)
        ],
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 12,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-black dark:via-slate-900 dark:to-black transition-colors duration-300">
      
      {/* Wrapper to invert all stars/nebula colors in Light Mode so they show up dark against the white background */}
      <div className="absolute inset-0 transition-[filter] duration-300 invert dark:invert-0">
        
        {/* Nebula Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,100,150,0.12),transparent_60%)]"></div>

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              backgroundColor: star.color,
              animationDuration: star.animationDuration + "s",
              boxShadow: `0 0 6px ${star.color}`,
            }}
          />
        ))}

        {/* Meteors */}
        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="absolute animate-meteor"
            style={{
              width: meteor.size * 90 + "px",
              height: meteor.size * 2 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
              background: "linear-gradient(90deg, white, transparent)",
              borderRadius: "999px",
            }}
          />
        ))}
      </div>
    </div>
  );
};