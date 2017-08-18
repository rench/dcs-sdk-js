const child_process=require("child_process");

var unameAll=child_process.execSync("uname -a").toString();

function get(){
    if(unameAll.match(/raspberrypi/)){
        return "raspberrypi";
    }
    if(unameAll.match(/Darwin/)){
        return "macos";
    }
    if(unameAll.match(/NanoPi-NEO-Plus2/)){
        return "npi";
    }
    return "unknown";
}

module.exports.get=get;
