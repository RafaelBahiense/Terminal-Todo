import readlineSync from 'readline-sync';

export default function check(data) {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), 'What todo do you want to check/uncheck? ');
        data.todos[index].check = !data.todos[index].check;
    } else {
        console.log("No todo to uncheck");
        readlineSync.promptCL();
    }
}