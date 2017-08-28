const { createReadStream, createWriteStream, appendFile, writeFile } = require('fs');
const { Readable, Writable, Transform } = require('stream');

const makeUpperCase = Transform();

makeUpperCase._transform = (buffer, _, callback) => {
    // console.log(buffer.toString());
    callback(null, buffer.toString().toUpperCase());
}

const writeStream = Writable();

writeStream._write = (buffer, _, next) => {
    writeFile("newMessage.txt", buffer, (err) => {
        if (err) throw err 
            console.log("written to new message")
    })
    next();
}

// const readStream = Readable();

// readStream._read() = () => {

// }

createReadStream("message.txt").pipe(makeUpperCase).pipe(writeStream);