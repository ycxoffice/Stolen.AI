import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Brain,
  Cpu,
  Waves,
  BarChart3,
  Lightbulb,
  Rocket,
  Sparkles,
  Circle,
} from "lucide-react";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const circleSizeMultiplier = windowWidth < 768 ? 120 : 200;

  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-50 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div
          style={{
            background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 50%)`,
          }}
          className="absolute inset-0 transition-all duration-300"
        />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        {/* Cyberpunk Circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-cyan-500/20"
              style={{
                width: `${(i + 1) * circleSizeMultiplier}px`,
                height: `${(i + 1) * circleSizeMultiplier}px`,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  scrollY * (i + 1) * 0.1
                }deg)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8 md:space-y-16">
          {/* Main Title */}
          <div className="space-y-4 md:space-y-8">
            <div className="inline-block mb-4 md:mb-6 animate-float">
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm backdrop-blur-sm">
                Powered by Advanced AI Technology
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text-flow">
                Pitchdeck.ai
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 -z-10" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-300/80 max-w-3xl mx-auto font-light px-4 sm:px-0">
              The Next Generation AI Platform for Startup Intelligence and
              Growth Analytics
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {[
              {
                icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
                title: "AI Analysis",
                desc: "Deep learning powered insights",
              },
              {
                icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Real-time Processing",
                desc: "Live market intelligence",
              },
              {
                icon: <Waves className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Predictive Metrics",
                desc: "Future growth forecasting",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-4 md:p-6 rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 to-purple-950/50 backdrop-blur-xl border border-cyan-500/20" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                <div className="relative z-10 flex flex-col items-center gap-2 md:gap-4 text-center">
                  <div className="text-cyan-400 p-2 md:p-3 rounded-lg md:rounded-xl bg-cyan-950/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-cyan-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-cyan-300/70">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 md:gap-6">
            <button className="group relative px-6 py-3 md:px-8 md:py-4 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <span className="relative z-10 flex items-center text-base md:text-xl font-semibold">
                Explore Platform
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section with Cyber Theme */}
      <div className="relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                value: "50K+",
                label: "Startups Analyzed",
                icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />,
              },
              {
                value: "$100B+",
                label: "Funding Tracked",
                icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
              },
              {
                value: "99.9%",
                label: "AI Accuracy",
                icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
              },
              {
                value: "24/7",
                label: "Real-time Updates",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group p-4 md:p-6 rounded-lg md:rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 to-purple-950/30 backdrop-blur-sm border border-cyan-500/10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
                <div className="relative z-10 text-center">
                  <div className="text-cyan-400 flex justify-center mb-2 md:mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 md:mt-2 text-xs md:text-sm lg:text-base text-cyan-300/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(windowWidth < 768 ? 10 : 20)].map((_, i) => (
          <Circle
            key={i}
            className="absolute text-cyan-500/10 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              width: windowWidth < 768 ? "16px" : "24px",
              height: windowWidth < 768 ? "16px" : "24px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = `
  @keyframes text-flow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .animate-text-flow {
    animation: text-flow 5s linear infinite;
    background-size: 200% auto;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @media (min-width: 768px) {
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  }
`;

export default LandingPage;
