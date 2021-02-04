function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log(b, a, a + b);
    a++;
    b++;
    console.log(b, a, a + b);
  }
  return inner;
}

let X1 = outer();
let X2 = outer();

X1(); // 10 20 30 , 11 21 32
X1(); // 11 20 31, 12 21 33
X2(); //
