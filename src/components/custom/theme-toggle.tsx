import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/custom/theme-provider";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const ThemeToggle: React.FC<Props> = ({ className, ...props }) => {
  const { setTheme, getCurrentTheme } = useTheme();

  return (
    <>
      {getCurrentTheme() === "dark" ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("light")}
          className={className}
          {...props}
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("dark")}
          className={className}
          {...props}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
