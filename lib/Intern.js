const Employee = require("./Employee");
// clss intern that extends the parent employee
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        this.role ="Intern";
    }
    //method for getting the school
    getSchool(){
      return this.school;
    }
    // method for getting the role 
    getRole(){
      return `${this.role}`;
    }
}
module.exports = Intern;