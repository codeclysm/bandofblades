import Image from 'next/image'

// These styles apply to every route in the application
import './globals.css'

import logo from './logo.png'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center my-3">
          <Image
              src={logo}
              alt="Band of Blades"
          />
        </div>
      {children}</body>
    </html>
  );
}
