import mongoose, { Schema } from "mongoose";

const CustomerSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        address: { type: String, required: true },
        salary: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

const Customer = mongoose.models?.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;
