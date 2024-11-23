// app/layout.tsx

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../../components/header';  // Import Header component
import { Poppins } from 'next/font/google';
import './globals.css';

// Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Adjust weights as needed
});

// Local fonts (GeistSans and GeistMono)
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Add Calistoga font from Google Fonts
import { Inter } from 'next/font/google';
const calistoga = Inter({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vince Ramirez | Portfolio',
  description: 'Vince Ramirez | Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Import Calistoga font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} ${calistoga.className} antialiased`}
      >
        <Header /> {/* Add the Header component */}
        <main>{children}</main> {/* Render the page content */}
      </body>
    </html>
  );
}
