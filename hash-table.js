// simple but not great hash func
function calcHash (thing) {
  // convert to string
  const str = (thing && thing.toString()) + ''

  // calc sum of char codes
  const sum = str.split('')
    .map(letter => letter.charCodeAt(0))
    .reduce((a, b) => a + b, 0)

  // calc average of char codes
  return Math.floor(sum / str.length)
}


class HashTable {

  constructor (arr = [], size = 50) {
    this.table = Array(size)
    arr.forEach((val, i) => this.add({ key: i, val: val }))
  }

  calcHash (val) {
    // make sure hash fits within table
    return calcHash(val) % this.table.length
  }

  add (node) {
    const hash = this.calcHash(node.val)
    if (!this.table[hash]) this.table[hash] = []
    this.table[hash].push(node)
  }

  find (val) {
    const hash = this.calcHash(val)
    const hashVals = this.table[hash]
    const found = hashVals.find(node => node.val === val)
    return found && found.key || -1
  }

  has (val) {
    return this.find(val) !== -1
  }

  toString () {
    return this.table.reduce((prev, cur, i) => {
      const str = '#' + i + ' => {' + cur.map(node => node.val).join(', ') + '}'
      prev.push(str)
      return prev
    }, []).join('\n')
  }
}


const print = (...args) => console.log(args.join(' '))

const arr = ['stuff', 31, 19, 'boom', 65, 124, 23, 'str']
const table = new HashTable(arr)

print('ARRAY: [', arr.join(', '), ']')
print(table.toString())

print('FOUND AT >>', table.find('str'))
