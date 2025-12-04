import React from 'react';
import { Scale, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <Scale className="w-6 h-6 text-gray-400" />
                <span className="text-xl font-bold text-white">LegalLawAdvisor</span>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed">
               Empowering Indian legal professionals with sovereign, secure, and scalable AI infrastructure.
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-primary cursor-pointer">Features</li>
              <li className="hover:text-primary cursor-pointer">Security</li>
              <li className="hover:text-primary cursor-pointer">Enterprise</li>
              <li className="hover:text-primary cursor-pointer">Changelog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Legal</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Compliance</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer">Terms of Service</li>
              <li className="hover:text-primary cursor-pointer">DPDP Act</li>
              <li className="hover:text-primary cursor-pointer">Data Processing</li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2025 LegalLawAdvisor. All rights reserved. Built with Desi Soul.
          </p>
          <div className="flex gap-6">
            <Github className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
