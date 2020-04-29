function solve(length) {
    let dns = 'ATCGTTAGGG';
    let counterStars = 2;
    let counterDna = 0;
    for (let i = 0; i < length; i++) {
        if (counterDna > 9) {
            counterDna = 0;
        }
        if (counterStars == -1) {
            counterStars = 1;
            console.log(`${printStar(counterStars)}${dns.charAt(counterDna)}${printDash(counterStars)}${dns.charAt(counterDna + 1)}${printStar(counterStars)}`);
            counterStars = 2;
        }
        else {
            console.log(`${printStar(counterStars)}${dns.charAt(counterDna)}${printDash(counterStars)}${dns.charAt(counterDna + 1)}${printStar(counterStars)}`);
            counterStars--;
        }
        counterDna += 2;
    }


    function printStar(counterStars) {
        let stars = "";
        for (let i = counterStars; i > 0; i--) {
            stars += "*";
        }
        return stars;
    }

    function printDash(counterStars) {
        let dashesPrint = 2 - counterStars;
        let dashes = "";
        for (let i = 0; i < dashesPrint; i++) {
            dashes += '--'
        }
        return dashes;
    }

}

solve(6);



