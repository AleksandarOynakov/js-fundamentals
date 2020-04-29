function solve(array, operations) {
    let indexCheck = (array, index) => {
        if (index > (array.length - 1)) {
            index = array.length;
        }
        if (index < 0) {
            index = 0;
        }
        return index;
    };

    let add = (array, index, element) => {
        let newIndex = indexCheck(array, index);
        array.splice(newIndex, 0, Number(element));
    };

    let addMany = (array, index, elements) => {
        let newIndex = indexCheck(array, index);
        for (let i = 0; i < elements.length; i++) {
            let element = Number(elements[i]);
            add(array, newIndex, element);
            newIndex++;
        }
    };

    let contains = (array, element) => {
        for (let i of array) {
            if (Number(element) === i) {
                let indexOfElement = array.indexOf(i);
                return indexOfElement;
            }
        }
        return -1;
    };

    let remove = (array, index) => {
        let newIndex = indexCheck(array, index);
        array.splice(newIndex, 1);
    };

    let shiftElements = (array, positions) => {
        for (let i = 0; i < positions; i++) {
            let elementFirst = array.shift();
            array.push(elementFirst);
        }
    };

    let sumPairs = array => {
        let result = [];
        for (let i = 0; i < array.length; i += 2) {
            if (i + 1 > array.length - 1) {
                result.push(array[i]);
                return result;
            }
            result.push(array[i] + array[i + 1]);
        }
        return result;
    };

    let print = array => {
        let result = "[ ";
        for (let i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                result += `${array[i]} `;
            }
            else{
                result += `${array[i]}, `;
            }
        }
        result += "]";
        console.log(result);
    };

    for (let i of operations) {
        let commandsArray = i.split(" ");
        let command = commandsArray.shift();
        switch (command) {
            case 'add':
                let indexAdd = commandsArray.shift();
                let elementAdd = commandsArray.shift();
                add(array, indexAdd, elementAdd);
                break;
            case 'addMany':
                let indexAddMany = commandsArray.shift();
                let elements = commandsArray;
                addMany(array, indexAddMany, elements);
                break;
            case 'contains':
                let elementSearch = commandsArray.shift();
                console.log(contains(array, elementSearch));
                break;
            case 'remove':
                let indexRemove = commandsArray.shift();
                remove(array, indexRemove);
                break;
            case 'shift':
                let positions = commandsArray.shift();
                shiftElements(array, positions);
                break;
            case 'sumPairs':
                array = sumPairs(array);
                break;
            case 'print':
                print(array);
                break;
        }
    }
}


solve([1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])