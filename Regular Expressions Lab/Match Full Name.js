function solve(text) {
    let output = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    while(valid = pattern.exec(text)){
        output.push(valid[0]);
    }
    console.log(output.join(' '));
}

solve('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov, Ceco Boreca, Kir biber, iVanIvan Zlatev');