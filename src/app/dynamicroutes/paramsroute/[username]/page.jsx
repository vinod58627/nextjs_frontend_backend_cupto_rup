
const page = async({ params }) => {
    const { username } = await params
    console.log(username)
    return (
        <div>page - {username}</div>
    )
}

export default page