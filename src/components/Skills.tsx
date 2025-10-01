import React from 'react';
import { Code, Smartphone, Server, Database, Palette } from 'lucide-react';
export function Skills() {
  const skillCategories = [{
    title: 'Programming Languages',
    icon: <Code size={24} className="text-indigo-600" />,
    skills: ['JavaScript', 'Python', 'Dart (Flutter)']
  }, {
    title: 'Web Development',
    icon: <Code size={24} className="text-indigo-600" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
  }, {
    title: 'Mobile Development',
    icon: <Smartphone size={24} className="text-indigo-600" />,
    skills: ['Flutter']
  }, {
    title: 'Backend',
    icon: <Server size={24} className="text-indigo-600" />,
    skills: ['Python (SQLite)', 'NoSQL']
  }, {
    title: 'Databases',
    icon: <Database size={24} className="text-indigo-600" />,
    skills: ['SQLite', 'NoSQL']
  }, {
    title: 'DevOps & QA',
    icon: <div size={24} className="text-indigo-600" />,
    skills: ['CI/CD', 'Software Testing', 'Quality Assurance']
  }, {
    title: 'Tools',
    icon: <div size={24} className="text-indigo-600" />,
    skills: ['IDX', 'VS Code', 'GitHub']
  }, {
    title: 'Other',
    icon: <Palette size={24} className="text-indigo-600" />,
    skills: ['UI/UX Design', 'Smart City Solutions', 'Algorithm Design', 'Problem Solving']
  }];
  return <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
}