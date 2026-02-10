import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8").trim();

var array = input.split("")

var counter = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] == "("){
        counter++
    }
    else{
        counter--
    }
    if(counter == -1){
        console.log(i+1);
        
    }
}
console.log(counter);

