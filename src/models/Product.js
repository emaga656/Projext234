import mongoose, { model } from "mongoose";
import { type } from "node:os";
import { title } from "node:process";
import { spec } from "node:test/reporters";


const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true , "Название товара не может быть пустой"],
        trim: true
    },
    model: {
        type:String,
        required: [true, "Модель телефона не может быть пустым"],
        trim: true
    },
    title: {
        type:String,
        required: [true, "Название товара не может быть пустым"],
        trim: true,
    },
    description: {
        type:String,
        required: [true, "Описание товара не может быть пустым"],
        trim: true,
    },
    price: {
        type:Number,
        required: [true, "Цена товара обязательно к заполнению"],
        min: 0
    },
    quantuty: {
        type: Number,
        required: true, 
        min: 0,
        default: 0
    },
    Storage: {
        type:String,
        enum: [ "64GB" , "128GB" , "256GB" , "512GB" , "1TB" ]
    },
    color:{
        type: String,
        required: true 
    },
    specs: {
        screen: { type: String },
        camera: { type: String },
        battery: { type: String},
        os: { type: String },
        cpu: { type: String},
        ram: { type: String},
    },
    images: [{type: String }]
});

export default mongoose.model("Product" , productSchema)