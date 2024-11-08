"use client"

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={changeTheme} className="dark:border-blue-500/30 border-blue-800/30 electric-lightning-effect dark:bg-black-200 bg-white-600/30">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-white text-black" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white text-black" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
