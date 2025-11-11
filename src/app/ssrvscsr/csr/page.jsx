"use client"
import { useState } from "react";
//useState only works in Client Components. 
// Add the "use client" directive at the top of the file to use it. 
// Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component

const ClientSideRendering = () => {
    const [data, setData] = useState(0);
    return (
        <div>
            <h1>ClientSideRendering ={data}</h1>
            <button type="button" className="btn btn-primary" onClick={() => setData((sum) => sum + 1)}>Click</button>
        </div>
    )
}

export default ClientSideRendering