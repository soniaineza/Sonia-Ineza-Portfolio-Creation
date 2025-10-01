import React from 'react';
import { ExternalLink, Smartphone, ShoppingBag, School, Gamepad2 } from 'lucide-react';
export function Projects() {
  const projects = [{
    name: 'Triple Trade App',
    description: 'Mobile application built with Flutter for trading services',
    icon: <Smartphone size={24} className="text-indigo-600" />,
    tags: ['Flutter', 'Mobile Development']
  }, {
    name: 'Berwa Shop',
    description: 'E-commerce platform using Laravel',
    icon: <ShoppingBag size={24} className="text-indigo-600" />,
    tags: ['Laravel', 'E-commerce']
  }, {
    name: 'Nursery School Management System',
    description: 'Clean dashboard system using Python and SQLite',
    icon: <School size={24} className="text-indigo-600" />,
    tags: ['Python', 'SQLite', 'Dashboard']
  }, {
    name: 'Smart City Solution',
    description: 'Concept project for sustainable city innovation',
    icon: <div size={24} className="text-indigo-600" />,
    tags: ['Smart City', 'Innovation']
  }, {
    name: 'Vue.js Game',
    description: 'Game developed as part of SWDVF301 unit',
    icon: <Gamepad2 size={24} className="text-indigo-600" />,
    tags: ['Vue.js', 'Game Development']
  }];
  return <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-2">{project.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>)}
                </div>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  View Details
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}