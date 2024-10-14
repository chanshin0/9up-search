'use client';

import localFont from 'next/font/local';
import styles from '@/styles/styles';
import GlobalStyles from '@/styles/globals';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

const geistSans: NextFontWithVariable = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono: NextFontWithVariable = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { layout } = styles;
  return (
    <html lang="en" className={geistSans.className}>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <GlobalStyles />
        <div css={layout}>{children}</div>
      </body>
    </html>
  );
}
