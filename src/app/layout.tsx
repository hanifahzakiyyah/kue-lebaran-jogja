import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Kue Kering Lebaran Chasana Jogja | Kastengel, Nastar, Putri Salju Homemade</title>
        <meta name="author" content="Hanifah"/> 
        <meta name="description" content="Pesan kue kering Lebaran di Jogja! Kastengel, nastar, dan putri salju homemade, enak, dan premium. Order sekarang untuk Lebaran 2025!"/>
        <meta name="keywords" content="kue kering lebaran jogja, kastengel jogja, nastar jogja, putri salju jogja, toko kue kering jogja, kue lebaran homemade"/>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:type" content="website" />
      </head>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
