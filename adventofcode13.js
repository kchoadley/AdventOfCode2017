"use strict"
let input = `0: 4
1: 2
2: 3
4: 5
6: 6
8: 4
10: 8
12: 6
14: 6
16: 8
18: 8
20: 6
22: 8
24: 9
26: 8
28: 8
30: 12
32: 12
34: 10
36: 12
38: 12
40: 10
42: 12
44: 12
46: 12
48: 12
50: 12
52: 14
54: 14
56: 12
58: 14
60: 14
62: 14
64: 17
66: 14
70: 14
72: 14
74: 14
76: 14
78: 18
82: 14
88: 18
90: 14`

input = input.split("\n");

function part1(input) {
    let solution = 0;
    input.forEach( element => {
        let parsed = element.split(": ");
        let depth = parseInt(parsed[0]);
        let range = parseInt(parsed[1]);
        let divisor = ((range-1) * 2);
        if(depth%divisor == 0) {
            solution += depth * range;
        }
    })
    return solution;
}

function part2(input) {
    let offset = 1;
    let not_done = true;
    while(not_done) {
        for(let i = 0; i < input.length; i ++) {
            let parsed = input[i].split(": ");
            let depth = parseInt(parsed[0]) + offset;
            let range = parseInt(parsed[1]);
            let divisor = ((range-1) * 2);
            if(depth%divisor == 0) {
                offset++;
                break;
            }
            if(i == input.length-1) {   // passed all depths
                not_done = false;
            }
        }
    }
    return offset;
}

let solution = part1(input);
let solution2 = part2(input);
document.getElementById("result").innerText = "The result for part 1 is: " + solution;
document.getElementById("result2").innerText = "The result for part 2 is: " + solution2;