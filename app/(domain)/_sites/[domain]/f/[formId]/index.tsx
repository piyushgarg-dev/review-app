import { NextPage } from 'next'

import FormPreview from '@/components/Dashboard/FormPreview'

const FormSubmission: NextPage = () => {
  return (
    <div>
      <h1>YOYOYO</h1>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const siteDomain = context.query.site as string

  return {
    props: {},
  }
}

export default FormSubmission
