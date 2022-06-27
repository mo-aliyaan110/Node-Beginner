// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// const pathDetails = path.parse(__dirname);
const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.addListener("EventAliyaan", (eventArg) => {
        console.log("Aliyaan Event....!!! ", eventArg);
})
    
const logger = require('./logger');

logger('hey');










// const logger = require('./logger');
// logger("Hi");
// console.log("Starts----------------------");
// fs.readdir('./', (err, result) => {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })
// console.log("-----------ends-----------");
// console.log("The total memory in this machine is " + os.arch());
// console.log(pathDetails);




