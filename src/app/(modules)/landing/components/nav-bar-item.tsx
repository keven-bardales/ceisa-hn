"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavBarItemProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}
export function NavBarItem({ children, href, onClick }: NavBarItemProps) {
  const [isSelectedItem, setIsSelectedItem] = useState(false);

  // const pathName = usePathname();

  // useEffect(() => {
  //   setIsSelectedItem(pathName == href);

  //   if (pathName == "/landing" && href.includes("home")) {
  //     setIsSelectedItem(true);
  //   }
  // }, [pathName, href]);

  return (
    <Link
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={cn(
        "text-landing-primary-main bg-black font-bold text-lg px-2 py-2 hover:bg-landing-primary-main hover:text-landing-nav-item-text rounded-t-lg rounded-b-md transition-all duration-300 border-landing-primary-main"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
