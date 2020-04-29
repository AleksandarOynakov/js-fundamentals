function solve(path) {
let file = path.split('\\').pop();
let ext = file.split('.');
let fileExt = ext.pop();
console.log(`File name: ${ext.join('.')}`);
console.log(`File extension: ${fileExt}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx.txt')