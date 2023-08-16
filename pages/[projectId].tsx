import ProjectLayout from "@/layouts/ProjectLayout";
import { useRouter } from "next/router";

const DashboardPage: React.FC = () => {
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