
function student () {
  this.grades = []
  this.addGrade = addGrade
  this.average = average
}

function addGrade (grade) {
  this.grades.push(grade)
}

function average () {
  var total = 0
  for (var i = 0; i < this.grades.length; i++) {
    total += this.grades[i]
  }
  return total / this.grades.length
}

var Matthew = new student()

Matthew.addGrade(98)
Matthew.addGrade(78)
Matthew.addGrade(68)
Matthew.addGrade(52)
Matthew.addGrade(66)
Matthew.addGrade(60)
Matthew.addGrade(79)

console.log("La media di Matteo è: " + Matthew.average() + ".")