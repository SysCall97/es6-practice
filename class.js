class Student {
    constructor(sId = -1, sName = "") {
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new Student('CE-17036', 'Mashry');
const student2 = new Student();

console.log(student1.name);
console.log(student2);