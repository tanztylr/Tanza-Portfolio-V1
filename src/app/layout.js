import './globals.css';
import Cursor from './Cursor'; // <-- 1. Import it here

export const metadata = {
  title: "Tanza Taylor | Portfolio",
  description: "Welcome to my personal developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor /> {/* <-- 2. Drop it in right here */}
        {children}
      </body>
    </html>
  );
}