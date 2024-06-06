function diviseNumbers () {

let n1 = 12;
let n2 = 6;
let resultado = n1 / n2;

console.log(resultado);

texto = "resultado da divisão = " + resultado;
textSize (25)
fill ("black")
text (texto, 5, 100, 400, 500)

}


function multiplyNumbers () {

let n1 = 10/2;
let n2 = 6;
let resultado = n1 * n2;

console.log(resultado);

texto = "resultado da multiplicação = " + resultado;
textSize (25)
fill ("black")
text (texto, 5, 70, 400, 400)

}

function decreaseNumbers () {

let n1 = 10/2;
let n2 = 6;
let resultado = n1 - n2;

console.log(resultado);

texto = "resultado da subitração = " + resultado;
textSize (25)
fill ("black")
text (texto, 5, 10, 400, 200)

}


function addNumbers () {

let n3 = 10/2;
let n4 = 6;
let resultado = n3 + n4;

console.log(resultado);

texto = "resultado da adição = " + resultado;
textSize (25)
fill ("black")
text (texto, 5, 40, 400, 150)

}

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
addNumbers ()
decreaseNumbers ()
multiplyNumbers ()
diviseNumbers ()
}

