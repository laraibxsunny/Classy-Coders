class Employee {
    #salary;
    #isHired;
    static #allEmployees = [];
    constructor(name, position, salary) {
        Employee.#allEmployees.push(this);
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
    }
    getSalary() {
        return this.#salary;
    }
    setSalary(amount) {
        this.#salary = amount;
        return this.#salary
    }
    getStatus() {
        return this.#isHired;
    }
    setStatus(command) {
        if (command == "hire") {
            return this.#isHired = true;
        } else if (command == "fire") {
            return this.#isHired = false;
        }
    }
    static getEmployees() {
        return Employee.#allEmployees;
    }
    static getTotalPayroll() {
        let totalSalaries = 0;
        for(let i = 0; i < Employee.#allEmployees.length; i++) {
            totalSalaries += Employee.#allEmployees.salary;
        }
        return totalSalaries;
    }


    
}

module.exports = {
    Employee,
}
