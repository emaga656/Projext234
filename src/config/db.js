import mongoose from "mongoose";


export default async ()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/phones")
    console.log("MongoDB успешно подключен");
   } catch (err) {
    console.log("Ошибка при подключение к MongoDB" , err.message);
    process.exit(1);
    }
};