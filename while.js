// var text="";
// var i=0;
// while (i < 20) {
//     text +=i + " "; 
//     i+=2;
//   }
//   document.getElementById("demo").innerHTML=text;

var text = ""
var i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;