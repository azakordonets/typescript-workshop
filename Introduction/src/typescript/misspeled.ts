const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
console.log(`${obj.width} * ${obj.heigth} = ${area}`)
// TS2551: Property 'heigth' does not exist on type
// '{ width: number; height: number; }'.
// Did you mean 'height'?
// misspeled.ts(1, 26): 'height' is declared here.
