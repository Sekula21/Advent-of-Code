import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8").trim();

var array = input.split("\n")
var paper = 0;
var ribbon = 0;

for(let i = 0; i<array.length; i++){
    var tempArray = array[i].split("x")
    var l = parseInt(tempArray[0])
    var w = parseInt(tempArray[1])
    var h = parseInt(tempArray[2])

    paper = paper + 2*l*w + 2*w*h + 2*h*l

    if(l*w < l*h && l*w < w*h){
        paper = paper + l*w
    }else if(l*h < w*h){
        paper = paper + l*h
    }else{
        paper = paper + w*h
    }

    let bow = l * w * h
    let wrap = 0
    
    if(l<=h && w<=h){
        wrap = l + l + w + w 
    }else if(w<=l && h<=l){
        wrap = w + w + h + h 
    }else{
        wrap = l + l + h + h 
    }
    ribbon += bow + wrap 

}
console.log(paper)
console.log(ribbon)

