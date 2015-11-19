(function () {
    var app, config, serveStatic;
    
    var adHookUp = require('./adurinoHookUp');
    var io = require('./plotter');
    var express = require('express');

    app = express();
    var http = require('http').Server(app);
    serveStatic = require('serve-static');


    config = require('./config');
    app.use(serveStatic(config.bowerPath));
    app.use(serveStatic(config.rootPath + "/client"));

    io.init(http);
    
    adHookUp();

    
    http.listen(process.env.PORT || 3000);
    console.log("Listening on http://localhost:" + (process.env.PORT || '3000'));


}).call(this);


