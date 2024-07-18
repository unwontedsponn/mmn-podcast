import { FaSpotify, FaYoutube, FaTiktok } from 'react-icons/fa';
import FadeIn from '../utilities/FadeIn';

export default function Footer () {
  return (
    <footer className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Copyright */}
        <div>
          <img src="https://uploads-ssl.webflow.com/63762c3e064651b696e64ed1/63c6de9a40bc654a546f167a_mmn-4.svg" alt="MMN Logo" style={{ height: '30px' }} />
        </div>

        <p className="hidden sm:block text-sm">© Copyright MMN 2023</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363&nd=1&dlsi=0a4ed540f5314257" target="_blank" className="hover:text-gray-400" aria-label="Spotify">
            <FaSpotify size={24} />
          </a>
          {/* Youtube and Tiktok Icons are hidden */}
          {/* <a href="https://youtube.com" className="hover:text-gray-400" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
          <a href="https://tiktok.com" className="hover:text-gray-400" aria-label="TikTok">
            <FaTiktok size={24} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};
