const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee{
    #programmingLanguages
    constructor(name, position, salary) {
        super(name, position, salary);
        this.#programmingLanguages = ["JavaScript", "Java", "Python"];
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }
    setProgrammingLanguages(language) {
        this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
}