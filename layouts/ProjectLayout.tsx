import { redirect } from "next/navigation";
import React from "react";

import Navbar from "@/components/Navbar";

export default function ProjectLayout({
    children, projectId
}: {
    children: React.ReactNode, projectId: string
}) {
    // const { userId } = auth()

    // if (!userId) redirect("/sign-in")

    // const project = await prismadb.project.findFirst({
    //     where: {
    //         id: projectId,
    //         userId: userId
    //     }
    // })

    // if (!project) redirect('/')

    return (
        <>
            <Navbar />
            {children}
        </>
    )

}