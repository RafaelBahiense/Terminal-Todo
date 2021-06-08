import readlineSync from 'readline-sync';

import add from "./Add.js";
import list from "./List.js";
import check from "./Check.js";
import pomodoro from "./Pomodoro.js";
import remove from "./Remove.js";
import {fileLoader, fileWrite} from "./FileHandler.js";

function app() {
    const options = ['add', 'list', 'check', 'pomodoro', 'remove'];
    const index = readlineSync.keyInSelect(options, 'Type your command');

    switch (index) {
        case 0:
            add(data);
            break;

        case 1:
            list(data);
            break;
        
        case 2:
            check(data);
            break;

        case 3:
            pomodoro(data);
            break;
        
        case 4:
            remove(data);
            break;

        default:
            running = false;
            break;
    }
    fileWrite(data)
}

let running = true;
let data = fileLoader() || { todos : [] };

while(running){
    app();
}