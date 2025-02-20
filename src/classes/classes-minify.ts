export class Student{
    constructor(
        public readonly id:number, 
        public readonly name:string, 
        public readonly age:number){        
    }
}

export const gustavo = new Student(1, "Gus", 33);

console.log(gustavo.name)