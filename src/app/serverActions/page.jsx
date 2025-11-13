"use client";

import { useState } from "react";
import { createCustomer } from "./createCustomer";

export default function ServerActions() {
    const [user, setUser] = useState({
        name: "",
        age: "",
        address: "",
        salary: "",
        email: ""
    });

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-50 mx-auto">
            {/* 🚀 This is the correct way */}
            <form action={createCustomer}>
                <div>
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" value={user.name} onChange={HandleChange} />
                </div>

                <div>
                    <label>Age</label>
                    <input className="form-control" type="text" name="age" value={user.age} onChange={HandleChange} />
                </div>

                <div>
                    <label>Address</label>
                    <input className="form-control" type="text" name="address" value={user.address} onChange={HandleChange} />
                </div>

                <div>
                    <label>Salary</label>
                    <input className="form-control" type="text" name="salary" value={user.salary} onChange={HandleChange} />
                </div>

                <div>
                    <label>Email</label>
                    <input className="form-control" type="text" name="email" value={user.email} onChange={HandleChange} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}
