/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #graphql\n  mutation CreateForm($data: CreateFormData!) {\n    createForm(data: $data)\n  }\n": types.CreateFormDocument,
    "\n  #graphql\n  mutation UpdateForm($data: UpdateFormInput!) {\n    updateForm(data: $data)\n  }\n": types.UpdateFormDocument,
    "\n  #graphql\n  mutation CreateProject($data: CreateProjectData!) {\n    createProject(data: $data) {\n      id\n      subdomain\n      customDomain\n    }\n  }\n": types.CreateProjectDocument,
    "\n  #graphql\n  mutation CreateUserWithEmailAndPassword($data: CreateUserData!) {\n    createUser(data: $data) {\n      id\n    }\n  }\n": types.CreateUserWithEmailAndPasswordDocument,
    "\n  #graphql\n  query GetForms($input: GetFormsInput!) {\n    getForms(input: $input) {\n      id\n      name\n      slug\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetFormsDocument,
    "\n  #graphql\n  query GetFormById($getFormByIdId: ID!) {\n    getFormById(id: $getFormByIdId) {\n      id\n      name\n      slug\n      introTitle\n      introMessage\n      promptTitle\n      promptDescription\n      thankyouTitle\n      thankyouMessage\n      enableCTA\n      ctaTitle\n      ctaURL\n      projectId\n      createdByUserId\n      isActive\n      primaryColor\n      backgroundColor\n      lang\n      collectVideoTestimonials\n      collectTextTestimonials\n      collectRatings\n      collectImages\n      collectEmail\n      collectJobTitle\n      collectUserImage\n      collectWebsiteURL\n      collectCompany\n      autoApproveTestimonials\n      autoAddTags\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetFormByIdDocument,
    "\n  #graphql\n  query GetUserProjects {\n    getUserProjects {\n      id\n      name\n      subdomain\n      customDomain\n    }\n  }\n": types.GetUserProjectsDocument,
    "\n  #graphql\n  query GetProjectByDomain($domain: String!) {\n    getProjectByDomain(domain: $domain) {\n      id\n      name\n      customDomain\n      subdomain\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetProjectByDomainDocument,
    "\n  query GetSessionUser {\n    getSessionUser {\n      id\n      firstName\n      lastName\n      email\n      emailVerified\n      authenticationType\n      profileImageURL\n      role\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetSessionUserDocument,
    "\n  #graphql\n  query SigninWithEmailPassword($email: String!, $password: String!) {\n    singinwithEmailPassword(email: $email, password: $password)\n  }\n": types.SigninWithEmailPasswordDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateForm($data: CreateFormData!) {\n    createForm(data: $data)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateForm($data: CreateFormData!) {\n    createForm(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation UpdateForm($data: UpdateFormInput!) {\n    updateForm(data: $data)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation UpdateForm($data: UpdateFormInput!) {\n    updateForm(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateProject($data: CreateProjectData!) {\n    createProject(data: $data) {\n      id\n      subdomain\n      customDomain\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateProject($data: CreateProjectData!) {\n    createProject(data: $data) {\n      id\n      subdomain\n      customDomain\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateUserWithEmailAndPassword($data: CreateUserData!) {\n    createUser(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateUserWithEmailAndPassword($data: CreateUserData!) {\n    createUser(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetForms($input: GetFormsInput!) {\n    getForms(input: $input) {\n      id\n      name\n      slug\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetForms($input: GetFormsInput!) {\n    getForms(input: $input) {\n      id\n      name\n      slug\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetFormById($getFormByIdId: ID!) {\n    getFormById(id: $getFormByIdId) {\n      id\n      name\n      slug\n      introTitle\n      introMessage\n      promptTitle\n      promptDescription\n      thankyouTitle\n      thankyouMessage\n      enableCTA\n      ctaTitle\n      ctaURL\n      projectId\n      createdByUserId\n      isActive\n      primaryColor\n      backgroundColor\n      lang\n      collectVideoTestimonials\n      collectTextTestimonials\n      collectRatings\n      collectImages\n      collectEmail\n      collectJobTitle\n      collectUserImage\n      collectWebsiteURL\n      collectCompany\n      autoApproveTestimonials\n      autoAddTags\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetFormById($getFormByIdId: ID!) {\n    getFormById(id: $getFormByIdId) {\n      id\n      name\n      slug\n      introTitle\n      introMessage\n      promptTitle\n      promptDescription\n      thankyouTitle\n      thankyouMessage\n      enableCTA\n      ctaTitle\n      ctaURL\n      projectId\n      createdByUserId\n      isActive\n      primaryColor\n      backgroundColor\n      lang\n      collectVideoTestimonials\n      collectTextTestimonials\n      collectRatings\n      collectImages\n      collectEmail\n      collectJobTitle\n      collectUserImage\n      collectWebsiteURL\n      collectCompany\n      autoApproveTestimonials\n      autoAddTags\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetUserProjects {\n    getUserProjects {\n      id\n      name\n      subdomain\n      customDomain\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetUserProjects {\n    getUserProjects {\n      id\n      name\n      subdomain\n      customDomain\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetProjectByDomain($domain: String!) {\n    getProjectByDomain(domain: $domain) {\n      id\n      name\n      customDomain\n      subdomain\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetProjectByDomain($domain: String!) {\n    getProjectByDomain(domain: $domain) {\n      id\n      name\n      customDomain\n      subdomain\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSessionUser {\n    getSessionUser {\n      id\n      firstName\n      lastName\n      email\n      emailVerified\n      authenticationType\n      profileImageURL\n      role\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetSessionUser {\n    getSessionUser {\n      id\n      firstName\n      lastName\n      email\n      emailVerified\n      authenticationType\n      profileImageURL\n      role\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query SigninWithEmailPassword($email: String!, $password: String!) {\n    singinwithEmailPassword(email: $email, password: $password)\n  }\n"): (typeof documents)["\n  #graphql\n  query SigninWithEmailPassword($email: String!, $password: String!) {\n    singinwithEmailPassword(email: $email, password: $password)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;