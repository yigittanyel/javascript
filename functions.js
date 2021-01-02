// function Sum(a,b){
//     var sonuc=a+b;
//     document.write("A+B = " +sonuc)
// }
// Sum(7,8);

function Yasak(yas){
    if(yas<20 || yas>65)
        document.write("Sokağa çıkmanız yasak.");
    else
        document.write("Yasağınız yok.Ama yine de evde kalmaya gayret edin.");
}
Yasak(19)