function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.changeName = function (name) {
        this.lastName = name;
    }

    this.getAge = function () {
        return this.age;
    }

    this.getFirstName = function () {
        return this.firstName;
    }
}


var myFather = new person("John","Joe","20","Green");
var duong = new person("Duong","Nguyen","30","Black");

//console.log(duong.age);
//console.log(myFather.age);

// let vinh = new person();
// //let age = 22;
// vinh.age = 22;
// vinh.firstName = "Nguyen";
// vinh.eyeColor = "Black";
// vinh.lastName = "Vinh";

let vinh = new person("Vinh", "nguyen");

console.log(vinh.getFirstName());


