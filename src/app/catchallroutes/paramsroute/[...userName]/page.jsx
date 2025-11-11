//http://192.168.0.106:3000/catchallroutes/paramsroute/vinod/kumar/vinodkumar/vikram
//u will get CatchAllRoutes = vinodkumarvinodkumarvikram
//userName[0] = vinod
//userName[1] = kumar
//userName[2] = vinodkumar
//userName[3] = vikram
const CatchAllRoutes = async ({ params }) => {
    const { userName } = await params
    console.log(userName)
    return (
        <div>CatchAllRoutes = {userName}
            {
                userName?.map((user, index) => <div key={"insex" + index}>userName {index} = {user}</div>)
            }

            <div>userName[0] = {userName[1]}</div>
            <div>userName[1] = {userName[2]}</div>
            <div>userName[3] = {userName[3]}</div>
        </div>
    )
}

export default CatchAllRoutes