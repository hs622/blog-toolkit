import ThemeDropdown from "@/components/theme-dropdown";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      <ThemeDropdown />
      {children}
    </div>
  );
}
