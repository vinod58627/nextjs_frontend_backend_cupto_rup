import UserDetail from './UserDetail'

const page = async ({ params }) => {
    const { id } = await params

    return (
        <UserDetail id={id} />
    )
}

export default page