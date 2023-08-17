import { graphqlClient } from "@/api";
import {
  getProjectBySlug,
  getUserProjectsQuery,
} from "@/graphql/queries/project";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useUserProjects = () => {
  const result = useQuery({
    queryKey: ["user-projects"],
    queryFn: () => graphqlClient.request(getUserProjectsQuery),
  });
  return { ...result, projects: result.data?.getUserProjects };
};

export const useSelectedProject = () => {
  const router = useRouter();

  const slug = useMemo(() => {
    if (router && router.query && router.query.projectSlug)
      return router.query.projectSlug as string;
    return null;
  }, [router]);

  const result = useQuery({
    queryKey: ["user-projects", slug],
    queryFn: () =>
      slug ? graphqlClient.request(getProjectBySlug, { slug }) : null,
  });

  return { ...result, project: result.data?.getProjectBySlug };
};
