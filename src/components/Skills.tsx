import React from 'react';

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Tailwind CSS", "SCSS"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Firebase", "Webpack", "Jest", "Responsive Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-portfolio-secondary rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 pb-3 border-b border-gray-200">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-portfolio-primary bg-opacity-5 rounded-lg p-8 border border-portfolio-primary border-opacity-20">
          <h3 className="text-xl font-semibold mb-4 text-center">Professional Proficiency</h3>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { skill: "Problem Solving", percentage: 65 },
              { skill: "Communication", percentage: 60 },
              { skill: "Teamwork", percentage: 90 },
              { skill: "Time Management", percentage: 80 },
              { skill: "Adaptability", percentage: 95 }
            ].map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-portfolio-primary h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
