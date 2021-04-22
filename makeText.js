/** Command-line tool to generate Markov text. */
const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require("./markov");


function file(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('ERROR READING FILE - ', err);
            process.exit(1)
        }
        let machine = new MarkovMachine(data);
        console.log(machine.makeText())
    })
}

async function webURL(url) {
    try {

        let res = await axios.get(url);

        let machine = new MarkovMachine(res.data);
        console.log(machine.makeText());


    } catch (e) {
        console.log('ERROR IN ASYNC CALL TO URL - ', e);
        process.exit(1);
    }
}



if (process.argv[2] === 'file') {

    file(process.argv[3]);

} else if (process.argv[2] === 'url') {

    webURL(process.argv[3]);

} else {
    console.log('ERROR IN COMMAND')
}