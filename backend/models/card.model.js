import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    }
})

const Card = mongoose.model('Card', CardSchema);

export default Card