function solve(inputArray) {
    Array.prototype.checkExists = function (item) {
        for (let i of this) {
            if (item === i) {
                return 1;
            }
        }
        return 0;
    };

    Array.prototype.buy = function (itemBuy) {
        if (!this.checkExists(itemBuy)) {
            this.push(itemBuy);
        }
    };

    Array.prototype.trash = function (itemTrash) {
        if (this.checkExists(itemTrash)) {
            let index = this.indexOf(itemTrash);
            this.splice(index, 1);
        }
    };

    Array.prototype.repair = function (itemRepair) {
        if (this.checkExists(itemRepair)) {
            this.trash(itemRepair);
            this.push(itemRepair);
        }
    };

    Array.prototype.upgrade = function (itemUpgrade) {
        let arrayItemName = itemUpgrade.split("-");
        let itemName = arrayItemName.shift();
        let upgradeName = arrayItemName.shift();
        if (this.checkExists(itemName)) {
            let index = this.indexOf(itemName);
            this.splice(index + 1, 0, `${itemName}:${upgradeName}`);
        }
    };

    let inventory = String(inputArray.shift()).split(" ");

    for (let i of inputArray) {
        let commandItem = String(i).split(" ");
        let command = commandItem.shift();

        switch (command) {
            case 'Buy':
                let itemBuy = commandItem.shift();
                inventory.buy(itemBuy);
                break;
            case 'Trash':
                let itemTrash = commandItem.shift();
                inventory.trash(itemTrash);
                break;
            case 'Repair':
                let itemRepair = commandItem.shift();
                inventory.repair(itemRepair);
                break;
            case 'Upgrade':
                let itemUpgrade = commandItem.shift();
                inventory.upgrade(itemUpgrade);
                break;
        }
    }
    let result = "";
    for (let i of inventory) {
        result += `${i} `;
    }
    console.log(result)
}


solve(['SWORD Shield Spear',

    'Trash Bow',

    'Repair Shield',

    'Upgrade Helmet-V']);