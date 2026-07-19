import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export const metadata = {
  title: "Cathly Shoppe",
  description: "Modern Clothing Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
        <Footer />
        <BackToTop />
    </body>
    </html>
  );
}