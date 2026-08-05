import { Inter, Playfair_Display, Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import FAQBehaviorClient from '@/components/FAQBehaviorClient';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['600'],
  display: 'swap',
});

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair',
//   weight: ['400', '500', '600', '700'],
//   style: ['normal', 'italic'],
//   display: 'swap',
// });

export const metadata = {
  title: {
    default: 'Raham Foundation — Small acts. Lasting change.',
    template: '%s | Raham Foundation',
  },
  description: 'Raham Foundation aims to benefit deserving individuals through financial assistance, skill development, and the provision of resources needed to build futures of dignity.',
  keywords: ['Raham Foundation', 'NGO', 'halal', 'independende', 'respect', 'Non Profit', 'Charity Pakistan', 'empowerment', 'Relief', 'Donation', 'Volunteer'],
  authors: [{ name: 'Raham Foundation' }],
  creator: 'Raham Foundation',
  publisher: 'Raham Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="fade-in">
        <Navbar />
        <FAQBehaviorClient />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
