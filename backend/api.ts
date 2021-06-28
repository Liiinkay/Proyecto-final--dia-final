//aplicar en el proyecto 
// npm install body-parser / npm install router / npm install jsonwebtoken

import { config, nextTick } from "process";

const express = require('express');
const mysql=require('mysql');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const app=express();

const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');

const Configuracion={
    nombre : "127.0.0.1",
    port : 3057
}

//configuracion de la conexion
let connection = mysql.createConnection({
    host     :   'localhost',
    user     :   'root',
    port     :   3306,
    password :   '',
    database :   'tiquetes'//nombre de la base de datos.
});

connection.connect(function(error:any){
    if(error){
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a mysqsl');
    //aqui debemos colocar las demas weas :V


});

app.use(cors());

//para leer datos de un formulario
app.use(bodyParser.urlencoded({ extended: false }));

//metodo get q hay q enlazar con la funcion que hizo el diego AAAAAA
app.get('/',(req:any,res:any)=>{
    res.send("Hola Mundo");
});

app.get('/mostrarDatos',(req:any,res:any)=>{
    connection.query("SELECT * FROM tickets",(req1:any,resultados:any)=>{
        //console.log(resultados);
        //res.send(resultados);
        res.status(200).send(resultados);
    });
});

app.get('/mostrarUsuarios',(req:any,res:any)=>{
    connection.query("SELECT * FROM usuarios",(req1:any,resultados:any)=>{
        //console.log(resultados);
        //res.send(resultados); 
        res.status(200).send(resultados);
    });
});


//insertar ticket
app.post('/crearTickets',bodyParser.json(),(req:any,res:any)=>{
    let estado=req.body.estado;
    let prioridad=req.body.prioridad;
    let categoria=req.body.categoria;
    let asunto=req.body.asunto;
    let descripcion=req.body.descripcion;    
    
    connection.query("INSERT INTO tickets(estado,prioridad,categoria,asunto,descripcion)VALUES('"+estado+"','"+prioridad+"','"+categoria+"','"+asunto+"','"+descripcion+"')",(req1:any,resultado:any)=>{
        res.status(201).send(JSON.stringify(`Ticket creado numero:${resultado.insertId}`));
    });
 
});

//insertar usuario
app.post('/crearUsuario',bodyParser.json(), (req:any,res:any)=>{
    let nombres=req.body.nombres;
    let apellidos=req.body.apellidos
    let rut=req.body.rut;
    let direccion=req.body.rut;
    let region=req.body.region;
    let comuna=req.body.comuna;
    let correo=req.body.correo;
    let password =req.body.password;
    //let passwordHash = await bcryptjs.hash(password,8);
    connection.query("INSERT INTO usuarios(nombres,apellidos,rut,direccion,region,comuna,correo,password)VALUES('"+nombres+"','"+apellidos+"','"+rut+"','"+direccion+"','"+region+"','"+comuna+"','"+correo+"','"+password+"')",(req1:any,resultado:any)=>{
        res.status(201).send(JSON.stringify(`Usuario creado numero:${resultado.insertId}`));
    });
});

//para modificar estado del ticket x id
app.put('/modificarEstado/:id',(req:any,res:any)=>{
    let id=req.params.id;//SE PUEDE PONER EL LET ID=REQ.PARAMS/BODY.ID;
    let estado=req.body.estado;
    connection.query('UPDATE tickets SET estado=? WHERE id=?',[estado,id],(req1:any,resultado:any)=>{
        res.status(200).send("Ticket actualizado");
    });
});

app.listen(Configuracion,()=>{
    console.log(`servidor escuchando localhost:${Configuracion.port}`);
});

