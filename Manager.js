import Employee from './Employee';

export default class Manager extends Employee {
    
  #department;
  #bonus;

  constructor(firstName, lastName, salary, position, department, bonus) {
    super(firstName, lastName, salary, position);
    this.#department = department;
    this.#bonus = bonus;
  }

  getDepartment() {
    return this.#department;
  }

  getBonus(){
    return this.#bonus;
  }

  setDepartment(department) {
    this.#department = department;
  }

  setBonus(bonus){
    this.#bonus = bonus;
  }

  getSalary() {
    return this.getSalary() + this.#bonus;
  }

  toString() {
    return `Employee: ${super.getFirstName()} ${super.getLastName()}, Salary: ${super.getSalary()}, Position: ${super.getPosition()}, Department: ${this.#department}, Bonus: ${this.#bonus}`;
  }
}
