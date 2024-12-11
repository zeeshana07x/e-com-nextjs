import './globals.css';

export const metadata = {
  title: 'E-Commerce Site',
  description: 'A visually appealing and functional e-commerce site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
