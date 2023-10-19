import TestimonialTable from '@/components/Dashboard/Testimonatial/Table/table'
import { useSelectedProject } from '@/hooks/query/project'
import DashboardLayout from '@/layouts/DashboardLayout'
import type { NextPage } from 'next'
import Head from 'next/head'

const TestimonialsPage: NextPage = () => {
  const { project, isLoading: projectLoading } = useSelectedProject()

  if (projectLoading) return <h4>Loading...</h4>

  return (
    <div>
      <Head>
        <title>Testimonials</title>
      </Head>
      <main>
        <DashboardLayout>
          <div
            className="relative h-full flex-grow px-6 sm:px-10"
            id="page-container"
          >
            <div className="h-full pb-16 pt-8 sm:pt-10">
              <div className="h-full">
                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="text-xl font-semibold">Testimonials</h1>{' '}
                    <p className="mt-1 text-zinc-500">
                      See what your customers are saying about you
                    </p>
                  </div>
                  <div className="flex-grow"></div> <div className="flex"></div>
                </div>
              </div>
              {project && <TestimonialTable projectId={project.id} />}
            </div>
          </div>
        </DashboardLayout>
      </main>
    </div>
  )
}

export default TestimonialsPage
