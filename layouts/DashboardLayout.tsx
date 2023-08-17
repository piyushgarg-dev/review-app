import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <DashboardNavbar />
      {props.children}
    </div>
  );
};

export default DashboardLayout;
