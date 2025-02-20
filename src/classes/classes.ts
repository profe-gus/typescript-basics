import { CountriesApiAxios, CountriesApiFetch, HttpAdapter } from "../api/countries-api";

export class Student{
    id:number;
    name:string;
    age:number;
    private _isValid:boolean;
    
    get isValid():boolean{
        return this._isValid;
    }

    set isValid(validation:boolean){
        this._isValid = validation
    }

    constructor(
        id:number, 
        name:string, 
        age:number,
        private http: HttpAdapter){
        this.id = id;
        this.name = name;
        this.age = age;
        this._isValid = false;
        
    }

    joinClass(){
        console.log(`The student ${this.name} now is in the class`)
    }

    activateStudent(){
        console.log(`The student ${name} has been activated`);
    }

    async getCountries(){
        const countries = await this.http.getAllCountries();
        console.log("🚀 ~ Student ~ getCountries ~ countries:", countries);
    }

    async getScore(){
        return 10;
    }

   


}

export const countriesApi = new CountriesApiAxios();
export const countriesApiFetch = new CountriesApiFetch();
export const gustavo = new Student(1, "Gus", 33, countriesApi);
gustavo.isValid = true;
console.log("🚀 ~ gustavo.isValid:", gustavo.isValid)
// gustavo.setAge = 34;
// gustavo.getAge;
gustavo.joinClass();
gustavo.getCountries();

//console.log(await gustavo.getScore()));
// gustavo.getScore().then((value:number)=>{
// console.log("🚀 ~ gustavo.getScore ~ value:", value)
// })
//console.log(await gustavo.getAllCountries());
// console.log("🚀 ~ gustavo.getAge;", gustavo.getAge)
// console.log("🚀 ~ gustavo:", gustavo.name)
