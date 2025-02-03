import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Facebook - Connect with the world",
  description:
    "Admin Page Facebook helps you connect and share with the people in your life.",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <span>Admin Navbar</span>
      {children}
    </>
  );
}
