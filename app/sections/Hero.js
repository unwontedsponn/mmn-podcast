import FadeIn from "../utilities/FadeIn";

export default function Hero () {
  return (
    <div id="hero" className="relative text-white h-screen overflow-hidden">

      {/* /**
      * Small Screen
      */
      /*------------------------------------------------------------------------------------------------------*/ }
      <div className="md:hidden">
        <video autoPlay muted loop playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
          <source src="/videos/microphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Positioned Text Container */}   
          <FadeIn className="absolute z-10 left-0 top-0 px-10 h-full flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">Music Maker Network</h1>
            <p className="text-xl mb-6 tracking-wider2">LONDON, UK</p>
            <p className="max-w-lg text-lg mb-6 body-poppins tracking-wide">
              If you are looking to learn more about the ‘behind the scenes’ of music, you’ve come to the right place.
            </p>
            <a 
              href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363" 
              className="text-white px-4 py-2 border-2 hover:bg-red hover:border-red text-center inline-block w-auto" 
              target="_blank" 
              rel="noopener noreferrer">
                LISTEN TO EPISODES
            </a>
          </FadeIn>        
      </div>

      {/* /**
      * Large Screen
      */
      /*------------------------------------------------------------------------------------------------------*/ }
      <div className="hidden md:block">
        <video autoPlay muted loop playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
          <source src="/videos/microphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Positioned Text Container */}
        <FadeIn className="absolute z-10 left-0 top-0 w-2/5 h-full px-4 sm:px-6 lg:px-32 flex flex-col justify-center bg-black">
          <h1 className="text-5xl font-bold mb-4">Music Maker Network</h1>
          <p className="text-xl mb-6 tracking-wider2">LONDON, UK</p>
          <p className="max-w-lg text-lg mb-6 body-poppins tracking-wide">
            If you are looking to learn more about the ‘behind the scenes’ of music, you’ve come to the right place.
          </p>
          <a 
            href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363" 
            className="text-white px-4 py-2 border-2 hover:bg-red hover:border-red text-center inline-block w-auto" 
            target="_blank" 
            rel="noopener noreferrer">
              LISTEN TO EPISODES
          </a>
        </FadeIn>  
      </div>
    </div>
  );
};