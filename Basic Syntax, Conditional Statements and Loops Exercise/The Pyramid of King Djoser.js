function piramid(base, step) {
    let resources = { stone: 0, marble: 0, lapis: 0, gold: 0 };
    let floor = 0;
    for (let index = base; index > 0; index -= 2) {
        floor++;
        let marble = index * 4 - 4
        let stone = index ** 2 - marble;
        if (index > 2) {
            resources.stone += stone;
            if (floor % 5 !== 0) {
                resources.marble += marble;
            }
            else {
                resources.lapis += marble;
            }
        }
        else {
            resources.gold += index ** 2;
        }
    }
    console.log(`Stone required: ${Math.ceil(resources.stone * step)}`);
    console.log(`Marble required: ${Math.ceil(resources.marble * step)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(resources.lapis * step)}`);
    console.log(`Gold required: ${Math.ceil(resources.gold * step)}`);
    console.log(`Final pyramid height: ${Math.floor(floor * step)}`);
}

piramid(12, 1)

