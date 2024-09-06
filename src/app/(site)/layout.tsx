import { Metadata } from "next";
import ThemeDropdown from "@/components/theme-dropdown";
import Header from "./_components/header";

export const metadata: Metadata = ({
  title: "Welcome to horizon",
  description: "horizon is a digital publication platform.",

})
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
