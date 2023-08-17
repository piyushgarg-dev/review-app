import React, { createContext, useCallback, useContext, useMemo } from "react";
import { CreateUserData } from "@/gql/graphql";
import { graphqlClient } from "@/api";
import { signinWithEmailAndPasswordQuery } from "@/graphql/queries/user";
import { useQueryClient } from "@tanstack/react-query";

interface AuthenticationProviderProps {
  children?: React.ReactNode;
}

interface IAuthenticationContext {
  signInWithEmailAndPassword?: (data: {
    email: string;
    password: string;
  }) => Promise<null | string>;
}

const defaultContextValues: IAuthenticationContext = {};

const AuthenticationContext =
  createContext<IAuthenticationContext>(defaultContextValues);

export const useAuth = () => {
  const state = useContext(AuthenticationContext);
  if (!state)
    throw new Error(
      `AuthenticationContext is null, Please make sure you are using useAuth wrapped inside AuthenticationProvider.`
    );
  return state;
};

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = (
  props
) => {
  const { children } = props;

  const queryClient = useQueryClient();

  const isClient = useMemo(() => typeof window !== "undefined", []);

  const signInWithEmailAndPassword: IAuthenticationContext["signInWithEmailAndPassword"] =
    useCallback(
      async ({ email, password }: { email: string; password: string }) => {
        const result = await graphqlClient.request(
          signinWithEmailAndPasswordQuery,
          {
            email,
            password,
          }
        );
        if (!result || !result.singinwithEmailPassword) return null;
        const token = result.singinwithEmailPassword;
        localStorage.setItem("__authentication_token__", token);
        await queryClient.invalidateQueries({ queryKey: ["current-user"] });
        return token;
      },
      [queryClient]
    );

  return (
    <AuthenticationContext.Provider value={{ signInWithEmailAndPassword }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
