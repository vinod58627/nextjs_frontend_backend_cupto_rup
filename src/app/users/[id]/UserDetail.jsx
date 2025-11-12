"use client"
import { useEffect } from 'react'
const UserDetail = ({ id }) => {
    const getCustomer = async () => {
        const res = await fetch(`http://172.16.118.209:4000/api/customer/${id}`)
        const result = await res.json()
        console.log(result?.data)
    }
    useEffect(() => {
        if (id) {
            getCustomer()
        }
    }, [id])
    return (
        <div>UserDetail</div>
    )
}

export default UserDetail