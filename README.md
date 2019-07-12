# Toy Robot Coding Challenge

Toy Robot Coding Challenge by Arjun Patel

This CLI application simulates a toy robot moving on a square tabletop. The robot is free to roam around the table, but is prevented from falling off.

The robot will listen for the following five commands:
- PLACE X,Y,F
    - will place the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- MOVE
    - will move the toy robot forward 1 unit, in it's current direction
- LEFT/RIGHT
    - will rotate the robot brientation by 90 degrees in the specified direction without changing the position of the robot.
- REPORT
    - will print the X,Y and Orientation of the robot


# Installation and Configuration
## Installation of NodeJS
The following installation instructions are written with the assumption that the user is familar with using a terminal.

This project has been created using Nodejs (v10.15.3)

1. You will be required to install node. This can be done using the Node Version Manager - [NVM](https://github.com/nvm-sh/nvm#installation-and-update) 

    There is a well written, simplified set of instructions to install NVM within the readme.

2. Once NVM has been installed, you will install node using NVM. The command below will install Nodejs (version 10.15.3)

        $ nvm install 10.15.3

    Verify the NodeJs version by using the following:

        $ nvm version

## Configuration of the project

3. Next clone the github repo ([Toy Robot Challenge](https://github.com/arjun555/toy-robot-coding-challenge)) to your computer

4. On your computer, go to the root folder of the project

5. To run this project, the required node modules will need to be installed. To do this, use the following command:

        $ npm install

    This command will install the required dependencies as listed in the package.json

## Run the application

The application can be run from the terminal:

        $ npm start

### Robot Commands File
A textfile (.txt) of the commands are read and processed. The command file is located in the /commands folder. This file can be edited to add desired commands from the list above 

## Running project tests
This project uses Jest for the testing framework. To run the tests, run the following command:

        $ npm test

# Design/Planning
- I did not want to create any visual representation for this challenge, so a Javascript CLI program was implemented.
- The commands are read from a textfile, located in the directory. I decided to lock this down to the commands.txt file, so that the user can edit commands within that file to their hearts desire.
- I seperated the Robot and Table as their own classes. 
    - The commands are actions that the robot must perform, so it made sense to have them within the Robot's class.
    - The Table class keeps the tables dimensions as parameters 
- The main function handleCommands was left in app.js, as for a small program I did not see the need to pull it out into it's own resource.
- I implemented TDD, by writing tests for my functions using Jest before implementing them in the code.
