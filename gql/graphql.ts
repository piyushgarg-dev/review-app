/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type CreateFormData = {
  name: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateProjectData = {
  customDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subdomain: Scalars['String']['input'];
};

export type CreateUserData = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type Form = {
  __typename?: 'Form';
  autoAddTags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  autoApproveTestimonials: Scalars['Boolean']['output'];
  backgroundColor: Scalars['String']['output'];
  collectCompany: Scalars['Boolean']['output'];
  collectEmail: Scalars['Boolean']['output'];
  collectImages: Scalars['Boolean']['output'];
  collectJobTitle: Scalars['Boolean']['output'];
  collectRatings: Scalars['Boolean']['output'];
  collectTextTestimonials: Scalars['Boolean']['output'];
  collectUserImage: Scalars['Boolean']['output'];
  collectVideoTestimonials: Scalars['Boolean']['output'];
  collectWebsiteURL: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<User>;
  createdByUserId?: Maybe<Scalars['String']['output']>;
  ctaTitle?: Maybe<Scalars['String']['output']>;
  ctaURL?: Maybe<Scalars['String']['output']>;
  enableCTA: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  introMessage?: Maybe<Scalars['String']['output']>;
  introTitle: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  lang?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  primaryColor: Scalars['String']['output'];
  project?: Maybe<Project>;
  projectId: Scalars['String']['output'];
  promptDescription?: Maybe<Scalars['String']['output']>;
  promptTitle: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  thankyouMessage?: Maybe<Scalars['String']['output']>;
  thankyouTitle: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type FormPublicData = {
  __typename?: 'FormPublicData';
  backgroundColor: Scalars['String']['output'];
  collectCompany: Scalars['Boolean']['output'];
  collectEmail: Scalars['Boolean']['output'];
  collectImages: Scalars['Boolean']['output'];
  collectJobTitle: Scalars['Boolean']['output'];
  collectRatings: Scalars['Boolean']['output'];
  collectTextTestimonials: Scalars['Boolean']['output'];
  collectUserImage: Scalars['Boolean']['output'];
  collectVideoTestimonials: Scalars['Boolean']['output'];
  collectWebsiteURL: Scalars['Boolean']['output'];
  ctaTitle?: Maybe<Scalars['String']['output']>;
  ctaURL?: Maybe<Scalars['String']['output']>;
  enableCTA: Scalars['Boolean']['output'];
  introMessage?: Maybe<Scalars['String']['output']>;
  introTitle: Scalars['String']['output'];
  lang?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  primaryColor: Scalars['String']['output'];
  promptDescription?: Maybe<Scalars['String']['output']>;
  promptTitle: Scalars['String']['output'];
  thankyouMessage?: Maybe<Scalars['String']['output']>;
  thankyouTitle: Scalars['String']['output'];
};

export type FormResponse = {
  __typename?: 'FormResponse';
  approved?: Maybe<Scalars['Boolean']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  formId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  reatedAt?: Maybe<Scalars['Date']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  testimonial: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type GetFormResponsesByFormIdInput = {
  formId: Scalars['ID']['input'];
};

export type GetFormsInput = {
  projectId: Scalars['ID']['input'];
};

export type GetPublicFormDataInput = {
  domain: Scalars['String']['input'];
  formSlug: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm?: Maybe<Scalars['String']['output']>;
  createProject?: Maybe<Project>;
  createUser?: Maybe<User>;
  submitFormResponse?: Maybe<Scalars['String']['output']>;
  updateForm?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateFormArgs = {
  data: CreateFormData;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectData;
};


export type MutationCreateUserArgs = {
  data: CreateUserData;
};


export type MutationSubmitFormResponseArgs = {
  data: SubmitFormResponseData;
};


export type MutationUpdateFormArgs = {
  data: UpdateFormInput;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['Date']['output']>;
  customDomain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subdomain: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getFormById?: Maybe<Form>;
  getFormResponses?: Maybe<Array<Maybe<FormResponse>>>;
  getForms?: Maybe<Array<Maybe<Form>>>;
  getProjectByDomain?: Maybe<Project>;
  getPublicFormData?: Maybe<FormPublicData>;
  getSessionUser?: Maybe<User>;
  getUserProjects?: Maybe<Array<Maybe<Project>>>;
  singinwithEmailPassword?: Maybe<Scalars['String']['output']>;
  verifyGoogleAuthToken?: Maybe<Scalars['String']['output']>;
};


export type QueryGetFormByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFormResponsesArgs = {
  input: GetFormResponsesByFormIdInput;
};


export type QueryGetFormsArgs = {
  input: GetFormsInput;
};


export type QueryGetProjectByDomainArgs = {
  domain: Scalars['String']['input'];
};


export type QueryGetPublicFormDataArgs = {
  input: GetPublicFormDataInput;
};


export type QuerySinginwithEmailPasswordArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVerifyGoogleAuthTokenArgs = {
  googleToken: Scalars['String']['input'];
};

export type SubmitFormResponseData = {
  company?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  formId: Scalars['String']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
  testimonial: Scalars['String']['input'];
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFormInput = {
  autoAddTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  autoApproveTestimonials?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  collectCompany?: InputMaybe<Scalars['Boolean']['input']>;
  collectEmail?: InputMaybe<Scalars['Boolean']['input']>;
  collectImages?: InputMaybe<Scalars['Boolean']['input']>;
  collectJobTitle?: InputMaybe<Scalars['Boolean']['input']>;
  collectRatings?: InputMaybe<Scalars['Boolean']['input']>;
  collectTextTestimonials?: InputMaybe<Scalars['Boolean']['input']>;
  collectUserImage?: InputMaybe<Scalars['Boolean']['input']>;
  collectVideoTestimonials?: InputMaybe<Scalars['Boolean']['input']>;
  collectWebsiteURL?: InputMaybe<Scalars['Boolean']['input']>;
  ctaTitle?: InputMaybe<Scalars['String']['input']>;
  ctaURL?: InputMaybe<Scalars['String']['input']>;
  enableCTA?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  introMessage?: InputMaybe<Scalars['String']['input']>;
  introTitle?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  promptDescription?: InputMaybe<Scalars['String']['input']>;
  promptTitle?: InputMaybe<Scalars['String']['input']>;
  thankyouMessage?: InputMaybe<Scalars['String']['input']>;
  thankyouTitle?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  authenticationType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profileImageURL?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CreateFormMutationVariables = Exact<{
  data: CreateFormData;
}>;


export type CreateFormMutation = { __typename?: 'Mutation', createForm?: string | null };

export type UpdateFormMutationVariables = Exact<{
  data: UpdateFormInput;
}>;


export type UpdateFormMutation = { __typename?: 'Mutation', updateForm?: boolean | null };

export type CreateProjectMutationVariables = Exact<{
  data: CreateProjectData;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'Project', id: string, subdomain: string, customDomain?: string | null } | null };

export type CreateUserWithEmailAndPasswordMutationVariables = Exact<{
  data: CreateUserData;
}>;


export type CreateUserWithEmailAndPasswordMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string } | null };

export type GetFormsQueryVariables = Exact<{
  input: GetFormsInput;
}>;


export type GetFormsQuery = { __typename?: 'Query', getForms?: Array<{ __typename?: 'Form', id: string, name: string, slug: string, createdAt?: any | null, updatedAt?: any | null } | null> | null };

export type GetFormByIdQueryVariables = Exact<{
  getFormByIdId: Scalars['ID']['input'];
}>;


export type GetFormByIdQuery = { __typename?: 'Query', getFormById?: { __typename?: 'Form', id: string, name: string, slug: string, introTitle: string, introMessage?: string | null, promptTitle: string, promptDescription?: string | null, thankyouTitle: string, thankyouMessage?: string | null, enableCTA: boolean, ctaTitle?: string | null, ctaURL?: string | null, projectId: string, createdByUserId?: string | null, isActive: boolean, primaryColor: string, backgroundColor: string, lang?: string | null, collectVideoTestimonials: boolean, collectTextTestimonials: boolean, collectRatings: boolean, collectImages: boolean, collectEmail: boolean, collectJobTitle: boolean, collectUserImage: boolean, collectWebsiteURL: boolean, collectCompany: boolean, autoApproveTestimonials: boolean, autoAddTags?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type GetPublicFormDataQueryVariables = Exact<{
  input: GetPublicFormDataInput;
}>;


export type GetPublicFormDataQuery = { __typename?: 'Query', getPublicFormData?: { __typename?: 'FormPublicData', primaryColor: string, backgroundColor: string, introTitle: string, introMessage?: string | null, promptTitle: string, promptDescription?: string | null, thankyouTitle: string, thankyouMessage?: string | null, name: string, enableCTA: boolean, ctaTitle?: string | null, ctaURL?: string | null, collectVideoTestimonials: boolean, collectTextTestimonials: boolean, collectRatings: boolean, collectImages: boolean, collectEmail: boolean, collectJobTitle: boolean, collectUserImage: boolean, collectWebsiteURL: boolean, collectCompany: boolean, lang?: string | null } | null };

export type GetUserProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProjectsQuery = { __typename?: 'Query', getUserProjects?: Array<{ __typename?: 'Project', id: string, name: string, subdomain: string, customDomain?: string | null } | null> | null };

export type GetProjectByDomainQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type GetProjectByDomainQuery = { __typename?: 'Query', getProjectByDomain?: { __typename?: 'Project', id: string, name: string, customDomain?: string | null, subdomain: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type GetSessionUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionUserQuery = { __typename?: 'Query', getSessionUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, emailVerified: boolean, authenticationType?: string | null, profileImageURL?: string | null, role?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type SigninWithEmailPasswordQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SigninWithEmailPasswordQuery = { __typename?: 'Query', singinwithEmailPassword?: string | null };


export const CreateFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFormData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<CreateFormMutation, CreateFormMutationVariables>;
export const UpdateFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFormInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UpdateFormMutation, UpdateFormMutationVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subdomain"}},{"kind":"Field","name":{"kind":"Name","value":"customDomain"}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateUserWithEmailAndPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserWithEmailAndPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserWithEmailAndPasswordMutation, CreateUserWithEmailAndPasswordMutationVariables>;
export const GetFormsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetForms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetFormsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getForms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetFormsQuery, GetFormsQueryVariables>;
export const GetFormByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFormById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getFormByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFormById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getFormByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"introTitle"}},{"kind":"Field","name":{"kind":"Name","value":"introMessage"}},{"kind":"Field","name":{"kind":"Name","value":"promptTitle"}},{"kind":"Field","name":{"kind":"Name","value":"promptDescription"}},{"kind":"Field","name":{"kind":"Name","value":"thankyouTitle"}},{"kind":"Field","name":{"kind":"Name","value":"thankyouMessage"}},{"kind":"Field","name":{"kind":"Name","value":"enableCTA"}},{"kind":"Field","name":{"kind":"Name","value":"ctaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ctaURL"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"createdByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"collectVideoTestimonials"}},{"kind":"Field","name":{"kind":"Name","value":"collectTextTestimonials"}},{"kind":"Field","name":{"kind":"Name","value":"collectRatings"}},{"kind":"Field","name":{"kind":"Name","value":"collectImages"}},{"kind":"Field","name":{"kind":"Name","value":"collectEmail"}},{"kind":"Field","name":{"kind":"Name","value":"collectJobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"collectUserImage"}},{"kind":"Field","name":{"kind":"Name","value":"collectWebsiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"collectCompany"}},{"kind":"Field","name":{"kind":"Name","value":"autoApproveTestimonials"}},{"kind":"Field","name":{"kind":"Name","value":"autoAddTags"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetFormByIdQuery, GetFormByIdQueryVariables>;
export const GetPublicFormDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublicFormData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPublicFormDataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPublicFormData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryColor"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundColor"}},{"kind":"Field","name":{"kind":"Name","value":"introTitle"}},{"kind":"Field","name":{"kind":"Name","value":"introMessage"}},{"kind":"Field","name":{"kind":"Name","value":"promptTitle"}},{"kind":"Field","name":{"kind":"Name","value":"promptDescription"}},{"kind":"Field","name":{"kind":"Name","value":"thankyouTitle"}},{"kind":"Field","name":{"kind":"Name","value":"thankyouMessage"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enableCTA"}},{"kind":"Field","name":{"kind":"Name","value":"ctaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ctaURL"}},{"kind":"Field","name":{"kind":"Name","value":"collectVideoTestimonials"}},{"kind":"Field","name":{"kind":"Name","value":"collectTextTestimonials"}},{"kind":"Field","name":{"kind":"Name","value":"collectRatings"}},{"kind":"Field","name":{"kind":"Name","value":"collectImages"}},{"kind":"Field","name":{"kind":"Name","value":"collectEmail"}},{"kind":"Field","name":{"kind":"Name","value":"collectJobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"collectUserImage"}},{"kind":"Field","name":{"kind":"Name","value":"collectWebsiteURL"}},{"kind":"Field","name":{"kind":"Name","value":"collectCompany"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}}]}}]}}]} as unknown as DocumentNode<GetPublicFormDataQuery, GetPublicFormDataQueryVariables>;
export const GetUserProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subdomain"}},{"kind":"Field","name":{"kind":"Name","value":"customDomain"}}]}}]}}]} as unknown as DocumentNode<GetUserProjectsQuery, GetUserProjectsQueryVariables>;
export const GetProjectByDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectByDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProjectByDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"domain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"customDomain"}},{"kind":"Field","name":{"kind":"Name","value":"subdomain"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetProjectByDomainQuery, GetProjectByDomainQueryVariables>;
export const GetSessionUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSessionUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSessionUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"authenticationType"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetSessionUserQuery, GetSessionUserQueryVariables>;
export const SigninWithEmailPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SigninWithEmailPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singinwithEmailPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<SigninWithEmailPasswordQuery, SigninWithEmailPasswordQueryVariables>;