import type { Metadata } from "next";
import Logo from "../(site)/_components/logo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="w-full p-5 top-0 md:absolute z-[100]">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="md:relative flex items-center justify-center min-h-[calc(100vh-80px)]">
        {children}
      </div>
    </div>
  );
}
