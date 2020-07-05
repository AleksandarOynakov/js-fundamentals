function solveE(input) {
    let helpPerHour = Number(input.shift()) + Number(input.shift()) + Number(input.shift());
    let requests = Number(input.shift());
    let hours = 0;

    while (requests > 0) {
        hours++;
        if(hours % 4 === 0 ){
            continue;
        }
        requests -= helpPerHour;
        
    }
    return `Time needed: ${hours}h.`;
}

