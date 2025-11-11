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
