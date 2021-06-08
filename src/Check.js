import readlineSync from 'readline-sync';

export default function check(data) {
    if(data.todos.length > 0) {
        const index = readlineSync.keyInSelect(data.todos.map(todo => todo.name), 'What todo do you want to check/uncheck? ');
        if (index >=0) {
            data.todos[index].check = !data.todos[index].check;
            data.todos[index].check 
                ? data.todos[index].name = data.todos[index].name.replace("🔴", "🟢") 
                : data.todos[index].name = data.todos[index].name.replace("🟢", "🔴")
        }
    } else {
        console.log("No todo to uncheck");
        readlineSync.promptCL();
    }
}