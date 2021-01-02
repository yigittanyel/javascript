// var ogrenci={
//     adi:"Yigit",
//     numarasi: 12345,
//     okul : "Uludag Universitesi"
// }
// document.write(ogrenci.okul);

var Player={
    name:"Yigit",
    position:"Forward",
    club:"Fenerbahce",
    prPlayer: function(){
        var sonuc= this.name +" "+this.club;
        document.write(sonuc);
    }
}
Player.prPlayer();