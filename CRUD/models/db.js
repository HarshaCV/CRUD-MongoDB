const mongoose = require('mongoose');

const url = "mongodb+srv://Harsha:Harshacv@311099@cluster0.c0dpp.mongodb.net/EmployeeDB?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');