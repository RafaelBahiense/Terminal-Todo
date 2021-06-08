import fs from 'fs';

export function fileLoader() {
    if (fs.existsSync("todos.json")) {
       return {...JSON.parse(fs.readFileSync('todos.json',{encoding:'utf8', flag:'r'}))}
    } else {
        fs.writeFileSync( 'todos.json', JSON.stringify({ todos : [] }), { encoding: "utf8",flag: "w"})
    }
}

export function fileWrite(data) {
    fs.writeFileSync( 'todos.json', JSON.stringify(data), { encoding: "utf8",flag: "w"})
}