function solve(input) {

    input.sort(function (x, y) {
        if (x.length < y.length) {
            return -1;
        }
        else if (x.length > y.length) {
            return 1;
        }
        else {
            if (x < y) {
                return -1;
            }
            else if (x > y) {
                return 1;
            }
        }
        return 0;
    });
    for (let i of input) {
        console.log(i);
    }
}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);