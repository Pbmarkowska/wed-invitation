'use client';

import { useState, useEffect } from 'react';
import { ptSerif, meowScript } from '../utils/fonts';
import { cn } from '../utils/common';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Początek' },
    { id: 'date', label: 'Kiedy?' },
    { id: 'ceremony', label: 'Gdzie?' },
    { id: 'what-will-be', label: 'Co będzie' },
    { id: 'what-wont-be', label: 'Czego nie będzie' },
    { id: 'rsvp', label: 'RSVP - potwierdź' },
    { id: 'gifts', label: 'Gifty' },
    { id: 'thank-you', label: 'Dziękujemy' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar (Left) */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              ptSerif.className,
              'transition-all duration-300 text-sm uppercase tracking-widest text-left whitespace-nowrap relative pb-1',
              activeSection === section.id
                ? 'text-weddingRedDark font-bold'
                : 'text-gray-600 hover:text-weddingRedDark'
            )}
          >
            {section.label}
            <span
              className={cn(
                'absolute bottom-0 left-0 h-0.5 bg-weddingRedDark transition-all duration-300',
                activeSection === section.id ? 'w-full' : 'w-0'
              )}
            />
          </button>
        ))}
      </nav>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-[60] p-3 bg-weddingCream/80 backdrop-blur-sm rounded-full shadow-sm border border-weddingRed/20"
      >
        <div className="w-6 h-6 relative flex items-center justify-center">
          <span
            className={cn(
              'absolute w-full h-0.5 bg-weddingRedDark transition-all duration-300',
              isOpen ? 'rotate-45' : '-translate-y-2'
            )}
          />
          <span
            className={cn(
              'absolute w-full h-0.5 bg-weddingRedDark transition-all duration-300',
              isOpen ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={cn(
              'absolute w-full h-0.5 bg-weddingRedDark transition-all duration-300',
              isOpen ? '-rotate-45' : 'translate-y-2'
            )}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-weddingCream/98 z-[50] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col gap-8 items-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                ptSerif.className,
                'text-4xl transition-colors relative pb-2',
                activeSection === section.id
                  ? 'text-weddingRedDark'
                  : 'text-gray-700'
              )}
            >
              {section.label}
              <span
                className={cn(
                  'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-weddingRedDark transition-all duration-300',
                  activeSection === section.id ? 'w-full' : 'w-0'
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
