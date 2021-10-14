const express = require('express');
const show = require('../helpers/response');
const router = express.Router()

const showRes = require('../helpers/response')
const conn = require('../config/driver')

let output;
const setOutput = (record) => {
    output = record;
}

router.get('/user', (req, res) => {
    conn.query('SELECT * FROM users', function(err, rows, fields){
        if (err) throw err

        res.send(showRes(0,rows.rows))
    })
});
router.get('/user/:id', async (req, res) => {
    conn.query("SELECT * FROM users WHERE id='"+req.params.id+"' limit 1", function (err,rows,fields) {
        if (err) throw err
        
        res.send(showRes(0,rows.rows[0]))
    })
});
router.post('/user', (req, res) => {
    conn.query("INSERT INTO users(name, email, address) VALUES('"+req.body.name+"','"+req.body.email+"','"+req.body.address+"') RETURNING *", function(err, rows, fields){
        if(err) throw err

        res.send(showRes(0,{id:rows.rows[0].id}));
    })
} );
router.put('/user/:id', (req, res)=>{
    var keys = Object.keys(req.body)
    var values = Object.values(req.body)
    var data = "";

    for(var i=0; i<keys.length; i++) data += keys[i]+"='"+values[i]+"', "

    conn.query("UPDATE users SET "+data.slice(0,-2)+" WHERE id='"+req.params.id+"'", function(err, rows, fields){
        if(err) throw err

        if(rows.rowCount) res.send(showRes(0,{id:req.params.id}))
        else res.send(showRes(103,''))
    })
} );
router.delete('/user/:id', (req, res) => {
    conn.query("DELETE FROM users WHERE id='"+req.params.id+"'",function(err, rows, fields){
        if(err) throw err

        if(rows.rowCount) res.send(showRes(0,{id: req.params.id}))
        else res.send(showRes(104,''))
    })
})

module.exports = router