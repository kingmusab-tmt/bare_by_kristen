import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brazilian Waxing | Bikini Wax Services in NJ for Men and Women",
  description:
    "Best Brazilian and Bikini waxing services in Bergen county, New Jersey (NJ). Painless Waxing to make you Feel Confident & Refreshed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
