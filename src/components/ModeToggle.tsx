import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { Card } from "./ui/card"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <Card>
      <Button variant="outline" size="icon">
        <span onClick={() => setTheme("dark")}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </span>
        <span onClick={() => setTheme("light")}>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 top-[0.6rem] right-[0.6rem] scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Card>
  )
}
