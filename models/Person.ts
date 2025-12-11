import mongoose, { Schema, Document } from "mongoose";


export interface IPerson extends Document {
name: string;
}


const PersonSchema: Schema = new Schema({
name: { type: String, required: true },
});


export default mongoose.models.Person || mongoose.model<IPerson>("Person", PersonSchema);