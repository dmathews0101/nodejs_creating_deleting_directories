var fs = require('fs');

// Deleting a file
fs.unlink('filetobedeleted.txt');

// Syncronous way - will block the code
// Making a directory
fs.mkdirSync('directoryname');

// Deleting a directory
fs.rmdirSync('directoryname');

// Asyncronous way
// Making a directory
fs.mkdir('newdirectory', function(){
    fs.readFile('sample.txt', 'utf8', function(err, data){
        fs.writeFile('./newdirectory/newfile.txt', data);
    })
})

// Deleting a Directory
fs.unlink('./newdirectory/newfile.txt', function(){
    fs.rmdir('new');
})