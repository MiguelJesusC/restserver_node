const express = require('express')
const app = express()
const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt');
const _ = require('underscore')

//////////////////////////////////////////////////////
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/////////////////////////////////////////////////////

app.get('/',function(req,res){
    res.status(400).json({
        ok: true,
        mensaje: 'This is home'
    });
})

app.post('/usuario', function(req, res) {
    let body = req.body

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })

    usuario.save((err, usuarioDB) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok:true,
            usuario: usuarioDB
        })
    })


})

app.get('/usuario', function(req, res) {
    Usuario.find({}).limit(5).exec((err, usuarios) =>{
        if(err){
            res.status(400).json({
                ok:false,
                err
            })
        }

        res.json({
            ok:true,
            usuarios
        })
    })
});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre','email','img','role','estado'])

    Usuario.findByIdAndUpdate(id, body, {new: true},(err, usuarioDB) =>{
      
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        } 
        res.json({
            ok:true,
            usuario: usuarioDB
        })
    })

    // res.json({
    //     id
    // });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

module.exports = app; 