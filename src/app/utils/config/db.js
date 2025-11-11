const { default: mongoose } = require("mongoose")

export const DbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://vinod58627_db_user:149G1a0505@cluster0.q6wcbxh.mongodb.net/?appName=Cluster0")
        console.log("DB Connected")
    } catch {
        console.log("Error connecting to database")
    }
}