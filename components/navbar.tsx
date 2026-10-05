import { UserButton } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";
import { StorviaLogo } from "@/components/storvia-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex shrink-0 items-center gap-2">
          <StorviaLogo wordmarkClassName="hidden sm:inline" />
          <span className="text-sm font-medium text-muted-foreground">
            Super Admin
          </span>
        </div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
