import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-h-full">
      {children}
    </div>
  );
}
