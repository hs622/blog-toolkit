"use client";

import Logo from "./logo";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import MainMenu from "./mainMenu";

const Header = () => {
  return (
    <div className="sticky top-0 z-[40] bg-white drop-shadow-md dark:bg-background">
      <nav className="flex justify-between items-center py-2 pr-2">
        <div className="flex h-5 space-x-4 items-center">
          <MainMenu />
          <Separator orientation="vertical" className="m-0 hidden md:block" />
          <div className="hidden md:inline-flex gap-3 items-center">
            <Search size={18} className="stroke-1 hover:stroke-2" />
            <Bell size={18} className="stroke-1 hover:stroke-2" />
          </div>
        </div>
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex gap-2 sm:inline-block">
          <Button variant={"outline"}>
            <Link href={"login"}>Login</Link>
          </Button>
          <Button variant={"link"} className="hidden md:inline-flex">
            <Link href={"#subscribe"}>Subscriber</Link>
          </Button>
        </div>
      </nav>
      <Separator className="mb-4" />
    </div>
  );
};

export default Header;
