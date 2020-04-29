function solve(stringsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    for (const element of stringsArr) {
        let [name, age] = element.split(" ");
        let obj = new Cat(name, age);
        obj.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);