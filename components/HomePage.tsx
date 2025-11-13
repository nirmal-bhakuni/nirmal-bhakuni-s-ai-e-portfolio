import React, { useState } from 'react';
import { LINKEDIN_URL, GITHUB_URL } from '../constants';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const HomePage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [formMessageType, setFormMessageType] = useState<'success' | 'error' | ''>('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(''); // Reset status on new submission attempt
    setFormMessageType('');

    if (!name || !email || !message) {
      setFormStatus('Please fill out all fields.');
      setFormMessageType('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus('Please enter a valid email address.');
      setFormMessageType('error');
      return;
    }

    const newMessage = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      existingMessages.push(newMessage);
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
      
      setFormStatus('Message sent successfully! Thank you for reaching out.');
      setFormMessageType('success');
      setName('');
      setEmail('');
      setMessage('');
      
      setTimeout(() => {
        setFormStatus('');
        setFormMessageType('');
      }, 5000);

    } catch (error) {
      console.error("Failed to save message:", error);
      setFormStatus('An error occurred. Please try again later.');
      setFormMessageType('error');
    }
  };

  return (
    <>
      <section className="text-center flex flex-col items-center justify-center min-h-[70vh] pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            Nirmal Bhakuni
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-8">
            Software Engineer specializing in AI & Cybersecurity
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Aspiring to build innovative solutions that solve real-world problems. With a foundation in software engineering and a passion for artificial intelligence, I'm on a journey to create impactful technology, whether as a key team member or a future tech founder.
          </p>
          <div className="flex justify-center space-x-6">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <LinkedinIcon className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <GithubIcon className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Contact Me</h2>
          <p className="text-lg text-slate-400 mb-10">Have a question or want to collaborate? I'd love to hear from you.</p>
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Name"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@example.com"
                aria-required="true"
                aria-invalid={formMessageType === 'error' && formStatus.includes('email')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your message..."
                aria-required="true"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 disabled:bg-slate-600 disabled:opacity-50"
                disabled={!name || !email || !message}
              >
                Send Message
              </button>
            </div>
            {formStatus && (
              <p className={`mt-4 text-center text-sm font-medium ${
                  formMessageType === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
              role="alert">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;