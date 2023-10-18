import React from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'
import { FormResponse } from '@/gql/graphql'
import { useGetFormResponsesByProjectId } from '@/hooks/query/form'

interface TestimonialTableProps {
  projectId: string
}

const TestimonialTable: React.FC<TestimonialTableProps> = (props) => {
  const { projectId } = props
  const { responses, isLoading } = useGetFormResponsesByProjectId(projectId)

  if (isLoading) return <h4>Loading...</h4>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={responses as FormResponse[]} />
    </div>
  )
}

export default TestimonialTable
