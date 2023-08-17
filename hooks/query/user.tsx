import { graphqlClient } from "@/api";
import { getSessionUserQuery } from "@/graphql/queries/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const response = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphqlClient.request(getSessionUserQuery),
  });
  return { ...response, user: response.data?.getSessionUser };
};
