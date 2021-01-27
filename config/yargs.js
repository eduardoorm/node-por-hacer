const { required } = require("yargs");
const descripcion={
        demand:true,
        desc:'Descripcion de la tarea por hacer',
        alias: 'd'
    
}

const completado = {
    default:true,
    alias: 'c',
    desc:'Marca como completado o pendiente la tarea'
}

const argv =require('yargs')
    .command('crear','Crea un elemento por hacer',{
        descripcion
        
    })
    .command('actualizar','Actualiza el estado compeltado de una tarea',{
        descripcion,completado
    })
    .command('borrar','Borra un elemento',{
        descripcion
    })
    .help()
    .argv;

module.exports={
    argv
}

