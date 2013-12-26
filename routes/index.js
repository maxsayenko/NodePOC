
/*
 * GET home page.
 */
 
 var app = require('express')();
 
 var path = require('path');
 var dirName = path.dirname(process.mainModule.filename);

exports.index = function(req, res){
    console.log(path.dirname(process.mainModule.filename));
    console.log(app.locals);
    console.log(path.join(app.locals.settings.views, 'views/index.hjs'));
    res.render('index');
    //res.sendfile(path.join(dirName, 'views/index.hjs'));
};