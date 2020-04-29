function solve(input) {

    let list = [];

    Array.prototype.addMovie = function (name) {
        let movie = {};
        movie.name = name;
        this.push(movie);
    }

    Array.prototype.exists = function (name) {
        for (let i = 0; i < list.length; i++) {
            if (this[i].name == name) {
                return 1;
            }
        }
        return 0;
    }

    Array.prototype.directed = function (name, nameDirector) {
        if (this.exists(name)) {
            for (let i = 0; i < list.length; i++) {
                if (this[i].name == name) {
                    this[i].director = nameDirector;
                }
            }
        }
    }

    Array.prototype.onDate = function (name, Date) {
        if (this.exists(name)) {
            for (let i = 0; i < list.length; i++) {
                if (this[i].name == name) {
                    this[i].date = Date;
                }
            }
        }
    }

    for (const string of input) {    
        let arrayString = string.split(" ");  
        let name = "";
        let length = arrayString.length;
        for (let i = 0;i<length;i++) {         
            let element = arrayString.shift();
            let rest = arrayString.join(" ");
            if (element == 'addMovie' || element == 'directedBy' || element == 'onDate') {
                switch (element) {
                    case 'addMovie':
                        list.addMovie(rest);
                        break;
                    case 'directedBy':
                        
                        list.directed(name.slice(0, -1), rest);
                        break;
                    case 'onDate':
                        
                        list.onDate(name.slice(0, -1), rest);
                        break;
                }
            }
            else {
                name += element + " ";
            }
        }
        
    }
    for (const obj of list) {
        if(obj.hasOwnProperty('name') && obj.hasOwnProperty('director') && obj.hasOwnProperty('date')){
            console.log(JSON.stringify(obj));
        }
        
    }
}
solve([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);
