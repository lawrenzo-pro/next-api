const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()
const express = require("express");
const session = require('express-session');
const app = express();
app.use(
    session({
      secret: 'xAtZ4Ol4W9hV6lVg04JsNlwsFvxTbA9WI6jptSiy82yS8UyAMVEBk0MeQeKqi9BJN8u1RisI1LdBordarVY6GMF7AfKE6hnwTN6WrLQmgt9XsuDiKVdwGN3r8zZzly0o', // Change this to a secure random string
      resave: false,
      saveUninitialized: false,
    })
);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
let host = "127.0.0.1"
let port = 3000;
app.get('/user/:username',async (req,res)=>{
    let {username} = req.params
    let testData = await prisma.user.findUnique({
        select: { 
            profile: true,
        },
        where: {
            username:username
        }
    })
    let testUser = await prisma.user.findUnique({
        select: { 
            username: true,
        },
        where: {
            userId:testData.profile.user_id
        }
    })
    res.json(testUser);
})
app.post('/auth/login',(req,res)=>{
    console.log(req.query)
})
app.post('/auth/signup',(req,res)=>{
    console.log(req.query);
})
app.listen(port,host,()=>{
    console.log(`Server started on ${host}:${port}`);
})