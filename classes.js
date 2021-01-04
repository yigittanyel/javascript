class Player {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let player1= new Player("Yiğit", 2000);
  let player2=new Player("Yusuf",2016);
  document.getElementById("demo").innerHTML =
  "Player1 is  " + player1.age() + " years old.";
  document.getElementById("demo2").innerHTML=
  "Player2 is "+player2.age()+" years old.";