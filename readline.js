//import the readline module

const readline = require('readline');



// create an interface to readdata from the standard input stdin and std output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//funtion to ask the user name
function askName() {

    rl.question("what is ur name? ",
        function (name) {
            console.log(`hello,${name}!`);
            askFavoriteLanguage();
        });

}
// funtion to ask user favorite program langauge

function askFavoriteLanguage() {

    rl.question("whats ur favorite programing language?", function (language) {
        console.log(`${language}is a great choice!`);
        rl.close();//close the  interface
    });


}


//start conversation

console.log("welcome to simple command line interface example!");
askName();