function solve(input) {
    let shelfs = {};
    for (const line of input) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = { genre };
                shelfs[id].books = [];
            }
        }
        else if (line.includes(':')) {
            let [titleAuthor, genre] = line.split(', ');
            for (const key in shelfs) {
                if (shelfs[key].genre == genre) {
                    let [title, author] = titleAuthor.split(': ');
                    shelfs[key].books.push({ title, author })
                }
            }
        }
    }

    let sortedByBooks = Object.entries(shelfs).sort((a, b) => b[1].books.length - a[1].books.length);

    for (const shelf of sortedByBooks) {
        console.log(`${shelf[0]} ${shelf[1].genre}: ${shelf[1].books.length}`)
        for (const book of shelf[1].books.sort((a, b) => (a.title).localeCompare(b.title))) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}




solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])