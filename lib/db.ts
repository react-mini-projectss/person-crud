import mongoose from "mongoose";


export async function connectDB(): Promise<void> {
try {
if (mongoose.connection.readyState === 1) {
return;
}


await mongoose.connect(process.env.MONGO_URI as string, {
dbName: "crud_assignment",
});


console.log("MongoDB Connected");
} catch (error) {
console.error("MongoDB Connection Error:", error);
}
}