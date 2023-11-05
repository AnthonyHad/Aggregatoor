import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/navigation/sidebar";
import PriceRow from "@/components/elements/priceRow";
import Footer from "@/components/navigation/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Aggregatoor",
  description: "Blockchain news and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-300">
      <body className={`${nunito.className} flex min-h-screen`}>
        <Sidebar />
        <div className="w-full overflow-hidden">
          <PriceRow />
          <div className=" w-11/12 mx-auto mt-7">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
