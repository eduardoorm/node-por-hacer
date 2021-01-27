const { required } = require("yargs");

const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{
     let data = JSON.stringify(listadoPorHacer);
     
     fs.writeFile('db/data.json',data,(err)=>{
       if(err) throw new Error ('No se pudo grabar',err);
       
     })
}

const cargarDB =() =>{
    
    try {
        listadoPorHacer= require('../db/data.json');
    } catch (error) {
        listadoPorHacer=[];
    }

  
}

const getListado=()=>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    
    if(index >=0){
       listadoPorHacer[index].completado=completado;
       guardarDB();
       return true;
    }else{
        return false;
    }
}

const crear = (descripcion)=>{

    cargarDB();
    let porHacer={
        //descripcion = descripcion o 
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const borrar = (descripcion) =>{
     cargarDB();
     let eliminar = listadoPorHacer.filter(el=>el.descripcion!==descripcion)
     if(listadoPorHacer.length===eliminar.length){
        return false;
     }else{
         listadoPorHacer=eliminar;
         guardarDB();
         return true;
     }
   
}

module.exports={
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}