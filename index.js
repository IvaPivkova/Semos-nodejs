const express = require('express');
const app = express();
const port = 8000;
const myParser = require('body-parser');
const user = require('./user');
const session = require('express-session');

var sess;

app.listen(port);

app.set('view engine', 'ejs');
app.use(myParser.urlencoded({extended: true}));
app.use(session({secret: 'semos'}))

var users = [];


app.get('/', (req, res) =>{
	var name = 'iva';

	res.render('index', { firstName: name });

});

app.get('/login', (req, res) =>{

	res.render('login');
});

app.post('/login', (req, res) =>{
	let email = req.body.email;
	let password = req.body.pass;
	console.log(email);
	console.log(password);

	sess = req.session;

	sess.email = email;

	res.redirect('/profile');


});


app.get('/signup', (req, res) =>{

	res.render('signup');
});


app.post('/signup', (req, res) =>{
	let name = req.body.fname;
	let age = req.body.age;
	let email = req.body.email;
	let pass = req.body.pass;

	var u = new user.create(name, age, email, pass, 'user');
	users.push(u);

	res.redirect('/');

});

app.get('/profile', (req, res) =>{
	sess = req.session;

	if(sess.email){
		res.render('profile');
	}
	else{
		res.redirect('/');
	}

	
});

app.get('/logout', (req, res) =>{
	req.session.destroy(err => {
		if(err) console.log(err);
		else{
			res.redirect('/login');
		}
	})
})
