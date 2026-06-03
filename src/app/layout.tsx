import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/main.scss";
import CommonLayout from "../layout/CommonLayout";
import LenisScroll from "../components/LenisScroll";

const axiforma = localFont({
  src: [
    {
      path: "../../public/font/Axiforma-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Axiforma-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Axiforma-Thin.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-axiforma",
  display: "swap",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${axiforma.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col body">

        <LenisScroll>
          <CommonLayout>{children}</CommonLayout>
        </LenisScroll>
      </body>
    </html>
  );
}

