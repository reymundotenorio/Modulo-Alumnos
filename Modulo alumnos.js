const express = require('express');
const servidor = express();
const colors = require('colors');

servidor.listen(5000,()=>{console.log(colors.blue('El servidor esta activado'))});

const alumnos = [
    {"id":0,"nombre":"Ulises Efrain","sexo":"H","email":"UE@gmail.com","idPromedio":"0"},
    {"id":1,"nombre":"Eslie Lopez","sexo":"M","email":"EL@gmail.com","idPromedio":"1"},
    {"id":2,"nombre":"Jose de Jesus","sexo":"H","email":"JJ@gmail.com","idPromedio":"2"},
    {"id":3,"nombre":"Mariam Hernandez","sexo":"M","email":"MH@gmail.com","idPromedio":"3"},
    {"id":4,"nombre":"Cesar Ricardo","sexo":"H","email":"CR@gmail.com","idPromedio":"4"},
    {"id":5,"nombre":"Arnulfo Algo","sexo":"M","email":"AA@gmail.com","idPromedio":"5"},
    {"id":6,"nombre":"Carlos Becerra","sexo":"H","email":"CB@gmail.com","idPromedio":"6"},
    {"id":7,"nombre":"Jose Antonio","sexo":"M","email":"JA@gmail.com","idPromedio":"7"},
    {"id":8,"nombre":"Efrain Ulises","sexo":"H","email":"EU@gmail.com","idPromedio":"8"},
    {"id":9,"nombre":"Lopez Eslie","sexo":"M","email":"LE@gmail.com","idPromedio":"9"},
    {"id":10,"nombre":"Jesus de Jose","sexo":"H","email":"JJ2@gmail.com","idPromedio":"10"},
    {"id":11,"nombre":"Hernandez Mariam","sexo":"M","email":"HM@gmail.com","idPromedio":"11"},
    {"id":12,"nombre":"Ricardo Cesar","sexo":"H","email":"RC@gmail.com","idPromedio":"12"},
    {"id":13,"nombre":"Algo Arnulfo","sexo":"H","email":"AA2@gmail.com","idPromedio":"13"},
    {"id":14,"nombre":"Becerra Carlos","sexo":"H","email":"BC@gmail.com","idPromedio":"14"},
    {"id":15,"nombre":"Antonio Jose","sexo":"M","email":"AJ@gmail.com","idPromedio":"15"} ,
    {"id":16,"nombre":"Becerra Carlos","sexo":"H","email":"BC@gmail.com","idPromedio":"16"},
];

const promedios = [
    {"idPromedio":"0","calificacion":"10","idMateria":"0"},
    {"idPromedio":"1","calificacion":"9","idMateria":"1"},
    {"idPromedio":"2","calificacion":"8","idMateria":"2"},
    {"idPromedio":"3","calificacion":"10","idMateria":"3"},
    {"idPromedio":"4","calificacion":"9","idMateria":"4"},
    {"idPromedio":"5","calificacion":"8","idMateria":"5"},
    {"idPromedio":"6","calificacion":"10","idMateria":"6"},
    {"idPromedio":"7","calificacion":"9","idMateria":"7"},
    {"idPromedio":"8","calificacion":"8","idMateria":"8"},
    {"idPromedio":"9","calificacion":"10","idMateria":"9"},
    {"idPromedio":"10","calificacion":"9","idMateria":"10"},
    {"idPromedio":"11","calificacion":"8","idMateria":"11"},
    {"idPromedio":"12","calificacion":"9","idMateria":"12"},
    {"idPromedio":"13","calificacion":"8","idMateria":"13"},
    {"idPromedio":"14","calificacion":"10","idMateria":"14"},
    {"idPromedio":"15","calificacion":"9","idMateria":"15"},
    {"idPromedio":"16","calificacion":"8","idMateria":"16"}
];

