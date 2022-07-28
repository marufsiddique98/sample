var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var bp = require('body-parser');
//var session = require('express-session');
var { auth,requiresAuth } = require('express-openid-connect');

mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'boutique'
});

var app=express();

app.use(express.static('public'));
app.set('view engine','ejs');
// app.use(session,{secret:"secret"});
// app.use(
//     auth({
//         authRequired: false,
//         auth0Logout: true,
//         issuerBaseURL: 'https://dev-ow0u0hqx.us.auth0.com',
//         baseURL: 'http://localhost:3000',
//         clientID: 'wMYClH2knW8qIFXEYNOhtepEdGm4IDky',
//         secret: 'gjwQmZdjiFnev8yjwuWjTon5aA1PIj7A7ioxrVyvcCx7_VqlphpggstbBrBMmzMY',
//         clientSecret:'gjwQmZdjiFnev8yjwuWjTon5aA1PIj7A7ioxrVyvcCx7_VqlphpggstbBrBMmzMY',
//         idpLogout: true,
//     })
//   );

function connection(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'samnple'
    });
}

app.listen(3000);
app.use(bp.urlencoded({extends:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static("."));



//routes

app.get('/',function(req,res){
    return res.render('index',);   
});