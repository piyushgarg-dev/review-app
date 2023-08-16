import { NextPage } from "next";
import { useRouter } from "next/router";

import ProjectLayout from "@/layouts/ProjectLayout";

const DashboardPage: NextPage = () => {
    const router = useRouter()

    return (
        <ProjectLayout projectId={router.query.projectId as string}>
            <h1>
                {router.query.projectId}
            </h1>
        </ProjectLayout>
    );
};

export default DashboardPage;