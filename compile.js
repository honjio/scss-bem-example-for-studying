var fs = require('fs');
var sass = require('node-sass');

sass.render({
    file: './scss/style.scss',
    outFile: 'css',
    outputStyle: 'expanded'
}, function (err, result) {
    if (err)
        throw err;
    fs.writeFile(__dirname + '/css/aaa.css', result.css, function (err) {
        if (!err) {
            //file written on disk
        }
    });
});