import readlineSync from 'readline-sync';

export default function add(data) {
    data.todos.push({name: ` 🔴 ${readlineSync.question('What do you want to do? ')}`, check : false});
}