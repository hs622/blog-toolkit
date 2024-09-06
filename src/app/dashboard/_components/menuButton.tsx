"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuButton = ({
  link,
  name,
  icon,
}: {
  link: string;
  name: string;
  icon: React.ReactElement;
}) => {
  const currentPath = usePathname();
  const isActive = (href: string) => currentPath === href;

  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={link as string}
            className={
              isActive(link)
                ? "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-accent-foreground"
                : "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 text-muted-foreground"
            }
          >
            {React.cloneElement(icon, { className: "h-5 w-5" })}
            <span className="sr-only">{name as string}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{name as string}</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default MenuButton;
