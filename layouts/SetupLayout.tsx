export default function SetupLayout({ children }: { children: React.ReactNode }) {
    // const { userId } = auth()

    // if (!userId) redirect("/sign-in")

    // const project = await prismadb.project.findFirst({
    //     where: {
    //         userId: userId
    //     }
    // })

    // if (project) redirect(`/${project.id}`)

    return (
        <>
            {children}
        </>
    )
}