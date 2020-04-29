function solve(input) {
    let comments = new Map();
    let users = [];
    for (const line of input) {
        if (line.includes('user')) {
            let [command, userName] = line.split(" ");
            if (!users.includes(userName)) {
                users.push(userName);
            }
        }
        else if (line.includes('article')) {
            let [command, articleName] = line.split(" ");
            if (!comments.has(articleName)) {
                comments.set(articleName, []);
            }
        }
        else if (line.includes('posts on')) {
            let [command, comment] = line.split(": ");
            let [userName, articleName] = command.split(" posts on ");
            if (users.includes(userName) && comments.has(articleName)) {
                let [title, pureComment] = comment.split(", ")
                comments.get(articleName).push({ userName, title, pureComment });
            }
        }
    }
    let sortedByComments = Array.from(comments).sort((a, b) => b[1].length - a[1].length);
    for (const comments of sortedByComments) {
        console.log(`Comments on ${comments[0]}`);
        let sorted = comments[1].sort((a, b) => (a.userName).localeCompare(b.userName))
        for (const comment of sorted) {
            console.log(`--- From user ${comment.userName}: ${comment.title} - ${comment.pureComment}`);
        }
    }
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])