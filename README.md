
# Introducción a Typescript

Vamos a repasar un poco lo visto en la Introducción a **Typescript**!




## Pre-requisitos

**Node version:** 22 *Nota: Procura usar una versión LTS.

**Extensiones de VSCODE:** 
* **Tema que uso:** [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
* **Iconos que uso:** [Material icon theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)
* [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)
* [Auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
* [Typescript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
* [.env](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
* [Better dockerfile](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-dockerfile-syntax)
* [Error lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
* [Typescript snippets](https://marketplace.visualstudio.com/items?itemName=chris-noring.ts-snippets)



## Aplicación Vanilla

Para esta introducción, usaremos una aplicación Vanilla creada con el empaquetador Vite, el cual nos permite crear proyectos basados en node.js. Esta poderosa herramienta nos permitirá explorar la importación/exportción de módulos de una forma mas abreviada y dinámica.

Si quieres crear un proyecto desde cero usando esta herramienta, solo basta con ejecuta el comando **npm create vite** y seguir las intrucciones dadas por el CLI.

Al crearlo el proyecto nos dará la siguiente estructura:


![Imgur Image](https://i.imgur.com/cWph5hM.png)

No nos vamos a detener mucho en esta sección, pero podemos ver elementos como la carpeta **node_modules** que permite el almacenamiento de las dependencias usadas en el proyecto, la carpeta **public** que es donde se generarán los artefactos de despliegue, una carpeta **src** donde tendremos nuestra lógica de programación. Además contamos con elementos que harán mas fácil nuestra codificación y el versionamiento, como el **tsconfig.json** que es el archivo donde se configuran las reglas usadas por **Typescript**, las cuales definen parámetros como el lugar de despliegue de nuestra app y que tan estricto queremos que se comporte **Typescript**; tenemos también un archivo **.gitignore** el cual se encargará de exceptuar algunos elementos que no queremos versiones, como por ejemplo la carpeta de artefactos o el mismisimo **node_modules**. Finalmente tenemos los archivos **package.json** y **package-lock.json** los cuales contendrán principalmente la definición de dependencias de nuestro proyecto y el versionamiento que usamos a nivel de aplicación.

Para fines de esta lección, no nos detendremos a crear el proyecto de cero, sino que usaremos el que está alojado en este repositorio, para ello realizaremos los siguientes pasos:

    1. Abriremos una consola de comandos y navegamos hasta el directorio donde queremos clonar nuestro repo.
    2. Ejecutamos el comando git clone https://github.com/profe-gus/typescript-basics.git
    3. Corremos el comando cd typescript-basics
    4. Ahora corremos el comando **npm install**
    5. Cuando el proceso de instalación de dependencias finalice, probaremos la aplicación con el comando **npm run dev**
    6. En nuestra linea de comandos aparecerá una url algo asi como http://localhost:Puesto/ para acceder a ella bastará con hacer **ctrl + clic izquierdo** y se abrirá en tu navegador web habitual. Para las personas que usan MacOS, se debe hacer **CMD + clic**.
    7. Finalmente abrimos nuestro proyecto usando la herramienta VsCode (Visual Studio Code)

    ¡y ya está! ya tendremos acceso a nuestro proyecto.


## Tipos de dato

Para iniciar, vamos a crear una carpeta llamada type-basic y el archivo type-basic.ts dentro de ella. 

![Imgur Image](https://i.imgur.com/f2veQft.png)

**Typescript** infiere el tipo de dato cuando la variable tiene una asignación, sin embargo el tipo de dato que infiere, en caso de las constantes, será la asignación que tenga dicha variable.

![Imgur Image](https://i.imgur.com/81GoaRN.png)

```javascript
export const name = "Gus";
```
a esto se le llama **Type safety**, a través por lo cual **Typescript** asegura el tipo de dato de una variable con su asignación inicial.

Lo ideal es especificar el tipo de dato que lleva dicha variable:

```javascript
export const name:string = "Gus";
```

Al usar export, le estamos diciendo a vite que transforme el archivo en un módulo, el cual va a ejecutar todo el código cuando este sea llamado.

Para probar esta funcionalidad, solo basta con ir al archivo **main.ts** e importar esa variable **name**, paso siguiente es imprimirla a través del **innerHtml**

![Imgur Image](https://i.imgur.com/MN4bx2N.png)

Veremos algo asi: 

![Imgur Image](https://i.imgur.com/haD4R88.png)

Entre otros tipos de datos interesantes, tenemos el **template string** los cuales nos permiten trabajar con saltos de linea o strings multilinea. Para usarlos usamos el caracter especial **backtick (`)**.

El template string es tan poderoso que me permite usar dentro caracteres especiales como comillas dobles y sencillas, invocar funciones, crear expresiones e inyectar valores:

```javascript
    export const message:string = `
        Esto es un template stirng
        puede usar ' simples
        " dobles
        tener expresiones ${1+1}
        inyectar valores ${name}`;
```
Su impresión en consola se verá asi:

![Imgur Image](https://i.imgur.com/Ax6JoTM.png)

## Arreglos y Objects

Exploremos el siguiente arreglo:

```javascript
export const studentIds = [1,23,14,54];
```

Como sabemos, **Typescript** intuye automáticamente el tipo de dato que posee el arreglo. En este caso es de tipo *Number*. Por buenas prácticas vamos a agregar el tipo de dato.

```javascript
export const studentIds: Number[] = [1,23,14,54];
```

Si nosotros intentamos agregar un dato con un tipo diferente, **Typescript** nos arrojaráun error:

![Imgur Image](https://i.imgur.com/HI1ijM4.png)

Sin embargo veamos que pasa en el navegador web...

![Imgur Image](https://i.imgur.com/ZnY35vl.png)

Como podemos observar, el navegador aceptó este nuevo dato diferente en el arreglo. Esto se debe a que **Typescript** es un lenguaje **transpilado** lo que se traduce en que **Typescript** no se compila en artefacto de despliegue sino que se re-escribe en **Javascript** para poder ejecutarse en un servidor o navegador. Al ser **Javascript** el lenguaje que corre en nuestro navegador, se admiten este tipo de instrucciones como tener un arreglo númerico con un dato de tipo **String**.

**Nota:** Es posible transformar un string a un número agregando un **+**. Si lo que se quiere transformar no es un número, arrojará un **NaN**(Not a Number).

```javascript
studentIds.push(+"6");
studentIds.push(+"Hola Gus");
```

Dejando de lado los arreglos, ahora imaginemos que tenemos un objeto, el cual va a almacenar valores de diferente naturaleza:

```javascript
export const gustavo = {
    id: 1,
    name: "Gus"
}
```

**Typescript** me permite manejar esa sintaxis y no me limita la adición de nuevos y diversos datos al objeto:

```javascript
export const gustavo = {
    id: 1,
    name: "Gus",
    age:33
}
```

Para restringir esto, podemos definir la estructura que tendrá el objeto usando una interfaz. Las interfaces funcionan con un **blueprint** o plano inicial en el cual podemos definir la estructura de un objeto o clase. 

```javascript
interface Student {
    id: number;
    name:string;
    age:number;
}
```
De esta manera limitaremos al objeto a usar una estructura y tipados especificos. 

```javascript
export const gustavo: Student = {
    id: 1,
    name: "Gus",
    age:33
}
```
Ahora si cambiamos un tipo de dato o agregamos un nuevo elemento no definido en la interfaz, nos arrojará el siguiente error:

![Imgur Image](https://i.imgur.com/HzJVbxq.png)

Todos los objetos declarados en la interfaz son abstractos, es decir que estoy obligado a implementarlos donde quiera usarla. Existe una excepción a esta regla poniendo el simbolo **?** al final del identificador del campo de la interfaz, esto hará que este campo sea opcional y no estemos obligados a implementarlo:

```javascript
export const gustavo: Student = {
    id: 1,
    name: "Gus",
    age?:33
}
```

Volvamos al tema de los arreglos...

Tenemos el siguiente arreglo:

```javascript
export const students = [];
```
Intuitivamente **Typescript** lo cataloga como un arreglo de tipo **Never[]**

![Imgur Image](https://i.imgur.com/yuiiDnS.png)

Probemos agregando datos:


```javascript
export const gustavo:Student ={
    id: 1,
    name: "Gus",
    age: 33
}

students.push(1, "Hola mundo", gustavo);
```

Esto arroja lo siguiente cuando lo imprimimos: 

![Imgur Image](https://i.imgur.com/37tlHT1.png)

**[object, Object]** es la presentación de un objeto a través de un **string**.

Para corregir esto, asignamos el tipo de dato **Students[]** al arreglo, el cual lo define como un arreglo de tipo **Students**


```javascript
export const students:Student[] = [];
```
De esta manera podemos llenar nuestro arreglo con objetos de tipo Student.

```javascript
export const gustavo:Student ={
    id: 1,
    name: "Gus",
    age: 33
}

students.push(gustavo);
```
## Clases y su forma abreviada

Las clases se definen asi:

```javascript
export class Student {}
```

Los atributos se pueden definir de dos maneras:

```javascript
export class Student {
    id:number;
    name:string;
    age:number;
}
```

Esto arrojará un error ya que las variables no están inicialidas.

![Imgur Image](https://i.imgur.com/YYoFEXd.png)

Para corregir esto crearemos un constructor e inicializaremos las variables en el:

```javascript
export class Student {
    id:number;
    name:string;
    age:number;

    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
        console.log("El constructor ha sido llamado");
    }
}
```
Ahora creamos una instancia de la clase y le pasamos los parámetros. 

```javascript
export const gustavo = new Student(1, "Gus", 33);
```
En su forma resumida, la clase sería asi:

```javascript
export class Student{
    constructor(
        public readonly id:number, 
        public readonly name:string, 
        public readonly age:number){        
    }
}

export const gustavo = new Student(1, "Gus", 33);

console.log(gustavo.name)
```

## Getter y Setters

Se pueden establecer métodos para encapsular datos, estos métodos son especiales porque se comportan como propiedades cuando se llaman desde la instancia de una clase. Estos métodos funcionan de la siguiente forma:



```javascript
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
        age:number){
        this.id = id;
        this.name = name;
        this.age = age;
        this._isValid = false;
        
    }
}
```

Cuando instanciamos la clase, podemos usarlos como si fuera un atributo mas, en el caso del método set, funciona asignandole un valor a la propiedad con su nombre:

```javascript
    export const gustavo = new Student(1, "Gus", 33;
    gustavo.isValid = true;
    console.log("🚀 ~ gustavo.isValid:", gustavo.isValid)
```


## Métodos

También podemos tener funciones que ejecutan procesos:

```javascript
    constructor(){
        this.joinClass();
        this.activateStudent();
    }

    joinClass(){
        console.log(`The student ${this.name} now is in the class`)
    }

     activateStudent(){
        console.log(`The student ${name} has been activated`);
    }
```

## Métodos asincronos

Son métodos que ejecutan procesos a **"destiempo"**, es decir que ejecutan procesos fuera del tiempo normal en la ejecución. Los métodos asíncronos retornan promesas. 

Las promesas son objetos que representan la terminación o fracaso de una ejecución asíncrona. Una promesa usa funciones **callback** que controla las respuestas del proceso asíncrono. 

Los métodos asíncronos ejecutan tareas de larga duración y no impiden que otros procesos sigan respondiendo.Una vez que dicha tarea ha terminado, el método muestra el resultado. 

Supongamos que tenemos el siguiente método:

```javascript
    getScore(){
        return 10;
    }
```
Al imprimir este resultado sabemos que el resultado será 10.

Si lo convertimos a su forma asincrona, se verá asi:

```javascript
    async getScore(){
        return 10;
    }
```

lo que nos dará el siguiente resultado: 

![Imgur Image](https://i.imgur.com/v2G8tlL.png)

**Promise {<fulfilled>: 10}** significa que se resolvió un objeto de tipo **Promise*. Para adquirir el resultado real de dicha promesa, podemos situal la palabra **await** donde llamamos dicho método:

```javascript
    async getScore(){
        return 10;
    }

    await getScore();
```

Veamos esto con una petición http. Para esto haremos uso de una herramienta muy util llamada **axios**:

- para instalarla ejecutaremos el comando **npm install axios**

```javascript
    import axios from "axios";

        export class Student{

            async getAllCountries(){
                    const resp = await axios.get("https://restcountries.com/v3.1/all");
                    return resp;
            }
}

export const gustavo = new Student();
console.log(await gustavo.getAllCountries());
```
**axios** nos devuelve un objeto con una estrutura ya definida, la cual podremos desestructurar y obtener el objeto **data** que trae la información que devuelve el API.

```javascript
    import axios from "axios";

        export class Student{

            async getAllCountries(){
                    const {data} = await axios.get("https://restcountries.com/v3.1/all");
                    return data;
            }
}

export const gustavo = new Student();
console.log(await gustavo.getAllCountries());
```

Podemos crear una **interfaz** para tipar la respuesta que devuelve el API facil y rápido con ayuda de una poderosa herramienta llamada *quicktype**, contamos también con una extensión en **VSCode** llamada **Paste JSON as Code**

Para hacer esto haremos lo siguiente:

    1. Si no existe, crearemos la carpeta **interfaces** en la raiz de la carpeta src.
    2. dentro, crearemos el archivo **countries-response.interface.ts**.
    3. Ahora haremos una consulta a la API desde un navegador o usando la herramienta **Postman** y copiamos la respuesta.
    4. Con la respuesta en nuevo **portapapeles o clipboard**, iremos a la paleta de comandos de **VSCode**   y seleccionaremos el mando **Paste JSON as code**.
    5. Nos pedirá un nombre para el nivel superior de la interfaz, le pondremos **CountriesResponse**, ¡Y listo!, tendremos creada nuestra interfaz basada en la respuesta del API.

## Genéricos
Los genéricos son plantillas de código que se pueden definir y reutulizar en todo el código base. Permite indicar a las funciones, clases e interfaces que tipo deben tener al ser llamadas, se representan con los símbolos **<>**. 

En el método **get** de **axios**, podemos indicar que tipo de respuesta queremos obtener, esto dado que usa un **genérico** para especificar el tipado. En este caso, la respuesta que queremos es de tipo **CountriesResponse[]** por lo que haremos el siguiente ajuste:

```javascript
    import axios from "axios";
    import { CountriesResponse } from "../interfaces/countries-response.interface";

        export class Student{

            async getAllCountries(){
                    const {data} = await axios.get<CountriesResponse[]>("https://restcountries.com/v3.1/all");
                    return data;
            }
}

export const gustavo = new Student();
console.log(await gustavo.getAllCountries());
```
De esta manera, la propiedad **data** tendrá el tipo de dato **CountriesResponse** por lo cual será mas facil manipularla. 

## Inyección de dependencias

Es la acción de proporcionar una dependencia a la hora de construir una clase. 

La inyección de dependencias se realiza a través del constructor.

Para este ejemplo, tenemos una dependencia oculta llamada axios. Como está la implementación actual corremos el riesgo de que el API de axios cambie y el refactor en nuestro código sea dispendioso. Para esto vamos a construir una clase adaptadora, que centralizará el uso de axios. De esta manera la clase **Student** dependerá de de la implementación de esta clase adaptadora y no directamente de axios. 

vamos a crear la carpeta **api** en la raiz de la carpeta **src* y dentro de ella el archivo countries-api.ts.

Dentro de la clase tendremos la siguiente implementación:

```javascript
    import axios from "axios";
    import { CountriesResponse } from "../interfaces/countries-response.interface";

     export class CountriesApi{

    public URL:string= "https://restcountries.com/v3.1/all";

    async getAllCountries(){
        const { data } = await axios.get<CountriesResponse[]>(this.URL);
        return data[0].capital;
    }
}
```

En nuestra clase **Student** haremos los siguientes cambios:

```javascript
 import { CountriesApi } from "../api/countries-api";

        export class Student{

            constructor(private http: CountriesApi){}

            async getCountries(){
                const data = await this.http.getAllCountries();
                return data;        
            }
}

export const gustavo = new Student();
const countriesApi = new CountriesApi();
console.log(await gustavo.getCountries(countriesApi));
```
Le pasamos la instancia de la clase **CountriesApi** a la instancia de nuestra clase para que no hayan errores. 

Podemos ajustar el método **getAllCountries** para que reciba un genérico y asi controllar mejor la respuesta:

```javascript
 async getAllCountries<T>(){
        const { data } = await axios.get<T>(this.URL);
        return data;
    }
```
En la clase **Student** haremos este ajuste:
```javascript
 async getCountries(){
        const data  = await this.http.getAllCountries<CountriesApiAxios[]>();
        return data;
    }
```

## Sustitución de Liskov

En nuestro ejemplo vemos que la clase **Student** está amarrada a la implementación de la clase CountriesApi. Nosotros deberiamos poder implementar cualquier otra clase que contenta el método **getAllCountries** sin sufrir mayores cambios. 

Para este ejemplo, usaremos la función **fetch**, la cual es la forma nativa de Javascript para consumir API's. 

Ahora, vamos a modificar la clase **CountriesApi**, la vamos a dividir en dos clases llamadas **CountriesApiAxios** y **CountriesApiFetch** y en ellas vamos a implementar el método **getAllCountries**:

```javascript
import axios from "axios";

export class CountriesApiAxios{

    async getAllCountries<T>(){
        const { data } = await axios.get<T>("https://restcountries.com/v3.1/all");
        return data;
    }
}

export class CountriesApiFetch{
    async getAllCountries<T>(){
        const resp = await fetch('https://restcountries.com/v3.1/all');
        const data:T = await resp.json();
        return data;
    }
}
```

Si nosotros inyectamos una u otra clase dentro de **Student** como dependencia, automáticamente restrigimos el uso de la otra clase. Para ello cambiamos la dependencia de ambas clases a una interfaz que implemente el método que tienen en común:

```javasceript
import axios from "axios";

export interface HttpAdapter {
    getAllCountries<T>():Promise<T>;
}

export class CountriesApiAxios implements HttpAdapter{

    async getAllCountries<T>(){
        const { data } = await axios.get<T>("https://restcountries.com/v3.1/all");
        return data;
    }
}

export class CountriesApiFetch implements HttpAdapter{
    async getAllCountries<T>(){
        const resp = await fetch('https://restcountries.com/v3.1/all');
        const data:T = await resp.json();
        return data;
    }
}
```
De esta manera ya será posible inyectar una de las dos clases en la instancia de **Student** ya que ambas implementan la interfaz **HttpAdapter**

```javasceript
 import { HttpAdapter } from "../api/countries-api";

        export class Student{

            constructor(private http: HttpAdapter){}

            async getCountries(){
                const data = await this.http.getAllCountries();
                return data;        
            }
}

export const gustavo = new Student();
 const countriesApiAxios = new CountriesApiAxios();
 const countriesApiFetch = new CountriesApiFetch();
console.log(await gustavo.getCountries(CountriesApiAxios));
//console.log(await gustavo.getCountries(CountriesApiFetch));
```

De esta manera habremos solucionado la sustición de Liskov.