var express = require('express');
var mans = require('./model_ans');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(8000, function() {
    app.use(express.static('./static'));
});

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
