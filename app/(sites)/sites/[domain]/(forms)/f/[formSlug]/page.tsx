import { graphqlClient } from '@/api'

async function getForm() {
  const r = await graphqlClient.request()
  return r
}

export default function CustomHomePage(params: any) {
  console.log(params)
  return <div>Form Page {JSON.stringify(params)}</div>
}
