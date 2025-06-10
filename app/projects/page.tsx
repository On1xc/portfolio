export default function Projects() {
  const projects = [
    {
      title: "ODP Ingestion Backend Entwickler",
      startDate: "February 14th 2025",
      endDate: "September 30th 2025",
      technologies: ["Python", "Docker", "Kubernetes"]
    },
    {
      title: "Team Zeno Fullstack Entwickler",
      startDate: "August 1st 2024",
      endDate: "February 14th 2025",
      technologies: ["Java Springboot", "JavaScript", "NextJs"]
    },
    {
      title: "Team Lernendenhub Fullstack Entwickler",
      startDate: "January 1st 2024",
      endDate: "July 31st 2024",
      technologies: ["React", "Java Springboot", "MongoDB"]
    },
    {
      title: "Telco Cloud Infrastructure Dashboard Entwicklung",
      startDate: "February 27th 2023",
      endDate: "December 31st 2023",
      technologies: ["Grafana", "Prometheus"]
    },
    {
      title: "Robotic Process Automation",
      startDate: "August 22nd 2022",
      endDate: "February 5th 2023",
      technologies: ["UI Path", "Microsoft Excel"]
    },
    {
      title: "Backend Developer im Apps Team",
      startDate: "February 16th 2022",
      endDate: "August 31st 2022",
      technologies: ["NestJs", "JavaScript"]
    },
    {
      title: "Full Stack Developer im Team Hive",
      startDate: "August 15th 2021",
      endDate: "February 12th 2022",
      technologies: ["Grafana", "Prometheus"]
    }
    // Add more projects as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:border-blue-500 border transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-black">{project.title}</h2>
              
              <div className="text-sm text-gray-500 mb-4">
                <p>
                  <span className="font-medium">Start:</span> {project.startDate}
                </p>
                <p>
                  <span className="font-medium">End:</span> {project.endDate}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}