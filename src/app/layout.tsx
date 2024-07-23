// app/layout.tsx
import './global.css';
import Head from 'next/head';


export const metadata = {
  title: 'OASIX',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Custom head elements */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
