import { useState } from "react";
import { Heading } from "./components/heading";

const animations = ["slideUp", "pop", "fade", "bubble", "expand"] as const;

const HeadingDemo = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const rerunAnimation = () => {
    setAnimateKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-10 p-6">
      {animations.map((animation) => (
        <div
          key={`${animation}-${animateKey}`}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wide">
            Animation: {animation}
          </p>
          <Heading
            key={`${animation}-${animateKey}`}
            size="xl"
            align="center"
            animation={animation}
            className={
              animation === "bubble" ? "text-pink-600" : "text-blue-600"
            }
          >
            Welcome to My App
          </Heading>
        </div>
      ))}
      <button
        onClick={rerunAnimation}
        className="mt-6 rounded-xl bg-black px-6 py-2 text-white hover:bg-gray-800 transition"
      >
        Re-run Animations
      </button>
    </div>
  );
};

export default HeadingDemo;
