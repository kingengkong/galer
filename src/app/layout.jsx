import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "EVERYONE' S",
  description: "Website galeri foto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-4 pt-6">{children}</main>
      </body>
    </html>
  );
}
