import { NextResponse } from "next/server"
import { DbConnection } from "@/app/utils/config/db"
import Customer from "@/app/models/CustomerSchema"


export const GET = async () => {
    DbConnection()
    const customers = await Customer.find({});
    return NextResponse.json({ message: customers })
}

export const POST = async (req, res) => {
    const body = await req.json();
    DbConnection()
    try {
        const { name, age, address, salary, email } = body
        const result = await Customer.create({ name, age, address, salary, email })
        return NextResponse.json({ data: result })
    } catch (error) {
        console.log(error)
    }
}