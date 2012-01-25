function greaterThan(num) {

    return function(num2) {
        if (num > num2) return true;
        else return false;
    };
}

var f1 = greaterThan(5);
var f2 = greaterThan(4);

console.log(f1(2));