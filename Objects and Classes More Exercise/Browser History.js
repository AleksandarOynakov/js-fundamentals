function solve(obj, stringsArray) {
    let browserInfo = obj;

    let checkIfOpen = tab => {
        if (browserInfo['Open Tabs'].includes(tab)) {
            return 1;
        }
        return 0;
    }

    let closeTab = tab => {
        let index = browserInfo['Open Tabs'].indexOf(tab);
        browserInfo['Open Tabs'].splice(index, 1);
        browserInfo['Recently Closed'].push(tab);
    }

    let addToLogs = (command, tab) => {
        browserInfo['Browser Logs'].push(`${command} ${tab}`);
    }

    let openTab = tab => {
        browserInfo['Open Tabs'].push(tab);
    }

    let clearHistory = () => {
        browserInfo['Open Tabs'] = [];
        browserInfo['Browser Logs'] = [];
        browserInfo['Recently Closed'] = [];

    }

    for (const string of stringsArray) {
        let [command, tab] = string.split(" ");

        if (string.includes('Clear History and Cache')) {
            command = string;
        }

        switch (command) {
            case 'Close':
                if (checkIfOpen(tab)) {
                    closeTab(tab);
                    addToLogs(command, tab);
                }
                break;
            case 'Open':
                openTab(tab);
                addToLogs(command, tab);
                break;
            case 'Clear History and Cache':
                clearHistory();
                break;
        }
    }

    console.log(`${browserInfo['Browser Name']}`);
    console.log(`Open Tabs: ${browserInfo['Open Tabs'].join(", ")}`);
    console.log(`Recently Closed: ${browserInfo['Recently Closed'].join(", ")}`);
    console.log(`Browser Logs: ${browserInfo['Browser Logs'].join(", ")}`);
}

solve({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],

    "Recently Closed": ["Yahoo", "Gmail"],

    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},

    ["Close Facebook", "Open StackOverFlow", "Open Google"]);