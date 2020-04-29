function solve(inputArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let nSongs = inputArr.shift();
    let arrSongs = [];
    for (let element = 0; element < nSongs; element++) {
        let current = inputArr.shift();
        let [typeList, name, time] = current.split("_");
        arrSongs.push(new Song(typeList, name, time));
    }

    let type = inputArr.shift();
    for (const song of arrSongs) {
        if (song.typeList == type || type == "all") {
            console.log(song.name);
        }
    }
}

solve([2,

    'like_Replay_3:15',

    'ban_Photoshop_3:48',

    'all']);