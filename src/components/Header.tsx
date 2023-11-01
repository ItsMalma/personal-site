import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const items = [
  { id: "home", text: "Home", link: "/" },
  { id: "about", text: "About", link: "/about" },
  { id: "projects", text: "Projects", link: "/projects" },
];

export default function Header() {
  return (
    <header
      className={cn(
        "bg-slate-950 text-white",
        "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40",
        "py-2 lg:py-3 xl:py-4",
        "sticky top-0 z-50",
        "flex items-center",
        "md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10",
        "shadow"
      )}
    >
      <span className="flex items-center gap-2 md:gap-3 2xl:gap-4">
        <Image src="/malma.svg" alt="Malma's Icon" width={36} height={36} />
        <h1 className="text-xl font-semibold">Malma</h1>
      </span>
      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.id}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "!px-3 !py-1")}
                >
                  {item.text}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-auto md:hidden outline-none">
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:hidden">
          {items.map((item) => (
            <DropdownMenuItem key={item.id}>
              <Link href={item.link} legacyBehavior passHref>
                {item.text}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
