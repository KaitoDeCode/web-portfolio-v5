import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navigation, ThemeProvider } from "@/components/core";

const poppins = Poppins({ subsets: ["latin"], weight:["100","200","400","300","400","500","600","700","800","900"]});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        >
          <Navigation/>
          <main className="min-h-screen p-10 lg:p-24">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
