const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs")
const prisma = new PrismaClient()
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
app.use(
    session({
      secret: 'xAtZ4Ol4W9hV6lVg04JsNlwsFvxTbA9WI6jptSiy82yS8UyAMVEBk0MeQeKqi9BJN8u1RisI1LdBordarVY6GMF7AfKE6hnwTN6WrLQmgt9XsuDiKVdwGN3r8zZzly0o', // Change this to a secure random string
      resave: false,
      saveUninitialized: false,
    })
);
// Initialize Passport 
app.use(passport.initialize());
app.use(passport.session());
let host = "127.0.0.1"
let port = 3000;
app.get('/user/:username',async (req,res)=>{
    let {username} = req.params
    let testData = await prisma.user.findUnique({
        include: { 
            profile: true,
        },
        where: {
            username:username
        }
    })
    res.json(testData);
})
app.post('/auth/login',(req,res)=>{

})
app.post('/auth/signup',(req,res)=>{

})
app.listen(port,host,()=>{
    console.log(`Server started on ${host}:${port}`);
})