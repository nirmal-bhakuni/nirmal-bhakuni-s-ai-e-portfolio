import React, { useState } from 'react';
import { Page } from '../types';
import { MenuIcon, CloseIcon } from './icons/UiIcons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  onNavigate?: () => void;
  className?: string;
}> = ({ page, currentPage, setCurrentPage, children, onNavigate, className }) => {
  const isActive = currentPage === page;
  
  const handleClick = () => {
    setCurrentPage(page);
    onNavigate?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-colors duration-300 ${
        isActive
          ? 'bg-cyan-500 text-white'
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      } ${className}`}
    >
      {children}
    </button>
  );
};

const NAV_ITEMS: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Me' },
    { page: 'projects', label: 'Projects' },
    { page: 'achievements', label: 'Achievements' },
    { page: 'takeaways', label: 'PESE Takeaways' },
    { page: 'skills', label: 'Skills' },
    { page: 'assignments', label: 'Assignments' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur-md">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 border-b border-slate-700">
            <div className="flex items-center">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  isSidebarOpen && setIsSidebarOpen(false);
                }}
                className="flex-shrink-0 text-white text-xl font-bold tracking-tighter"
              >
                Nirmal<span className="text-cyan-400">.dev</span>
              </button>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAV_ITEMS.map(item => (
                  <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage} className="px-3 py-2 rounded-md text-sm font-medium">
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button onClick={() => setIsSidebarOpen(true)} className="text-slate-300 hover:text-white p-2" aria-label="Open menu">
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar Overlay and Panel */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Sidebar Panel */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b border-slate-700">
            <h2 className="font-bold text-white">Navigation</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-white" aria-label="Close menu">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2">
            {NAV_ITEMS.map(item => (
              <NavLink 
                key={item.page} 
                page={item.page} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                onNavigate={() => setIsSidebarOpen(false)}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;