const {readFile, getCommandFromLine, getPlaceCommandArgs} = require('./fileReader')
const {Robot} = require('./robot')
let data = readFile('testCommands.txt')
let ToyRobot = new Robot();
let table = {
    dimensions:{
        x: 5,
        y: 5
    }
}

data.forEach(line => {
    let command = getCommandFromLine(line)
    switch(command){
        case 'PLACE':
            let args = getPlaceCommandArgs(line)
            ToyRobot.place(args[0], args[1], args[2])
            break;
        case 'MOVE':
            ToyRobot.move()
            break;
        case 'LEFT':
            break;
        case 'RIGHT':
            break;
        case 'REPORT':
            let report = ToyRobot.report()
            console.log(`The ToyRobot is positioned at: ${report}`)
            break;
        default:
            console.log('Command is not recognized')
    }
})
