function even_or_odd(number) {
  if (number % 2 === 0) return "Even";
  else return "Odd";
}

/* Best Practices

  function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
  }

*/
/* Clever

var even_or_odd = n => n & 1 ? 'Odd' : 'Even'

*/
