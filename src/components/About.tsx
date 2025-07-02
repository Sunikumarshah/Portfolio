import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Globe, Zap, Users, Target, Award, Rocket } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const expertise = [
    {
      icon: Code2,
      title: 'MERN Stack',
      description: 'MongoDB, Express, React, Node.js - Building full-stack applications with modern JavaScript ecosystem.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Database,
      title: 'Python & Django',
      description: 'Developing robust backend systems and APIs with Python and Django framework.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Creating secure, scalable web solutions with focus on performance and user experience.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and delivering projects across IT services and event management.',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const achievements = [
    { icon: Rocket, label: 'Projects Delivered', value: '15+' },
    { icon: Award, label: 'Technologies Mastered', value: '10+' },
    { icon: Target, label: 'Client Satisfaction', value: '100%' },
    { icon: Zap, label: 'Years Experience', value: '2+' }
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
      setActiveCard((prev) => (prev + 1) % expertise.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-3xl" style={{ animation: 'spin 20s linear infinite' }} />
              <div className="absolute inset-2 bg-gray-900 rounded-3xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                  SS
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <Code2 className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}>
                <Database className="text-white" size={24} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <achievement.icon className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{achievement.value}</div>
                      <div className="text-gray-400 text-sm">{achievement.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Passionate Full Stack Developer
                <span className="block text-xl text-purple-400 mt-2">Building the Future, One Line at a Time</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p className="relative">
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400 rounded-full" />
                  A passionate Full Stack Developer with experience in <span className="text-yellow-400 font-semibold">Python (Django)</span> and <span className="text-green-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js).
                </p>
                
                <p className="relative">
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-teal-400 rounded-full" />
                  Skilled in building <span className="text-purple-400 font-semibold">secure, scalable web applications</span> with a focus on performance and user experience.
                </p>
                
                <p className="relative">
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-pink-400 rounded-full" />
                  Proven ability to <span className="text-blue-400 font-semibold">lead teams</span> and deliver projects across industries like IT services and event management.
                </p>
                
                <p className="relative">
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-400 rounded-full" />
                  Currently working as a <span className="text-green-400 font-semibold">MERN Full Stack Developer</span>, seeking a dynamic role to apply my technical expertise and deliver impactful solutions.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                View My Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            My <span className="text-purple-400">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeCard === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;