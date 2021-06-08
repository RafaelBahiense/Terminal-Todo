import readlineSync from 'readline-sync';

export default function pomodoro(data) {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), 'What todo do you want to have a pomodoro? ');
        if (data.todos[index].name.includes(" 🍅")){
            console.log("Already has a pomodoro");
            readlineSync.promptCL();
        } else {
            data.todos[index].name += " 🍅";
        }
    } else {
        console.log("No todo to pomodoro");
        readlineSync.promptCL();
    }
}