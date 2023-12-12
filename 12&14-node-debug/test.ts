console.log(process.argv)

const map: Map<number, string> = new Map();
for (let i = 0; i < 10; i++) {
    map.set(i, `test_${i}`)
}
console.log('map',map)

const end = 1
console.log(end)
