import { GraphQLClient } from 'graphql-request'
import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_AWS_API_URL as string | null | undefined

if (!API_URL)
  throw new Error('process.env.NEXT_PUBLIC_AWS_API_URL is undefined')

const isClient = typeof window !== 'undefined'

export const graphqlClient = new GraphQLClient(`${API_URL}/graphql`, {
  headers: () => ({
    Authorization: isClient
      ? `Bearer ${window.localStorage.getItem('__authentication_token__')}`
      : '',
  }),
})

export const getGithubStars = async () => {
  try {
    const { data } = await axios.get(
      'https://api.github.com/repos/piyushgarg-dev/review-app'
    )
    return data.stargazers_count
  } catch (error) {
    // console.error('Error fetching GitHub stars:', error)
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 })
    }
    return new Response('Internal Server Error', { status: 500 })
  }
}
