const calculator = {
  values: [],
  add: function() {
    let result = this.values.reduce((x, y) => x + y)
    return result
  },
  sub: function() {
    let result = this.values.reduce((x, y) => x - y)
    return result
  },
  mul: function() {
    let result = this.values.reduce((x, y) => x * y)
    return result
  },
  div: function() {
    let result = this.values.reduce((x, y) => x / y)
    return result
  }
}


calculator.values = [2, 3, 5, 9]
console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
//console.log(calculator.div())