export default function About() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">About Me</h1>
      <div className="mt-4 flex flex-col sm:flex-row gap-8 items-center">
        {/* Profile Picture */}
        <img
          src="/collin.jpeg"
          alt="Collin Weber"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />
        {/* About Text */}
        <p className="text-lg">
          Hi, I'm Collin Weber. I'm a passionate developer with a background in
          building modern web applications. I enjoy solving problems and
          creating user-friendly experiences.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">My Skills</h2>
        <div className="mt-4 space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}