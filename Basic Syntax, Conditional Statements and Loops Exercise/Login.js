function login(data) {
    let username = String(data.shift());
    let password = username.split('').reverse().join('');
    let tries = 0;
    for (const passwordInput of data) {
        if (passwordInput !== password && tries < 3) {
            console.log('Incorrect password. Try again.');
            tries++;
        }
        else if (passwordInput !== password) {
            console.log(`User ${username} blocked!`);
        }
        else {
            console.log(`User ${username} logged in.`);
        }
    }
}