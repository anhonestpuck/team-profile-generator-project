class Employee {
  constructor(name, Id, email) {
  
    this.name = name;
    this.Id = Id;
    this.email = email;
    this.role = 'Employee'
  };
  getName() {
    return this.name;
  }
  getId() {
    return this.Id;
  }
  getEmail(){
    return this.email;
  }
  getRole() {
  }

}

module.exports = Employee;
