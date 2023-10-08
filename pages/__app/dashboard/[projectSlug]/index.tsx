import type { NextPage } from 'next'
import { useSelectedProject } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'

const DashboardMainPage: NextPage = () => {
  const { project } = useSelectedProject()
  return (
    <DashboardLayout>
      {
        <section className="w-[98%] flex h-[50vh] items-center justify-center">
          <div className="relative overflow-x-auto border-gray-600 border rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-transparent dark:text-gray-400 border-b-2">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Name
                  </th>

                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-transparent border-b-2">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Selected project ID
                  </th>
                  <td className="px-6 py-4">
                    {!project && <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>}
                    {project && project?.id}
                  </td>
                </tr>
                <tr className="bg-white dark:bg-transparent border-b-2">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Selected project Name
                  </th>
                  <td className="px-6 py-4">
                    {!project && <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>}
                    {project?.name}
                  </td>
                </tr>
                <tr className="bg-white dark:bg-transparent  ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Selected project Slug
                  </th>
                  <td className="px-6 py-4">
                    {!project && <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>}
                    {project?.subdomain}
                  </td>
                </tr>
                {project?.customDomain && <tr className="bg-white dark:bg-transparent  ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Selected project Slug
                  </th>
                  <td className="px-6 py-4">
                    {!project && <div className="h-2.5 animate-pulse bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>}
                    {project?.customDomain}
                  </td>
                </tr>}
              </tbody>
            </table>
          </div>
        </section>
      }
    </DashboardLayout>
  )
}

export default DashboardMainPage
