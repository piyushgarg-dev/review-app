import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/query/user";
import { useAuth } from "@/context/Authentication";
import ProjectSwitch from "../ProjectSwitch";

const DashboardNavbar: React.FC = () => {
  const { user } = useCurrentUser();
  const { signOut } = useAuth();

  return (
    <header className="border-b flex h-16 items-center px-4">
      <ProjectSwitch />
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        {user ? (
          <Button onClick={signOut}>Logout</Button>
        ) : (
          <Button className="">Login</Button>
        )}
      </div>
    </header>
  );
};

export default DashboardNavbar;
