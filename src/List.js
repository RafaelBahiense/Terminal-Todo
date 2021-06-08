import readlineSync from 'readline-sync';
import chalk from 'chalk';

export default function list(data) {
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