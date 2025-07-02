import { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Globe,
  Users,
  Cloud,
  Settings,
  Zap,
  Target,
  Heart,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Java", level: 85, color: "from-orange-400 to-red-500" },
        { name: "Python", level: 90, color: "from-yellow-400 to-green-500" },
      ],
    },
    {
      title: "Frontend Skills",
      icon: Globe,
      color: "from-green-500 to-blue-500",
      skills: [
        { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 92, color: "from-blue-500 to-purple-500" },
        {
          name: "JavaScript",
          level: 88,
          color: "from-yellow-400 to-orange-500",
        },
        { name: "Bootstrap", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
      ],
    },
    {
      title: "Backend Skills",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Django", level: 88, color: "from-green-600 to-teal-600" },
        {
          name: "Django REST Framework",
          level: 85,
          color: "from-green-500 to-blue-500",
        },
        { name: "Node.js", level: 82, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-800" },
      ],
    },
    {
      title: "Databases",
      icon: Target,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "MySQL", level: 88, color: "from-blue-600 to-blue-800" },
        { name: "SQLite3", level: 85, color: "from-gray-500 to-gray-700" },
        { name: "MongoDB", level: 82, color: "from-green-600 to-green-800" },
      ],
    },
    {
      title: "Tools & Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 78, color: "from-orange-400 to-orange-600" },
        { name: "Git", level: 92, color: "from-red-400 to-red-600" },
        { name: "GitHub", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "Vercel", level: 85, color: "from-gray-500 to-black" },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      skills: [
        {
          name: "Leadership",
          level: 92,
          color: "from-purple-500 to-indigo-500",
        },
        { name: "Adaptability", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Learning", level: 95, color: "from-green-500 to-teal-500" },
        { name: "Creativity", level: 88, color: "from-pink-500 to-purple-500" },
        { name: "Teamwork", level: 93, color: "from-orange-500 to-red-500" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getTotalSkills = () => {
    return skillCategories.reduce(
      (total, category) => total + category.skills.length,
      0
    );
  };

  const getAverageLevel = () => {
    const allSkills = skillCategories.flatMap((category) => category.skills);
    const totalLevel = allSkills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(totalLevel / allSkills.length);
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div
            className={`w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <p
            className={`text-xl text-gray-400 mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Technologies and expertise that power my development journey
          </p>
        </div>

        {/* Skills Overview Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Code size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {getTotalSkills()}
            </div>
            <div className="text-gray-400 text-sm">Total Skills</div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Zap size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {getAverageLevel()}%
            </div>
            <div className="text-gray-400 text-sm">Avg Proficiency</div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Heart size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">2+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Settings size={24} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">6</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${activeCategory === categoryIndex ? "lg:col-span-2" : ""}`}
              style={{ transitionDelay: `${700 + categoryIndex * 200}ms` }}
              onMouseEnter={() => setActiveCategory(categoryIndex)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  category.color
                } rounded-3xl blur-xl opacity-20 transition-opacity duration-500 ${
                  activeCategory === categoryIndex ? "opacity-40" : ""
                }`}
              />

              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      category.color
                    } rounded-2xl flex items-center justify-center transform transition-transform duration-300 ${
                      activeCategory === categoryIndex ? "scale-110" : ""
                    }`}
                  >
                    <category.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                    <div className="text-gray-400 text-sm">
                      {category.skills.length} skills
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-lg">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 300 + skillIndex * 150
                            }ms`,
                          }}
                        >
                          <div
                            className="absolute inset-0 bg-white/20"
                            style={{ animation: "shimmer 2s infinite" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Badge */}
                {activeCategory === categoryIndex && (
                  <div className="absolute top-4 right-4">
                    <div
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      style={{ animation: "float 2s ease-in-out infinite" }}
                    >
                      Featured
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-6 bg-gray-900/50 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 bg-green-400 rounded-full"
                style={{ animation: "float 1s ease-in-out infinite" }}
              />
              <span className="text-gray-300 font-medium">
                Currently Learning:
              </span>
            </div>
            <div className="flex space-x-3">
              {["Next.js", "TypeScript", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
