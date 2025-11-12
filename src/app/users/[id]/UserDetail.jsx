"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const UserDetail = ({ id, HandleAdd = null }) => {
    const [user, setUser] = useState({
        id: id,
        name: "",
        age: '',
        address: '',
        salary: "",
        email: ''
    });
    const router = useRouter();

    useEffect(() => {
        const getCustomer = async () => {
            try {
                const res = await fetch(`http://172.16.118.209:4000/api/customer/${id}`);
                const result = await res.json();
                console.log(result?.data)
                setUser({
                    id: id,
                    name: result?.data?.name,
                    age: result?.data?.age,
                    address: result?.data?.address,
                    salary: result?.data?.salary,
                    email: result?.data?.email
                })
            } catch (err) {
                console.error("Error fetching customer:", err);
            }
        };

        if (id) {
            getCustomer()
        }
    }, [id]);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = ""
            if (id) {
                res = await fetch(`http://172.16.118.209:4000/api/customer/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
            } else {
                res = await fetch("http://172.16.118.209:4000/api/customer", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
            }
            const result = await res.json();
            if (result) {
                if (HandleAdd) {
                    HandleAdd(result?.message)
                } else {
                    alert(result?.message)
                    router.back()
                }
            }
        } catch (err) {
            console.error("Error updating customer:", err);
        }
    };

    return (
        <div>
            <button type="button" className="btn btn-primary float-end" onClick={() => router.back()}>
                Back
            </button>
            {
                id && <>
                    <p>Name: {user?.name}</p>
                    <p>Age: {user?.age}</p>
                    <p>Address: {user?.address}</p>
                    <p>Salary: {user?.salary}</p>
                    <p>Email: {user?.email}</p>
                </>
            }

            <div className="d-flex justify-content-center w-75 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" value={user.name} onChange={HandleChange} />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control" name="age" value={user.age} onChange={HandleChange} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" value={user.address} onChange={HandleChange} />
                    </div>
                    <div>
                        <label htmlFor="salary">Salary</label>
                        <input type="text" className="form-control" name="salary" value={user.salary} onChange={HandleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={HandleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UserDetail;