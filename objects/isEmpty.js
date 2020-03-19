function isEmpty(obj) {
  let result = true
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result = false
    }
  }
  return result
}


let emptyObj = {}

let notEMptyObj = {
  name: "Matthew"
}

console.log(isEmpty(emptyObj), isEmpty(notEMptyObj))