"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Page = () => {
    const router = useRouter();
    const [data, setData] = useState([]);

    const getUsers = async () => {
        const res = await fetch('http://172.16.118.209:4000/api/customer');
        const result = await res.json();
        console.log(result)
        setData(result);
    };

    useEffect(() => {
        getUsers();
    }, []);
    const handleDelete = async (id) => {
        const res = await fetch(`http://172.16.118.209:4000/api/customer/${id}`, {
            method: 'DELETE'
        });
        const result = await res.json();
        if (result?.success) {
            alert(result?.message);
            getUsers();
        }
    };
    return (
        <div>
            <table className="table table-bordered mx-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Salary</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.message?.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>{item.salary}</td>
                            <td>{item.email}</td>
                            <td>
                                <button className="btn btn-sm btn-primary" onClick={() => router.push(`/users/${item._id}`)}>Edit</button>
                                <button className="btn btn-sm btn-danger ms-2" onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;










// "use client"
// import { useRouter } from 'next/navigation'

// const getUsers = async () => {
//     const res = await fetch('http://172.16.118.209:4000/api/customer')
//     return res.json()
// }

// const page = async () => {
//     const router = useRouter();
//     let data = await getUsers()
//     return (
//         <div>
//             <table className="table table-bordered mx-5">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Address</th>
//                         <th>Salary</th>
//                         <th>Email</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data?.message?.map((item, index) => (
//                         <tr key={item._id}>
//                             <td>{item.name}</td>
//                             <td>{item.age}</td>
//                             <td>{item.address}</td>
//                             <td>{item.salary}</td>
//                             <td>{item.email}</td>
//                             <td>
//                                 <button className="btn btn-sm btn-primary" onClick={() => router.push(`/users/${item._id}`)}>Edit</button>
//                                 <button className="btn btn-sm btn-danger ms-2">Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default page