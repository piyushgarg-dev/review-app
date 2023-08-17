import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/query/user";

const Navbar: React.FC = () => {
  const { user } = useCurrentUser();
  return (
    <header className="border-b flex h-16 items-center px-4">
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        {user ? (
          <Button>Dashboard</Button>
        ) : (
          <Button className="">Login</Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
