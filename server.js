const express = require("express");
const path = require("path");

const app = express();
//middleware para poner contenido de un form en req.body
app.use(express.urlencoded({
    extended:true
}))
//middleware para archivos
app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));
});
app.post("/saludar", function (req, res) {
    res.send(`Hola, ${req.body.nombre} "${req.body.apodo}" ${req.body.apellido} `);
    
})
app.listen("3000", function(){
    console.log("iniciado en puerto 3000");
});