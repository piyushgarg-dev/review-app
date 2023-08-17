import { graphql } from "@/gql";

export const createUserWithEmailAndPasswordMutation = graphql(`
  #graphql
  mutation CreateUserWithEmailAndPassword($data: CreateUserData!) {
    createUser(data: $data) {
      id
    }
  }
`);
