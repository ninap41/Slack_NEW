var mongoose = require('mongoose');

var users = require('../controllers/users.js');
var User = mongoose.model('User');



module.exports = function(app) {

    app.get('/', function(req, res,err) {
            res.render('index');
            res.send('index route ago');         
    })

    app.post('/api/register', function(req,res,err){
            users.register(req, res)
    })

    app.get('/api/allUsers', function (req, res){
        users.find(req, res);
    });
  
  
    app.post('/users/search', users.filter);
    
    app.get('/success', function(req, res) {
        users.show(req, res);      
    });

    app.post('/api/login', function(req,res){
        users.login(req, res)
})

app.get('/api/logout', function(req,res){
    users.logout(req, res)
    res.render()
}) 
app.get('/delete/:id', function(req,res){    //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
    users.delete(req, res)   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON
});   //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON //WORK ON WORK ON WORK ON WORK ON



//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL//ALL ALL ALL ALL ALL ALL
   app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angular-app/dist/index.html"))
});

}