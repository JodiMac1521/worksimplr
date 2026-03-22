import './globals.css';

export const metadata = {
  title: 'Work Simplr — Make gig working Simplr.',
  description:
    'The centralised gateway into the gig working and freelance economy. Discover a new marketplace to request and complete professional, creative and labour services.',
  themeColor: '#1455c4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
