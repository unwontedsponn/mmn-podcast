"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import FadeIn from '../utilities/FadeIn';

export default function Header( {aboutInView, speakersInView, contactInView} ) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change the background if scrolled over 50px
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FadeIn className={`${isScrolled ? 'bg-snow' : 'bg-transparent'} fixed top-0 w-full z-20 transition-colors duration-300 ease-in-out`}>
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-600">
          <Link href="/#hero">
            <img src="https://uploads-ssl.webflow.com/63762c3e064651b696e64ed1/63c6de9a40bc654a546f167a_mmn-4.svg" alt="MMN Logo" style={{ height: '30px' }} />
          </Link>
        </div>
        {/* Navigation Section */}
        <nav>
          <ul className="flex items-center space-x-4">
            <li><Link href="/#about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} ${aboutInView ? 'bg-red' : ''} hidden p-2 md:block hover:text-gray-900 hover:bg-red`}>About</Link></li>
            <li><Link href="/#speakers" className={`${isScrolled ? 'text-gray-600' : 'text-white'} ${speakersInView ? 'bg-red' : ''} hidden p-2 md:block hover:text-gray-900 hover:bg-red`}>Speakers</Link></li>
            <li><Link href="/#contact" className={`${isScrolled ? 'text-gray-600' : 'text-white'} ${contactInView ? 'bg-red' : ''} hidden p-2 md:block hover:text-gray-900 hover:bg-red`}>Contact</Link></li>
            <li>
              {/* Buy Tickets Button */}
              <a href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363" className="hidden sm:block bg-red md:bg-black md:border-2 md:border-black text-white px-6 py-2 hover:bg-red hover:border-red" target="_blank" rel="noopener noreferrer">LISTEN TO EPISODES</a>
            </li>
          </ul>
        </nav>
      </div>
    </FadeIn>
  );
}
