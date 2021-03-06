const {readFile, getCommandFromLine, getPlaceCommandArgs} = require('./src/fileReader')
const {Robot} = require('./src/robot')
const {Table} = require('./src/table')

console.log('WELCOME TO THE TOY ROBOT')
console.log('Let me load the commands...')
let ToyTable = new Table(5, 5)
let ToyRobot = new Robot(ToyTable);
let data = readFile(process.argv[2])

if(data){
    console.log('Reading commands...')
    data.forEach(line => {
        handleCommands(line)
    })
    console.log('All commands have been excuted. Thanks for playing! :)')
}

/*
    handleCommands - read each line and determine command to execute
*/
function handleCommands(line){
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
            ToyRobot.left()
            break;
        case 'RIGHT':
            ToyRobot.right()
            break;
        case 'REPORT':
            let report = ToyRobot.report()
            console.log(`The ToyRobot is positioned at: ${report}`)
            break;
        default:
            console.log('Command is not recognized')
    }
}
