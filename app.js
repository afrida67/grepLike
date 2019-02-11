'use strict';

const fs = require('fs');
const readline = require('readline');

let rdFile = readline.createInterface({
    input: fs.createReadStream('match.txt'),
});

let input = process.argv[2];

rdFile.on('line', (line) => {

     if((line.toLowerCase()).split(" ").indexOf(input.toLowerCase()) > -1) {
        console.log(line);
        return true;
    }
     else{
        return false;
     }
 });