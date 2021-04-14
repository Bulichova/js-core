// 1 класс машины
 class Auto{
     constructor(brand,color,transmission){
         this.color = color;
         this.brand = brand;
         this.transmission = transmission;
      }
     myMethod(){
        return "класс авто"
     }
 }

let toyota = new Auto ("camry","black","auto")
 console.log(toyota);


 
toyota = new Auto ( "corola","grey", "auto")
console.log(toyota);

// 2 класс музыка

class playList{
    constructor( singer,song,year,style){
        this.singer = singer;
        this.song = song;
        this.year = year;
        this.style = style
    }
}