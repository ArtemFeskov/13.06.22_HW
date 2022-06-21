
// const root = document.getElementById("root");
// // const charter = document.createElement("div");

// // const charInfoDiv = document.createElement("div");
// // const charterInfoStatic = document.createElement("span");
// // const charterInfoPersonage = document.createElement("span");



// // root.appendChild(charter);

// root.innerHTML = `Language: ${window.navigator.language}</br>Online: ${window.navigator.onLine}
// </br> ${window.navigator.geolocation.getCurrentPosition}
// </br> ${navigator.credentials}`


// class Person{
//     constructor(name, surname, age){
//         this.Name = name;
//         this.Surname = surname;
//         this.Age = age;
//     }
    
//     ShowInfo() {
//         console.log(`Name: ${this.Name}, Surname: ${this.Surname}, Age: ${this.Age}`)
//     }
// }

// const Artem =new Person("Artem", "Feskov", 22);
// console.log(Artem);
// console.log(Artem.ShowInfo());





// class Student{
//     constructor(fullname, birth, telephone, city, country,nameofuniversity, nuberofgroup){
//         this.FullName = fullname;
//         this.Birthday= birth;
//         this.Telephone = telephone;
//         this.City = city;
//         this.Country = country;
//         this.NameOfUniversity = nameofuniversity;
//         this.NumberOfGroup = nuberofgroup;
//     }
        
//     ShowInfoStandart(){
//         console.log(this);
//     }
// }

// var Artem = new Student("Feskov Artem", "22.06.2000", "050444444", "Rivne", "Ukraine", "Vodnik", "BV017");

// Artem.ShowInfoStandart();





  class Person{
    counter = 0;
    constructor(name, surname, age){
        this.Name = name;
        this.Surname = surname;
        this.Age= age;
        this.counter++;
    }

    set name(value){this.Name = value;}
    get name(){return this.Name;}
    set surname(value){this.Surname = value;}
    get surname(){return this.Surname;}
    set age(value){this.Age = value;}
    get age(){return this.Age;}

    ShowPerson()
    {console.log(this);}
}
class Flat{
    Persons = [];
    constructor(numberofflat, pidizds, persons= []){
        this.NumberOfFlat = numberofflat;
        this.Pidizds = pidizds;
        this.Persons = persons;
    }

    set numberofflat(value){this.NumberOfFlat = value;}
    get numberofflat(){return this.NumberOfFlat;}
    set pidizds(value){this.Pidizds = value;}
    get pidizds(){return this.Pidizds;}

    ShowFlat(){
        console.log(`In ${this.NumberOfFlat} - flat, ${this.Pidizds} - pidizdi, live ${this.Persons.length} persons!`);
    }
    SHF(){
        console.log(this);
    }
}
class House{
    Flats = [50];
    Pidizds = [6];
    constructor(flats = [],  numberofhouse){
        this.NumberOfHouse = numberofhouse;
        this.Flats = flats;
        this.Persons = flats.persons;
    }
    ShowHouse(){
        console.log(`Number of House - ${this.NumberOfHouse}, Count of Flats: ${this.Flats.length}`);
    }
    SHH(){
        console.log(this);
    }
}
Artem = new Person("Artem", "Feskov", 22);
Dima = new Person("Dima", "Ryabuy", 64);
Oleg = new Person("Oleg", "Kiler", 43);
Vlad = new Person("Vlad", "Gragient", 21);
Sam = new Person("Sam", "Tarli", 44);
Olya = new Person("Olya", "Chesnuy", 18);
Diana = new Person("Diana", "Smichnuy", 12);
Devora = new Person("Devora", "Paganuy", 12);
Stepan = new Person("Stepan", "Dobruy", 12);

flat_23 = new Flat(23,1,[Artem, Oleg, Olya])
flat_45 = new Flat(45,2,[Vlad, Dima, Sam])
flat_61 = new Flat(61,3,[Diana, Devora, Stepan])

house = new House([flat_23,flat_45,flat_61],21);

flat_23.ShowFlat();
flat_23.SHF();
flat_45.ShowFlat();
flat_45.SHF();
flat_61.ShowFlat();
flat_61.SHF();

house.ShowHouse();
// house.ShowHouse();