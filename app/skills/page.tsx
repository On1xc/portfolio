"use client";

import { useState, useEffect } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skills = [
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
    { name: "Java", level: 80, color: "from-purple-400 to-purple-600" },
    { name: "HTML & CSS", level: 70, color: "from-red-400 to-red-600" },
    { name: "Python", level: 70, color: "from-green-400 to-green-600" },
    { name: "React", level: 50, color: "from-cyan-400 to-cyan-600" },

];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-8">
      <div className="mt-4 space-y-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
            <span className="text-lg font-bold tracking-wider">{skill.name}</span>
          </div>
            <div className="w-full bg-gray-200 rounded-full h-5 relative overflow-hidden shadow-inner">
              <div
                className={`bg-gradient-to-r ${skill.color} h-5 rounded-full transition-all duration-1000 ease-out relative`}
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}