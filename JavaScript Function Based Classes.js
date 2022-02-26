//task1 es6 arrow functions
console.log("Task 1");
//round
round = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.round(element);
    })
    return arr;
}

console.log(round(1.2, 4.3, 7.7))

//abs
abs = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.abs(element);
    })
    return arr;
}

console.log(abs(1.2, 4.3, 7.7))

//ceil
ceil = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.ceil(element);
    })
    return arr;
}

console.log(ceil(1.2, 4.3, 7.7))

//floor
floor = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.floor(element);
    })
    return arr;
}

console.log(floor(1.2, 4.3, 7.7))


//task 2 generic es6 function
console.log("Task 2");
genericOperations = (operation, ...args) => {
    if (operation === 'round') {
        return round(...args);
    }
    else if (operation === 'abs') {
        return abs(...args);
    }
    else if (operation === 'ceil') {
        return ceil(...args);
    }
    else if (operation === 'floor') {
        return floor(...args);
    }
    else {
        return "Invalid Expression";
    }
}

console.log(genericOperations('floor', 1.3, 2.4, 3.6, 4.2, 5.5));

//task 3 function-based classes
console.log("Task 3");

//person
function Person(fName, age, city) {
    this.fName = fName || 'Arslan';
    this.age = age || '18';
    this.city = city || 'Lahore';
}
var p1 = new Person();
console.log("Person Prototype Class");
console.log(p1.fName, p1.age, p1.city);



// student (derived class of Person)
function Student(reg, program, fee, ...args) {
    Person.call(this);
    this.reg = reg || '111';
    this.program = program || 'SE';
    this.fee = fee || '90000';

    this.arr = []
    args.forEach((element, index) => {
        this.arr[index] = element;
    })

}
Student.prototype = Person;
var s1 = new Student('125', 'CS', '18000', new Courses('ITM'), new Courses('PF', '4'));
console.log("Student Prototype Class (derived class of Person)");
console.log(s1.fName, s1.age, s1.city, s1.reg, s1.program, s1.fee, s1.arr);



//employee (derived class of Person)
function Employee(department, designation, salary) {
    Person.call(this);
    this.department = department || 'CS';
    this.designation = designation || 'manager';
    this.salary = salary || '80000';
}
Employee.prototype = Person;
var e1 = new Employee();
console.log("Employee Prototype Class (derived class of Person)");
console.log(e1.fName, e1.age, e1.city, e1.department, e1.designation, e1.salary);



//teacher (derived class of Employee)
function Teacher(experience, teachingMode, ...args) {
    Employee.call(this);
    this.experience = experience || '10 Years';
    this.teachingMode = teachingMode || 'on-campus';

    this.arr = []
    args.forEach((element, index) => {
        this.arr[index] = element;
    })
// yusyqwsifhgjhk
}
Teacher.prototype = Employee;
var t1 = new Teacher('Kamran', '32', 'ISB', 'BBA', 'Teacher', '800', '3 Years', 'On-Campus', new Courses('FOG', '3'), new Courses());
console.log("Teacher Prototype Class (derived class of Employee)");
console.log(t1.fName, t1.age, t1.city, t1.department, t1.designation, t1.salary, t1.experience, t1.teachingMode, t1.arr);



//staff (derived class of Employee)
function Staff(province) {
    Employee.call(this);
    this.province = province || 'KPK';
}
Staff.prototype = Employee;
var sf1 = new Staff();
console.log("Staff Prototype Class (derived class of Employee)");
console.log(sf1.fName, sf1.age, sf1.city, sf1.department, sf1.designation, sf1.salary, sf1.province);



//course
function Courses(cName, creditHours) {
    this.cName = cName || 'MAD';
    this.creditHours = creditHours || '3';
}

