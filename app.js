const express = require('express');

const debug = require('debug')('express');

const app = express();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3010;

app.get('/', (req, res)=>{
    debug(`${req.headers['user-agent']} has accesses to root URL`);
    res.send('hello from the node.js web server');
    });
    app.listen(EXPRESS_PORT, err =>{
        if(!err){
            debug(`Express web server is running at port${EXPRESS_PORT}`)
        }
    });