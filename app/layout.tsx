import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, DM_Serif_Display } from 'next/font/google';

const display = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display'
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Ecosistema XFI | Blueprint Consolidado',
  description:
    'Cartografía interactiva del ecosistema XFI: realidades anidadas, mundos fundacionales, tokenomía y progresión consciente.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${grotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
