"use strict"
let input = `2	8	8	5	4	2	3	1	5	5	1	2	15	13	5	14`

input = input.split("\t");
for(let i = 0; i < input.length; i++){
    input[i] = parseInt(input[i]);
}
console.log(input);

function part1(input) {
    let solution = 0;
    let banks = input.slice();
    let set = new Set();
    do{
        set.add(JSON.stringify(banks));
        let redistribute = banks[0];
        let chosen = 0;
        solution++;

        for(let i = 1; i < banks.length; i++){
            if(banks[i] > redistribute){
                redistribute = banks[i];
                chosen = i;
            }
        }
        banks[chosen] = 0;

        while(redistribute > 0) {
            console.log(banks.length)
            if(chosen >= banks.length-1) { chosen = 0; }
            else { chosen++; }
            banks[chosen] = banks[chosen] + 1;
            redistribute--;
        }
    }while(!set.has(JSON.stringify(banks)));

    return solution;
}

function part2(input) {
    let solution = 0;
    let banks = input.slice();
    let set = new Set();

    do{ // Find the start of the infinite loop
        set.add(JSON.stringify(banks));
        let redistribute = banks[0];
        let chosen = 0;

        for(let i = 1; i < banks.length; i++){
            if(banks[i] > redistribute){
                redistribute = banks[i];
                chosen = i;
            }
        }
        banks[chosen] = 0;

        while(redistribute > 0) {
            console.log(banks.length)
            if(chosen >= banks.length-1) { chosen = 0; }
            else { chosen++; }
            banks[chosen] = banks[chosen] + 1;
            redistribute--;
        }
    }while(!set.has(JSON.stringify(banks)));

    
    set = new Set();    // reset set
    do{
        set.add(JSON.stringify(banks));
        let redistribute = banks[0];
        let chosen = 0;
        solution++;

        for(let i = 1; i < banks.length; i++){
            if(banks[i] > redistribute){
                redistribute = banks[i];
                chosen = i;
            }
        }
        banks[chosen] = 0;

        while(redistribute > 0) {
            console.log(banks.length)
            if(chosen >= banks.length-1) { chosen = 0; }
            else { chosen++; }
            banks[chosen] = banks[chosen] + 1;
            redistribute--;
        }
    }while(!set.has(JSON.stringify(banks)));

    return solution;
}
let solution = part1(input);
let solution2 = part2(input);
document.getElementById("result").innerText = "The result for part 1 is: " + solution;
document.getElementById("result2").innerText = "The result for part 2 is: " + solution2;