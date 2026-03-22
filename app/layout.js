import './globals.css';

export const metadata = {
  title: 'Work Simplr — The Future of Work Runs on Sprints.',
  description: 'Work Simplr turns undefined work into clear, executable outcomes using AI + managed teams. Structured work, executed in weeks — not months.',
  themeColor: '#0A2342',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
