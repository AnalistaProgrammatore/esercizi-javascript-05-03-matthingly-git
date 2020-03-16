let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries( obj ) {
  var sum = 0;
  for( var el in obj ) {
    sum += parseFloat( obj[el] );
  }
  return sum;
}

console.log (sumSalaries(salaries))