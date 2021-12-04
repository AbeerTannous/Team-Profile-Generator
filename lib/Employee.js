// the parent class Employee
class Employee{
  constructor(name,id,email){
     this.name = name;
     this.id = id;
     this.email = email;
     this.role = "Employee"
  }
  // method for getting the name
getName(){
  return this.name;
}
//method for getting email
getEmail(){
return this.email;
}
// method for getting role
getRole(){
 return `${this.role}`;
}

}
module.exports = Employee;