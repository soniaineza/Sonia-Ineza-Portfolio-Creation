import React from 'react';
import { MapPin, Globe, Calendar } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate and creative software developer specializing in
              web and mobile development. I have strong skills in JavaScript,
              Flutter, and smart city solutions, with experience in UI/UX
              design, custom styling, and interactive web components.
            </p>
            <p className="text-gray-700 mb-6">
              I also explore AI and image processing, particularly in
              translating text from images. I'm focused on building impactful
              real-world solutions and dream of creating platforms where
              developers can be discovered by big companies.
            </p>
            <p className="text-gray-700">
              I'm curious, innovative, and always learning. I believe in faith,
              hard work, and God's timing.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium">Age</p>
                    <p className="text-gray-600">17</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe size={20} className="text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium">Nationality</p>
                    <p className="text-gray-600">Rwandan</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-medium mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      English
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      Kinyarwanda
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      French
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-medium mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Building tech solutions
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      AI & automation
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Education technology
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Working abroad
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Personal development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}