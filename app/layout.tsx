import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nitishsingh.vercel.app'),
  title: 'Nitish Singh - Data Analyst & Full-Stack Developer',
  description: 'Portfolio of Nitish Singh - Data Analyst & Full-Stack Developer specializing in Python, SQL, Power BI, Tableau, MERN stack, AWS & Azure. 2+ years experience in data analysis and web development.',
  keywords: ['Nitish Singh', 'Data Analyst', 'Full-Stack Developer', 'Python', 'SQL', 'Power BI', 'Tableau', 'MERN Stack', 'AWS', 'Azure', 'React', 'Node.js', 'Business Intelligence', 'Data Visualization'],
  authors: [{ name: 'Nitish Singh' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nitishsingh.vercel.app',
    siteName: 'Nitish Singh Portfolio',
    title: 'Nitish Singh - Data Analyst & Full-Stack Developer',
    description: 'Data Analyst & Full-Stack Developer specializing in Python, SQL, Power BI, Tableau, MERN stack, AWS & Azure',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nitish Singh Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitish Singh - Data Analyst & Developer',
    description: 'Data Analyst & Full-Stack Developer specializing in data visualization and web development',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
