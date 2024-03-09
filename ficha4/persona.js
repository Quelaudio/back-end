 function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName

 };
Person.prototype.age = 0;

 Person.prototype.greet = function(){
    console.log("Hello " + this.firstName +" " + this.lastName + " , " +this.age + " anos");
 };
    
    var person1 = new Person('Claudio','Vieira')  ;
    person1.age = 20;
    person1.greet();
    var jane = new Person('jane','Vieira') ;
    jane.greet();

    console.log(person1.__proto__==jane.__proto__);
   