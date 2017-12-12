"use strict"
let input = `189,1,111,246,254,2,0,120,215,93,255,50,84,15,94,62`
let test = `1,2,3`

let input2 = test.split("");
input = input.split(",");
for(let i = 0; i < input.length; i++){
    input[i] = parseInt(input[i]);
}
for(let i = 0; i < input2.length; i++){
    input2[i] = input2[i].charCodeAt(0);
}
console.log(input2);


function List(size) {
    let list = new Array();
    for(let i = 0; i<size; i++) {
        list.push(i);
    }
    return list;
}

function reverse(list, start, end) {
    end--;
    for(let i = start; i < end; i++) {
        let temp = list[i%list.length];
        list[i%list.length] = list[ (end%list.length) ]
        list[ (end--%list.length) ] = temp;
    }
}

function part1(input) {
    let solution = "";
    let skip = 0;
    let pos = 0;
    let list = new List(256);
    input.forEach(element => {
        reverse(list, pos, pos+element);
        pos += element+skip++;
    });
    solution = list[0] * list[1];
    return solution;
}

function part2(input) {
    let solution = new Array();
    let skip = 0;
    let pos = 0;
    let list = new List(256);
    input.push(17, 31, 73, 47, 23);
    for(let i = 0; i < 64; i++) {
        input.forEach(element => {
            reverse(list, pos, pos+element);
            pos += element+skip++;
        });
    }
    console.log(list);
    for(let i = 0; i < list.length; i+=16) {
        solution[i/16] = (list[i] ^list[i+1] ^list[i+2] ^list[i+3] ^list[i+4] ^list[i+5] ^list[i+6] ^list[i+7] ^list[i+8] ^list[i+9] ^list[i+10] ^list[i+11] ^list[+12] ^list[i+13] ^list[i+14] ^list[i+15]);
    }
    for(let i = 0; i < solution.length; i++) {
        solution[i] = solution[i].toString(16);
    }
    solution = solution.join("");
    return solution;
}

let solution = part1(input);
let solution2 = part2(input2);
document.getElementById("result").innerText = "The result for part 1 is: " + solution;
document.getElementById("result2").innerText = "The result for part 2 is: " + solution2;