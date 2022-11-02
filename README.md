# Module used
var fs = require('fs');

# Deleting a file
fs.unlink('filetobedeleted.txt');

# Command
node creating_deleting_directories

---
# Syncronous way - will block the code

# Making a directory
fs.mkdirSync('directoryname');

# Deleting a directory
fs.rmdirSync('directoryname');

---
# Asyncronous way - will not block code, preferred way, must use callback function to do something, once this has been completed 

# Make Directory
fs.mkdir('newdirectory', function(){
    fs.readFile('sample.txt', 'utf8', function(err, data){
        fs.writeFile('./newdirectory/newfile.txt', data);
    })
})

# Delete Directory
fs.unlink('./newdirectory/newfile.txt', function(){
    fs.rmdir('new');
})
