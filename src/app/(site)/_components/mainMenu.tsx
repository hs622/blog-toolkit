"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MainMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="px-5">
          <Menu size={20} className="stroke-1 hover:stroke-2 flex self-center" />
        </SheetTrigger>
        <SheetContent>

          



          {/* <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account an d remove your data from our servers.
            </SheetDescription>
          </SheetHeader> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MainMenu;
