function solve(day){
    let dayNumber = Number(day);
    let daysArray = [ 'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday' ]

    if(0 < dayNumber && dayNumber < 8){
        console.log(`${daysArray[dayNumber-1]}`)
    }
    else{
        console.log(`Invalid day!`);
    }
}
solve(0);
solve(1);
solve(2);
solve(3);
solve(4);
solve(5);
solve(6);
solve(7);
solve(8);