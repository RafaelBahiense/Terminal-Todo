import chalk from 'chalk';
import readlineSync from 'readline-sync';

let running = true;
const todos = [];

function app() {
    const options = ['add', 'list', 'check', 'remove'];
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
            remove();
            break;

        default:
            running = false;
            break;
    }
}
function add() {
    todos.push({name: readlineSync.question('What do you want to do? '), check : false});
}

function list() {
    console.log("======================");
    todos.forEach((todo) => {
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
    if(todos.length > 0) {
        const index = readlineSync.keyInSelect(todos.map(todo => todo.name), 'What todo do you want to check/uncheck? ');
        todos[index].check = !todos[index].check;
    } else {
        console.log("No todo to uncheck");
        readlineSync.promptCL();
    }
}

function remove() {
    if(todos.length > 0) {
        const index = readlineSync.keyInSelect(todos.map(todo => todo.name), '\nWhat todo do you want to remove? ');
        todos.splice(index, 1);
    } else {
        console.log("No todo to remove");
        readlineSync.promptCL();
    }
}

while(running){
    app();
}