const materias = [
    {"idMateria":"0","materia":"Espanol"},
    {"idMateria":"1","materia":"Matematicas"},
    {"idMateria":"2","materia":"Ingles"},
    {"idMateria":"3","materia":"Geografia"},
    {"idMateriao":"4","materia":"Quimica"},
    {"idMateria":"5","materia":"Educacion civica y etica"},
    {"idMateria":"6","materia":"Programacion movil"},
    {"idMateria":"7","materia":"Programacion web"},
    {"idMateria":"8","materia":"Programacion para windows"},
    {"idMateria":"9","materia":"Programacion en la nube"},
    {"idMateria":"10","materia":"Estructuras de datos"},
    {"idMateria":"11","materia":"Ciberseguridad"},
    {"idMateria":"12","materia":"Logica de datos"},
    {"idMateria":"13","materia":"Historia"},
    {"idMateria":"14","materia":"Educacion fisica"},
    {"idMateria":"15","materia":"Expresion oral y escrita"},
    {"idMateria":"16","materia":"Formacion socicultural"}
];

servidor.get('/alumnos',(req,res)=>{
    res.send(alumnos);
    res.end();
});

servidor.get('/promedios',(req,res)=>{
    res.send(promedios);
    res.end();
});

servidor.get('/materias',(req,res)=>{
    res.send(materias);
    res.end();
});

// servidor.get('/alumno/:id',(req,res)=>{
//     const idAlumno = req.params.id;
//     res.send(alumnos[idAlumno]);
//     res.end();
// });

servidor.get('/alumno/:id',(req,res)=>{
    const idAlumno = req.params.id;
    res.send(alumnos[idAlumno].nombre);
    res.end();
});

servidor.get('/promedios/:id',(req,res)=>{
    const idPromedio = req.params.id;
    res.send(promedios[idPromedio]);
    res.end();
});

servidor.get('/promedios/:id',(req,res)=>{
    const idPromedio = req.params.id;
    res.send(promedios[idPromedio].calificacion);
    res.end();
});

servidor.get('/materias/:id',(req,res)=>{
    const idMateria = req.params.id;
    res.send(materias[idMateria]);
    res.end();
});

servidor.get('/materias/:id',(req,res)=>{
    const idMateria = req.params.id;
    res.send(materias[idMateria].materia);
    res.end();
});

servidor.post('/alumnos',express.json({type:'*/*'}),(req,res)=>{
    const nuevoAlumno = req.body;
    alumnos.push(nuevoAlumno);
    res.status(201).send({"mensaje":"Se agrego el recurso alumno"});
    res.end();
});

servidor.post('/promedios',express.json({type:'*/*'}),(req,res)=>{
    const nuevoPromedio = req.body;
    promedios.push(nuevoPromedio);
    res.status(201).send({"mensaje":"Se agrego el recurso promedio"});
    res.end();
});

servidor.post('/materias',express.json({type:'*/*'}),(req,res)=>{
    const nuevoMaterias = req.body;
    materias.push(nuevoMaterias);
    res.status(201).send({"mensaje":"Se agrego el recurso materia"});
    res.end();
});

servidor.delete('/alumnos/:id',(req,res)=>{
    const eliminarAlumno = req.params.id;
    const eliminarPromedio = req.params.id;
    if(alumnos[eliminarAlumno]){
        alumnos.splice(eliminarAlumno,1);
        res.json({"mensaje":"Se elimino el recurso alumno"});
    }else{
        res.status(404).json({"mensaje":"No se encuentra el recurso solicitado"});
    }
    res.end();
});

servidor.delete('/promedios/:id',(req,res)=>{
    const eliminarPromedio = req.params.id;
    if(promedios[eliminarPromedio]){
        promedios.splice(eliminarPromedio,1);
        res.json({"mensaje":"Se elimino el recurso promedio"});
    }else{
        res.status(404).json({"mensaje":"No se encuentra el recurso solicitado"});
    }
    res.end();
});

servidor.delete('/materias/:id',(req,res)=>{
    const eliminarMateria = req.params.id;
    if(materias[eliminarMateria]){
        materias.splice(eliminarMateria,1);
        res.json({"mensaje":"Se elimino el recurso materia"});
    }else{
        res.status(404).json({"mensaje":"No se encuentra el recurso solicitado"});
    }
    res.end();
});




