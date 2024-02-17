import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapProvider from "@/components/BootstrapProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Courses Online",
  description:
    "Access features you need to create, market, and sell your first online course.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <BootstrapProvider>
          <Header />
          {children}
          <Footer />
        </BootstrapProvider>
      </body>
    </html>
  );
}
