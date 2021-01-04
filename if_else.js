// var not=window.prompt("Lütfen bir not girişi yapın: ");
// if(not<50)
//     document.write("Dersten kaldınız.");
// else if(not>=50 && not<70)
//     document.write("Dersten orta derece ile geçtiniz.");
// else if(not >=70 && not<=100)
//     document.write("İyi bir not ortalamasıyla dersi geçtiniz.");
// else
//     document.write("Hatalı not girişi.");

var x = prompt("Lütfen ilk sayıyı giriniz:", "");
  
var y = prompt("Lütfen ikinci sayıyı giriniz:", "");

x = parseInt(x);

y = parseInt(y);

alert("x üssü y:"+(x**y));