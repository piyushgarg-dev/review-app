import { GraphQLClient } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_AWS_API_URL as
  | string
  | null
  | undefined;

if (!API_URL)
  throw new Error("process.env.NEXT_PUBLIC_AWS_API_URL is undefined");

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(`${API_URL}/graphql`, {
  headers: () => ({
    Authorization: isClient
      ? `Bearer ${window.localStorage.getItem("__authentication_token__")}`
      : "",
  }),
});
