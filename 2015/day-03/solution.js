import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8").trim();

var array = input.split("")
const visited = new Set();

let x = 0;
let y = 0;

const cords = (x,y) => `${x},${y}`;

for(let i = 0; i<array.length; i++){
    switch(array[i]) {
        case ">": x++;
        break;
        case "<": x--;
        break;
        case"^": y++;
        break;
        case"v": y--;
        break;
    }

    if(!visited.has(cords(x,y))) {
        visited.add(cords(x,y));
    }
}
console.log(visited.size + 1);

// Part 2

const santa1 = new Set();
const santa2 = new Set();

let presents = 0;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

for(let i = 0; i<array.length; i++){
    if(i % 2 === 0) {
        switch(array[i]) {
            case ">": x1++;
            break;
            case "<": x1--;
            break;
            case"^": y1++;
            break;
            case"v": y1--;
            break;
        }
        if(!santa1.has(cords(x1,y1)) && !santa2.has(cords(x1,y1))) {
            santa1.add(cords(x1,y1));
        }
    } else {
        switch(array[i]) {
            case ">": x2++;
            break;
            case "<": x2--;
            break;
            case "^": y2++;
            break;
            case "v": y2--;
            break;
        }
        if(!santa1.has(cords(x2,y2)) && !santa2.has(cords(x2,y2))) {
            santa2.add(cords(x2,y2));
        }
    }
}

const allPresents = new Set([...santa1, ...santa2]);

console.log(allPresents.size);

