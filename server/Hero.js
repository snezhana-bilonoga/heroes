import mongoose from "mongoose";

const Hero = new mongoose.Schema({
    nickname: {type: String, unique: true, required: true},
    real_name: {type: String},
    origin_description: {type: String},
    superpowers: {type: String},
    catch_phrase: {type: String},
    images: {type: [String], required: true}
})

export default mongoose.model('Hero', Hero);