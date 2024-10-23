const { Employee } = require("./Employee");

class Manager extends Employee {
    #employeesManaged
    constructor(department, name, position, salary) {
        super(name, position, salary);
        this.department = department;
        this.#employeesManaged = [];
    }
    getEmployeesManaged() {
        return this.#employeesManaged;
    }
    setEmployeesManaged(employee) {
        this.#employeesManaged.push(employee);
        return this.#employeesManaged;
    }


    
}

module.exports = {
    Manager,
}