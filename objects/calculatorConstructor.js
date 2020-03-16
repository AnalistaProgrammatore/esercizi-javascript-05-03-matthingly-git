function Calculator(values) {
  return {
    values: [...values],
    add: function () {
      let result = this.values.reduce((x, y) => x + y)
      return result
    },
    sub: function () {
      let result = this.values.reduce((x, y) => x - y)
      return result
    },
    mul: function () {
      let result = this.values.reduce((x, y) => x * y)
      return result
    },
    div: function () {
      let result = this.values.reduce((x, y) => x / y)
      return result
    }
  }

}

let calculator = new Calculator([1, 2, 3, 6, 9]);

console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())
