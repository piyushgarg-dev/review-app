import { graphqlClient } from "@/api";
import { CreateProjectData } from "@/gql/graphql";
import { createProjectMutation } from "@/graphql/mutations/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: CreateProjectData) =>
      graphqlClient.request(createProjectMutation, { data }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["user-projects"] }),
  });
  return mutation;
};
