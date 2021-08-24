/**
 * Inheritance
 */

class Person {
    firstName: string
    private _lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this._lastName = lastName
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value: string) {
        this._lastName = value
    }
}

class Student extends Person {
    private level: string
    firstName: string

    constructor(fn: string, ln: string, level: string) {
        super(fn, ln)
        this.level = level
        this.lastName = ''
        this.firstName = ''
    }
}

const fn = 'Frank Leonardo'
const ln = 'Puma Chara'
const level = '1'

const frankPerson = new Person(fn, ln)
const frankStudent = new Student(fn, ln, level)

const name1 = (frankStudent as Person).firstName
console.log(name1)
