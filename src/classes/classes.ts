export class Student{
    id:number;
    name:string;
    age:number;
    
    // get getAge():number{
    //     return this.age;
    // }

    // set setAge(newAge:number){
    //     this.age = newAge
    // }

    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
        
    }

    joinClass(){
        console.log(`The student ${this.name} now is in the class`)
    }

}

export const gustavo = new Student(1, "Gus", 33);
// gustavo.setAge = 34;
// gustavo.getAge;
gustavo.joinClass();
// console.log("🚀 ~ gustavo.getAge;", gustavo.getAge)
// console.log("🚀 ~ gustavo:", gustavo.name)
