const EventEmitter = require('events');


class Logger extends EventEmitter {
    log(name){
        console.log(name);

        this.emit("AliyaanEvent", {id: 3, name: "Aliyaan", url: "http://digitalsaviour.in"});
    }
}

module.exports = Logger;