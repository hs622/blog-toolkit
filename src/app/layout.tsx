import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/provider/theme-provider";
import ThemeDropdown from "@/components/theme-dropdown";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toolkit",
  description: "Toolkit by Horizon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
