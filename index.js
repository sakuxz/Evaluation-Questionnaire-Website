var express = require('express');
var mans = require('./model_ans');
var bodyParser = require('body-parser');
var app = express();

// var ip = process.env.OPENSHIFT_NODEJS_IP;
// var port = process.env.OPENSHIFT_NODEJS_PORT | 8080;
var ip = '0.0.0.0';
var port = 80;

var boyCount = 0;
var girlCount = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(port, ip);

app.use(express.static('./static'));

app.post('/ans', function(req, res, next) {

    var t = new mans(JSON.parse(req.body.answer));
    t.addAns().then(function(e) {
        res.send({
            status: true,
            data: e
        });
    }, function(e) {
        console.log(e);
        res.send({
            status: false,
            data: e
        });
    });

});

app.get('/ans', function(req, res, next) {

    var t = new mans();
    t.getAns().then(function(e) {
        res.send({
            status: true,
            data: e
        });
    }, function(e) {
        console.log(e);
        res.send({
            status: false,
            data: e
        });
    });

});

var situation = ['angry','worry','pride','surprise'];

app.get('/situation', function(req, res, next) {

    var situ;
    if(req.query.sex === "男"){
       situ = situation[boyCount%situation.length];
       boyCount++;
       boyCount = boyCount%situation.length;
    }else{
      situ = situation[girlCount%situation.length];
      girlCount++;
      girlCount = girlCount%situation.length;
    }
    res.send({
        status: true,
        data: situ
    });

});
