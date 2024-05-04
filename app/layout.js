import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apna Swasth",
  description: "Doctor Appointment App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
