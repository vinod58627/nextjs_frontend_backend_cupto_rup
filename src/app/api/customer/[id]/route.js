import { NextResponse } from "next/server";
import { DbConnection } from "@/app/utils/config/db";
import Customer from "@/app/models/CustomerSchema";

export const GET = async (req, context) => {
    try {
        const params = await context.params;
        const { id } = params;

        await DbConnection();

        const customer = await Customer.findById(id);
        if (!customer) {
            return NextResponse.json(
                { success: false, message: "Customer not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: customer });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};

export const DELETE = async (req, context) => {
    const params = await context.params;
    const { id } = params;
    await DbConnection();
    const existingCustomer = await Customer.findById(id);

    if (existingCustomer) {
        await Customer.deleteOne({ _id: id });
        return NextResponse.json({
            success: true,
            message: `Customer (${existingCustomer.name}) deleted successfully`,
        });;
    }
    return NextResponse.json({ success: false, data: "Not Deleted" });
}

export const PUT = async (req, context) => {
    const params = await context.params;
    const { id } = params;
    const body = await req.json();
    DbConnection()
    try {
        const { name, age, address, salary, email } = body
        const updatedCustomer = await Customer.findByIdAndUpdate(id, { name, age, address, salary, email });
        return NextResponse.json({ data: updatedCustomer, message: `Customer (${updatedCustomer.name}) Updated successfully` })
    } catch (error) {
        console.log(error)
    }

}
