class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    myMethod(){
        return "метод ES6 класса"
    }
}

const yaYa = new User("Till", 54);
console.log(yaYa);