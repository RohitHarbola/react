const express =require('express')
const app=express()
app.get("/api",(req,res)=>{
    res.json({
        "employees":[
            {"name":"Shyam", "email":"shayam@12gmail.com"},
            {"name":"Smith", "email":"smith@gmail.com"},
            {"name":"Mohan", "email":"smohan@65gmail.com"},
            {"name":"Ravi", "email":"Ravi@90gmail.com"},
            {"name":"Bob", "email":"Bobsmith22@gmail.com"}
        ]
    })
})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})