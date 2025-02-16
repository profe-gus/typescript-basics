export const studentIds:number[] = [1,23,14,54];

studentIds.push(+"6");

interface Student {
    id: number;
    name:string;
    age:number;
}

export const gustavo:Student ={
    id: 1,
    name: "Gus",
    age: 33
}

export const students:Student[] = [];

students.push( gustavo)


console.log("🚀 ~ students:", students)


