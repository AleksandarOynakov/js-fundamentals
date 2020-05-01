function solve(password) {
    let checkLength = password => {
        if (!(password.length >= 6 && password.length <= 10)) {
            console.log('Password must be between 6 and 10 characters');
            checker = false;
        }
        checkSymbols(password);
    };
    let checkSymbols = password => {
        let pattern = /[^A-Za-z\d]/g;
        if (pattern.exec(password)) {
            console.log('Password must consist only of letters and digits');
            checker = false;
        }
        checkDigits(password);
    };
    let checkDigits = password => {
        let pattern = /\d{2}/g;
        if (!pattern.exec(password)) {
            console.log('Password must have at least 2 digits');
            checker = false;
        }
    }
    let checker = true;
    checkLength(password);
    if (checker) {
        console.log('Password is valid');
    }
}