function solve(array) {
    let numbers = [];
    let checker = true;

    Array.prototype.sum = function () {
        if (hasElements(this)) {
            let a = this.pop();
            let b = this.pop();
            this.push(a + b);
        }
        else {
            console.log(`Error: not enough operands!`);
            checker = false;
        }
    };

    Array.prototype.subtract = function () {
        if (hasElements(this)) {
            let b = this.pop();
            let a = this.pop();
            this.push(a - b);
        }
        else {
            console.log(`Error: not enough operands!`);
            checker = false;
        }
    };

    Array.prototype.multiply = function () {
        if (hasElements(this)) {
            let a = this.pop();
            let b = this.pop();
            this.push(a * b);
        }
        else {
            console.log(`Error: not enough operands!`);
            checker = false;
        }
    };

    Array.prototype.div = function () {
        if (hasElements(this)) {
            let b = this.pop();
            let a = this.pop();
            this.push(a / b);
        }
        else {
            console.log(`Error: not enough operands!`);
            checker = false;
        }
    };


    let hasElements = array => {
        if (array.length >= 2) {
            return 1;
        }
        return 0;
    };

    Array.prototype.print = function () {
        if (this.length == 1 && checker) {
            console.log(this.pop());
        }
        else if (hasElements(this)) {
            console.log(`Error: too many operands!`);
        }
    };


    for (const element of array) {
        if (typeof (element) === 'string') {
            switch (element) {
                case '+':
                    numbers.sum();
                    break;
                case '-':
                    numbers.subtract();
                    break;
                case '*':
                    numbers.multiply();
                    break;
                case '/':
                    numbers.div();
                    break;
            }
        }
        else {
            if(Number.isFinite(element)){
                numbers.push(element);
            }
            
        }
    }
    numbers.print();
}

solve(
    [31, 2, '+', 11, '/','+']
);