const EventEmitter = require('events');
const emitter = new EventEmitter();


function logger(name){
    console.log(name);


    
    emitter.emit("EventAliyaan", {id: 3, url: "https://digitalsaviour.in"});
    console.log("Event is emitted...!");
}



module.exports = logger;