import './globals.css';

export const metadata = {
  title: 'Be Mobile',
  description: 'Premium tech store in Pannala',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
