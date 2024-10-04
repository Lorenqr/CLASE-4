import express from 'express'

const app = express()
app.use(express.json())
const puerto = 3000

let usuarios = [{
    "id":1,
    "nombre": "Lorena Ospina",
    "edad": 25,
}]

app.get('/usuarios', (req,res) => {
    res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
    console.log(req.body) //muestra en la consola el cuerpo de la solicitud

    const newUser = { ...req.body, id: usuarios.length +1 };
    usuarios.push(newUser);
    res.send('Se ha creado un usuario');
});

app.put('/usuarios/:id', (req, res) => {
    const idusuario = req.params.id
    console.log(`El usuario con id ${idusuario} fue actualizado`)
    res.send('Se actualizo el usuarios')
})


app.listen(puerto, () => {
    console.log(`Servidor esperando solicitud ${puerto}`)
})

