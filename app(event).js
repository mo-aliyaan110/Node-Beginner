const Logger = require('./logger(event)');
const logIns = new Logger();

logIns.addListener("AliyaanEvent", (eventArg) => {
    console.log("Event name is Aliyaan: ", eventArg);
})

logIns.log("Hi Aliyaan");