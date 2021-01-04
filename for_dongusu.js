var txt = "";
var person = {fname:"Semih", lname:"Tanyel", age:9}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i,text;
// text="";
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;