import chalk from 'chalk';
import readlineSync from 'readline-sync';
import fs from 'fs';

let running = true;
let data = { todos : [] };

function app() {
    const options = ['add', 'list', 'check', 'pomodoro', 'remove'];
    const index = readlineSync.keyInSelect(options, 'Type your command');

    switch (index) {
        case 0:
            add();
            break;

        case 1:
            list();
            break;
        
        case 2:
            check();
            break;

        case 3:
            pomodoro();
            break;
        
        case 4:
            remove();
            break;

        default:
            running = false;
            break;
    }
    fileWrite()
}

function add() {
    data.todos.push({name: readlineSync.question('What do you want to do? '), check : false});
}

function list() {
    console.log("======================");
    data.todos.forEach((todo) => {
        if(todo.check){
            console.log(chalk.green(todo.name))
        } else {
            console.log(chalk.red(todo.name))
        }

    });
    console.log("======================");
    readlineSync.promptCL();
}

function check() {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), 'What todo do you want to check/uncheck? ');
        data.todos[index].check = !data.todos[index].check;
    } else {
        console.log("No todo to uncheck");
        readlineSync.promptCL();
    }
}

function pomodoro() {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), 'What todo do you want to have a pomodoro? ');
        if (data.todos[index].name.includes(" 🍅")){
            console.log("No todo to pomodoro");
            readlineSync.promptCL();
        } else {
            data.todos[index].name += " 🍅";
        }
    } else {
        console.log("No todo to pomodoro");
        readlineSync.promptCL();
    }
}

function remove() {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), '\nWhat todo do you want to remove? ');
        data.todos.splice(index, 1);
    } else {
        console.log("No todo to remove");
        readlineSync.promptCL();
    }
}

function fileLoader() {
    fs.existsSync("todos.json")
    ? data = {...JSON.parse(fs.readFileSync('todos.json',{encoding:'utf8', flag:'r'}))}
    : fs.writeFileSync( 'todos.json', JSON.stringify(data), { encoding: "utf8",flag: "w"})
}

function fileWrite() {
    fs.writeFileSync( 'todos.json', JSON.stringify(data), { encoding: "utf8",flag: "w"})
}

fileLoader()

while(running){
    app();
}