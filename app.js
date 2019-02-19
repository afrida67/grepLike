'use strict';

const fs = require('fs');
const readline = require('readline');

let [input, fileName] = process.argv.slice(2,4);

let rdFile = readline.createInterface({
    input: fs.createReadStream(fileName),
});

rdFile.on('line', (line) => {

     if((line.toLowerCase()).indexOf(input.toLowerCase()) > -1 ) {
        console.log(line);
    }
 });