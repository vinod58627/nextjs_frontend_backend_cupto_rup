
//useState only works in Client Components. Add the "use client" 
// directive at the top of the file to use it. Read more: 
// https://nextjs.org/docs/messages/react-client-hook-in-server-component
const ServerSideRendering = () => {
    // const [data, setData] = React.useState(0);
    return (
        <div>
            <h1>ServerSideRendering = To Display Static Page.</h1>
            <h6>If you want to see consloe.logs you can only found in terminal only</h6>
            {/* <button type="button" className="btn btn-primary" onClick={() => setData(data + 1)}>Click</button> */}
        </div>
    )
}

export default ServerSideRendering