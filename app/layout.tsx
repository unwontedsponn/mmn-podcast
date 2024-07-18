import { Analytics } from '@vercel/analytics/react';
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({ subsets: ['latin'], display: 'swap' });
const poppins = Poppins({ weight: '200', subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: "Music Maker Network",
  description: "Where we chat to the people who make music happen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
