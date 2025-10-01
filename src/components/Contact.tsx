import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={20} className="text-indigo-600 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:inezasonia124@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    inezasonia124@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-indigo-600 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+250794715042" className="text-gray-600 hover:text-indigo-600 transition-colors">
                    +250 794 715 042
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-indigo-600 mr-4" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-medium mb-3">Find me on</p>
              <div className="flex space-x-4">
                <a href="https://github.com/soniaineza" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="GitHub profile">
                  <div size={20} />
                </a>
                <a href="https://linkedin.com/in/soniaineza" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="LinkedIn profile">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="your.email@example.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}