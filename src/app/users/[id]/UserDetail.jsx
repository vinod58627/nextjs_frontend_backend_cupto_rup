"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const UserDetail = ({ id }) => {
    const [user, serUser] = useState({})
    const router = useRouter();
    const getCustomer = async () => {
        const res = await fetch(`http://172.16.118.209:4000/api/customer/${id}`)
        const result = await res.json()
        serUser(result?.data)
    }
    useEffect(() => {
        if (id) {
            getCustomer()
        }
    }, [id])
    return (
        <div>
            <button type="button" className="btn btn-primary float-end" onClick={() => router.back()}>Back</button>
            <p>Name : {user?.name}</p>
            <p>Age : {user?.age}</p>
            <p>Address : {user?.address}</p>
            <p>Salary : {user?.salary}</p>
            <p>Email : {user?.email}</p>
        </div>
    )
}

export default UserDetail