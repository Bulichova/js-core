
function User(name,age){
    this.name = name;
    this.age = age;

};
User.prototype.myMethod= function(){
    return "метод функции конструктор"
};

const ya = new User("Manya", 32);
console.log(ya);

const newYa = Object.create(ya)
console.log(newYa);