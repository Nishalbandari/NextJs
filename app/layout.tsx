"use client"; // For client-side state in Next.js

import { useState, useEffect } from "react";
import "./globals.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  return (
    <html lang="en">
      <body>
        <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />
        <div className="flex mt-[9rem] relative">
          {isMobile ? (
            <>
              <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 transition-all duration-300 ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
                onClick={toggleSidebar}
              ></div>

              <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <Sidenav />
              </div>
            </>
          ) : (
            <Sidenav />
          )}

          <main className="flex-1 p-4 z-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
