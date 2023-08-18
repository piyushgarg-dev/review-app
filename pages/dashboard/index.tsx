import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { useSelectedProject, useUserProjects } from "@/hooks/query/project";
import DashboardLayout from "@/layouts/DashboardLayout";

const DashBoardPage: NextPage = () => {
  const router = useRouter();
  const { projects } = useUserProjects();
  const { project: selectedProject } = useSelectedProject();

  const redirectToProject = useMemo(() => {
    if (!selectedProject) {
      if (projects && projects.length > 0) return projects[0];
    }
  }, [projects, selectedProject]);

  useEffect(() => {
    if (redirectToProject) {
      router.replace(`/dashboard/${redirectToProject.slug}`);
    }
  }, [redirectToProject, router]);

  return (
    <DashboardLayout>
      <section className="flex justify-center items-center h-[80vh] w-screen">
        <h1>Dashboard Page</h1>
      </section>
    </DashboardLayout>
  );
};

export default DashBoardPage;
