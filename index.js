const info = require('./information.js');

let cowsay = require("cowsay");
    console.log(cowsay.say({
    text : `Hi, I'm ${info.name} and my campus is ${info.campus}`,
    e : "oO",
    T : "U "
}));
