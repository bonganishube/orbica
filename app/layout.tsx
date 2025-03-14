import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/global/Container";
import Footer from "@/components/footer/Footer";
import Providers from "./providers";
import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import { ClerkProvider } from '@clerk/nextjs';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbica",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Banner />
          <Container>
            <Navbar />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
