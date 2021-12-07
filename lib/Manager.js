const Employee = require("./Employee");
//class manager that extends the paresnt employee
class Manager extends Employee{
    constructor(name,id,email,officenumber){
        super(name,id,email);
        this.officenumber = officenumber;
        this.role = "Manager";
    }
    // getting role method
    getRole(){
      return `${this.role}`;
    }
}
module.exports = Manager;