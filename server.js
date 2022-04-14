const express =require('express');
const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/products')

const db= mongoose.connection;
db.on('error',(err)=> console.log(err.message))
db.once('open',()=> console.log('connected to mongoDB'))

const app = express();

// routes

const productRoutes= require('./routes/productsRoutes')

app.use('/products',productRoutes)
app.listen(3000, ()=>{
    console.log('I am running on the port 3000')
})