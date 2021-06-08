import readlineSync from 'readline-sync';

export default function remove(data) {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), '\nWhat todo do you want to remove? ');
        data.todos.splice(index, 1);
    } else {
        console.log("No todo to remove");
        readlineSync.promptCL();
    }
}