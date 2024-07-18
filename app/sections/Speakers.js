"use client"
import FadeIn from "../utilities/FadeIn";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Wiggle from '../utilities/Wiggle';

const speakers = [
  { episode: 'Episode 4', text: 'TBC', link: '' },
  { episode: 'Episode 3', text: 'King Tides', link: '' },
  { episode: 'Episode 2', text: 'Claudia Kate', link: 'https://open.spotify.com/episode/3hQnBrRYHMO8aY0cy8KYCj?si=6b9e3f915d16424a' },
  { episode: 'Episode 1', text: 'Michael Sebastian', link: 'https://open.spotify.com/episode/1FEhy5RQbkxnd6bfuE75EL?si=67ae94381ed04524' }
];

export default function Speakers({ setSpeakersInView }) {
  const { ref, inView } = useInView({
    threshold: 0.5,  // Trigger when 50% of the element is in view
    triggerOnce: false
  });

  useEffect(() => {
    setSpeakersInView(inView);
  }, [inView, setSpeakersInView]);

  return (
    <FadeIn className="">
      <section id="speakers" className="mb-52 xl:py-52 xl:px-32 xl:space-x-12 xl:flex justify-center items-center" ref={ref}>

        {/* Text Section */}
        <div className="px-12 xl:w-1/2 xl:pr-10 space-y-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Speakers</h1>
          <p className="body-poppins text-lg mb-4">
            {`Here at MMN we’ve curated an inspiring selection of knowledgeable music makers, brought to you in our fun and informative podcasts. In each episode we dive into our speakers’ personal journeys and creative processes, revealing insights that encompass everything from how to get ahead in the music industry to the technical intricacies of engineering that truly make a difference. Come and spend time with the people shaping their worlds through sound.`}
          </p>
          <button className="text-center px-4 py-2 text-red border-2 border-red hover:text-white hover:bg-red">
            View all speakers
            <div className="text-xs">COMING SOON</div>
          </button>
        </div>
        
        {/* Speaker Images Grid */}
        <div className="hidden xl:block xl:w-1/3">
          <div className="grid grid-cols-2 gap-4">
            {speakers.map((speaker, i) => (
              <Wiggle key={i} className="flex flex-col items-center">
                {speaker.link ? (
                  <a href={speaker.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:cursor-pointer">
                    <img src={`/images/speaker 2.webp`} alt={`Speaker ${i + 1}`} className="w-36 h-36 mb-1" />
                    <span className="text-sm text-gray-500">{speaker.episode}</span>
                    <span className="hidden xl:block text-sm text-gray-500">{speaker.text}</span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center cursor-default">
                    <img src={`/images/speaker 2.webp`} alt={`Speaker ${i + 1}`} className="w-36 h-36 mb-1" />
                    <span className="text-sm text-gray-500">{speaker.episode}</span>
                    <span className="hidden xl:block text-sm text-gray-500">{speaker.text}</span>
                  </div>
                )}
              </Wiggle>
            ))}
          </div>
        </div>

      </section>      
    </FadeIn>
  );
};
