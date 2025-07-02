
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Numetry Technologies Pvt Ltd',
      position: 'Full Stack Developer',
      location: 'Pune (Remote)',
      duration: '01/2025 – Present',
      type: 'Full-time',
      description: 'Working on full-stack development projects using modern technologies and frameworks.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      current: true
    },
    {
      company: 'Cybrom Technology Pvt Ltd',
      position: 'Python Developer Training and Intern',
      location: 'Bhopal',
      duration: '01/2024 – 06/2024',
      type: 'Internship',
      description: 'Completed comprehensive Python development training and internship program, gaining hands-on experience in web development and software engineering practices.',
      technologies: ['Python', 'Django', 'Flask', 'PostgreSQL'],
      current: false
    },
    {
      company: 'Integration IT Services Private Limited',
      position: 'Frontend Developer',
      location: 'Bhopal',
      duration: '06/2023 – 09/2023',
      type: 'Contract',
      description: 'Developed responsive web applications and user interfaces, focusing on modern frontend technologies and user experience optimization.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10">
                  {experience.current && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {experience.position}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <Building2 className="text-purple-400" size={16} />
                          <span className="text-purple-300 font-semibold">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      {experience.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                        <span className="text-gray-600">•</span>
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                          {experience.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gray-900/50 px-8 py-4 rounded-full border border-gray-700/50">
            <span className="text-gray-300">Ready for new opportunities</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;