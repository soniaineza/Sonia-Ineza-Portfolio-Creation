import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
export function Education() {
  return <section id="education" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-indigo-600 after:border-2 after:box-content after:border-indigo-600 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                Current
              </time>
              <div className="text-xl font-bold text-slate-900">
                Level 5 TVET Certificate in Software Development
              </div>
            </div>
            <div className="text-slate-800">
              École Secondaire Technique de Gisenyi
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-indigo-600 flex items-center">
                <BookOpen size={18} className="mr-2" />
                Notable Units
              </h4>
              <ul className="mt-2 space-y-2">
                {['GENPP501 - Python Programming', 'SWDND501 - NoSQL Database Development', 'SWDOT501 - DevOps Application', 'GENQA501 - Quality Assurance Application', 'PHYMP401 - Mechanics & Properties of Matter', 'SWDVF301 - Game Development (Vue.js)', 'Advanced Mathematics (Complex Numbers, Taylor Series, Statistics, etc.)'].map((unit, index) => <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{unit}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-slate-400 after:border-2 after:box-content after:border-slate-400 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-600 bg-slate-200 rounded-full">
                Past
              </time>
              <div className="text-xl font-bold text-slate-900">
                Wisdom High School
              </div>
            </div>
            <div className="text-slate-800">Senior 1 – Senior 3</div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-slate-400 after:border-2 after:box-content after:border-slate-400 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-slate-600 bg-slate-200 rounded-full">
                2018
              </time>
              <div className="text-xl font-bold text-slate-900">
                LaPromise School
              </div>
            </div>
            <div className="text-slate-800">Nursery 1 – Primary 6</div>
          </div>
        </div>
      </div>
    </section>;
}