function solve(input) {
    let phonebook = new Map();

    for (const contact of input) {
        let[name,phone] = contact.split(" ");
        phonebook.set(name,phone);
    }
    for (const [key,value] of phonebook) {
        console.log(`${key} -> ${value}`);
    }
}

solve(
    ['Tim 0834212554',
    
    'Peter 0877547887',
    
    'Bill 0896543112',
    
    'Tim 0876566344']);