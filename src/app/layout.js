import { DM_Sans } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

// Import DM Sans with display swap
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap', // This ensures text is visible while the font loads
  variable: '--font-dm-sans', // Define a CSS variable for DM Sans
});

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans", // Use a variable for GeistSans
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono", // Use a variable for GeistMono
  weight: "100 900",
});

export const metadata = {
  title: "Jacob Fu",
  description: "Learn more about Jacob Fu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${dmSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`} // Apply all font variables here
      >
        {children}
      </body>
    </html>
  );
}
