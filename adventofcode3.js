"use strict"

let input = `325489`;

function part1(input) {
    let solution = 0;
    let temp = Math.sqrt(parseInt(input));
    let whole = Math.trunc(temp)+1;
    if(whole == temp) { // is squareable number
        return whole - 1;
    }

    /*  I visualize a belt as the two walls constructed between two squareable numbers. So, from 17 - 25 would be one belt.
        The belts corner point is where the two walls meet forming a corner.
        The midpoint is the middle of each wall, and the shortest distance to the center from that wall.
        Minimum is the distance from the midpoint to the center, the shortest distance for a belt.
    */

    let belt_max = (whole*whole);
    let belt_min = ((whole-1) * (whole - 1)) + 1;
    let corner = belt_max - whole + 1;
    let min = whole/2;
    min = Math.trunc(min);  // minimum number of steps

    if(input > corner) {    // larger half
        let midpoint = Math.trunc((belt_max + corner + 1) / 2);
        solution = input - midpoint;
        solution = Math.abs(solution);
        solution += min;
    }
    else if(input == corner) {  // same number of steps as the square number;
        return whole - 1;
    }
    else {    // smaller half
        let midpoint = Math.trunc((belt_min + corner + 1) / 2);
        solution = input - midpoint;
        solution = Math.abs(solution);
        solution += min;
    }
    return solution;
}

function part2(input) {
    let solution = 0;
    let map = new Array();
    for(let i = -99; i < 100; i++) {
        map[i] = new Array();
        for(let j = -99; j < 100; j++) {
            map[i][j] = 0;
        }
    }
    let current = 1;
    let pointer = 0;
    let x = 0;
    let y = 0;
    let direction = 0;  // 0-3 determine direction, 0 to right, 1 up, 2 left, 3 down
    function setPoint(map, x, y) {
        let temp = 0;
        temp += map[x-1][y+1];
        temp += map[x-1][y];
        temp += map[x-1][y-1];
        temp += map[x+1][y+1];
        temp += map[x+1][y];
        temp += map[x+1][y-1];
        temp += map[x][y-1];
        temp += map[x][y+1];
        map[x][y] = temp;
        console.log("Set block: [" + x + "][" + y +"] to value of: " + map[x][y]);
    }
    function changeDirection() {
        direction++;
        if(direction == 4) {
            direction = 0;
        }
    }
    function travel() {
        if(direction == 0) {
            x++;
        }
        else if(direction == 1) {
            y++;
        }
        else if(direction == 2) {
            x--;
        }
        else if(direction == 3) {
            y--;
        }
        else {
            console.log("Error: Wrong direction, " + direction);
        }
    }
    // Manually set the first 4 points and initial values
    map[0][0] = 1;
    setPoint(map,1,0);
    setPoint(map,1,1);
    setPoint(map,0,1);
    x = -1;
    y = 1;
    pointer = 5;
    direction = 2;

    while(current < parseInt(input)) {
        if(map[x][y] != 0) { console.log("Error: Traversed over same block: [" + x + "][" + y +"] with previous value of: " + map[x][y]); }
        setPoint(map,x,y);
        current = map[x][y];

        let temp = Math.sqrt(pointer - 1);
        let check = Math.trunc(temp);
        if(temp == check) { // 1 number past a squareable number
            changeDirection();
        }
        check++;
        let belt_max = check*check;
        let corner = belt_max - check + 1;
        //console.log("Belt Max: " + belt_max + " corner: " + corner);
        if(pointer == corner) { // is an corner point
            changeDirection();
        }
        travel();
        pointer++;
    }
    return current;
}
let solution = part1(input);
let solution2 = part2(input);
document.getElementById("result").innerText = "The result for part 1 is: " + solution;
document.getElementById("result2").innerText = "The result for part 2 is: " + solution2;