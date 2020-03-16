const user = {}

Object.defineProperty(user, 'name', {
  value: "Mario",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(user, 'surname', {
  value: "Rossi",
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(user, 'name', {
  value: "Marco",
});

delete user.name

console.log( Object.getOwnPropertyDescriptors(user))