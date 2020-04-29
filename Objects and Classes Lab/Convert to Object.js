function solve(stringJson){
    let obj = JSON.parse(stringJson);
    for (const key in obj) {
       console.log(`${key}: ${obj[key]}`);
    }
}

solve('{"name":"George", "lastName":"Jones","hairColor":"Brown"}');