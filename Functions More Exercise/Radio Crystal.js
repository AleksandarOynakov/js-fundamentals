function solve(inputArray){
    let final = inputArray.shift();
    for (let i = 0; i< inputArray.length; i++) {
        calculate(final,inputArray[i]);  
    }


    function calculate(finalThickness,currentThickness){
        console.log(`Processing chunk ${currentThickness} microns`);
        let cutsMade = 0;
        let lapsMade = 0;
        let grindsMade = 0;
        let etchsMade = 0;
        let xraysMade = 0;
        let cut = currentThickness => currentThickness / 4;
        let lap = currentThickness => currentThickness * 0.8;
        let grind = currentThickness => currentThickness - 20;
        let etch = currentThickness => currentThickness - 2
        let xray = currentThickness => currentThickness + 1;
    
        while (((finalThickness - 1) !== currentThickness) && (finalThickness !== currentThickness)) {
            if (cut(currentThickness) >= (finalThickness - 1) || cut(currentThickness) >= finalThickness) {
                currentThickness = cut(currentThickness);
                cutsMade++;
            }
            else if (lap(currentThickness) >= (finalThickness - 1) || lap(currentThickness) >= finalThickness) {
                currentThickness = lap(currentThickness);
                lapsMade++;
            }
            else if (grind(currentThickness) >= (finalThickness - 1) || grind(currentThickness) >= finalThickness) {
                currentThickness = grind(currentThickness);
                grindsMade++;
            }
            else if (etch(currentThickness) >= (finalThickness - 1) || etch(currentThickness) >= finalThickness) {
                currentThickness = etch(currentThickness);
                etchsMade++;
    
            }
        }
        if (finalThickness - 1 === currentThickness) {
            currentThickness = xray(currentThickness);
            xraysMade++;
        }
    
        let print = (arrayMade) => {
            for (let i = 0; i < arrayMade.length; i++) {
                switch (i) {
                    case 0:
                        if (arrayMade[i] > 0) {
                            console.log(`Cut x${arrayMade[i]}`);
                            console.log(`Transporting and washing`);
                        }
                        break;
                    case 1:
                        if (arrayMade[i] > 0) {
                            console.log(`Lap x${arrayMade[i]}`);
                            console.log(`Transporting and washing`);
                        }
                        break;
                    case 2:
                        if (arrayMade[i] > 0) {
                            console.log(`Grind x${arrayMade[i]}`);
                            console.log(`Transporting and washing`);
                        }
                        break;
                    case 3:
                        if (arrayMade[i] > 0) {
                            console.log(`Etch x${arrayMade[i]}`);
                            console.log(`Transporting and washing`);
                        }
                        break;
                    case 4:
                        if (arrayMade[i] > 0) {
                            console.log(`X-ray x${arrayMade[i]}`);
                        }
                        break;
                }
            }
            console.log(`Finished crystal ${finalThickness} microns`);
        };
        print([cutsMade,lapsMade,grindsMade,etchsMade,xraysMade]);
    }
}

solve([1375,50000]);