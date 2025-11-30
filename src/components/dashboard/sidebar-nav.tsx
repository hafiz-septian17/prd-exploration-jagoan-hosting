"use client";

import {
  BarChart,
  BookOpen,
  LayoutDashboard,
  LayoutTemplate,
  Settings,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/minisite", label: "Minisite", icon: LayoutTemplate },
  { href: "/dashboard/katalog", label: "Katalog", icon: BookOpen },
  { href: "/dashboard/promosi", label: "Promosi", icon: Sparkles },
  { href: "/dashboard/insight", label: "Insight", icon: BarChart },
  { href: "/dashboard/pengaturan", label: "Pengaturan", icon: Settings },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {navItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname.startsWith(item.href) && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  );
}
