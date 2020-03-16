function multiply(obj, num) {
  let objKeys = Object.keys(obj)
  let objValues = Object.values(obj)
  let multipliedObj = {}
  for (let i = 0; i < objKeys.length; i++) {
    multipliedObj[objKeys[i]] = objValues[i]
  }
  for (let key in multipliedObj) {
    if (typeof multipliedObj[key] == 'number') {
      multipliedObj[key] *= num
    }
  }
  return multipliedObj
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

console.log (multiply(menu, 3))
console.log(menu)