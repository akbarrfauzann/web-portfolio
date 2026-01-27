import { useState } from "react";

export const StarBackground = () => {
  const [stars] = useState(() => {
    if (typeof window === "undefined") return [];

    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    return Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));
  });

  const [meteors] = useState(() => {
    if (typeof window === "undefined") return [];

    const numberOfMeteors = 4;

    return Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 3 + 3,
    }));
  });
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            opacity: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
