export default class Employee {
    #firstName;
    #lastName;
    #salary;
    #position;
  
    constructor(firstName, lastName, salary, position) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#salary = salary;
      this.#position = position;
    }
  
    getFirstName() {
      return this.#firstName;
    }
  
    setFirstName(firstName) {
      this.#firstName = firstName;
    }
  
    getLastName() {
      return this.#lastName;
    }
  
    setLastName(lastName) {
      this.#lastName = lastName;
    }
  
    getSalary() {
      return this.#salary;
    }
  
    setSalary(salary) {
      this.#salary = salary;
    }
  
    getPosition() {
      return this.#position;
    }
  
    setPosition(position) {
      this.#position = position;
    }

    getFullName(){
        return `${this.#firstName} ${this.#lastName}`;
    }

    toString() {
        return `First Name: ${this.#firstName}, Last Name: ${this.#lastName}, Salary: ${this.#salary}, Position: ${this.#position}`;
      }
      
  }
  