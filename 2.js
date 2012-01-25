var fib1 = 1;
var fib2 = 2;
var fib = 1;
var sum = 2;
while (fib < 4000000) {
    if (fib%2 == 0) sum += fib;
    var temp2 = fib1 + fib2;
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = temp2;
   // console.log(sum + "," + fib);

}
console.log(sum);