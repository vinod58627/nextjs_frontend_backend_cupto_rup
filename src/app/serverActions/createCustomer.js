"use server";

import Customer from "@/app/models/CustomerSchema";
import { DbConnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";

export async function createCustomer(formData) {
    await DbConnection();
    try {
        const user = {
            name: formData.get("name"),
            age: formData.get("age"),
            address: formData.get("address"),
            salary: formData.get("salary"),
            email: formData.get("email"),
        };

        const result = await Customer.create(user);
        return NextResponse.json({ data: result, message: `Customer (${result.name}) Created successfully` })
    }
    catch (error) {
        console.log(error)
    }
}

