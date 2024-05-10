const port = 3000;
const app = require("./app");
const mongoose = require("mongoose");


    
async function conection(){
    const urlMongoDb = "mongodb+srv://admin:12345@api.hbovskd.mongodb.net/apidb";
    await mongoose.connect(urlMongoDb)

    try{
        console.log("conection exitosa")
    }catch(err){
        console.log("conection Fallo: " +err)
    }

}

app.listen(port,()=>{
    console.log("server running at http://localhost:" + port);
})

conection()