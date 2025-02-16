
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

Si quieres crear un proyecto desde cero usando esta herramienta, solo basta con ejecutar el comando **npm create vite** y seguir las intrucciones dadas por el CLI.

Al crearlo, el proyecto nos dará la siguiente estructura:


![Imgur Image](https://i.imgur.com/cWph5hM.png)

No nos vamos a detener mucho en esta sección, pero podemos ver elementos como la carpeta **node_modules** que permite el almacenamiento de las dependencias usadas en el proyecto, la carpeta **public** que es donde se generarán los artefactos de despliegue, una carpeta **src** donde tendremos nuestra lógica de programación. Además contamos con elementos que harán mas fácil nuestra codificación y el versionamiento, como el **tsconfig.json** que es el archivo donde se configuran las reglas usadas por **Typescript**, las cuales definen parámetros como el lugar de despliegue de nuestra app y que tan estricto queremos que se comporte **Typescript**; tenemos también un archivo **.gitignore** el cual se encargará de exceptuar algunos elementos que no queremos versionar, como por ejemplo la carpeta de artefactos o el mismisimo **node_modules**. Finalmente tenemos los archivos **package.json** y **package-lock.json** los cuales contendrán principalmente la definición de dependencias de nuestro proyecto y el versionamiento que usamos a nivel de aplicación.

Para fines de esta lección, no nos detendremos a crear el proyecto de cero, sino que usaremos el que está alojado en este repositorio, para ello realizaremos los siguientes pasos:

    1. Abriremos una consola de comandos y navegamos hasta el directorio donde queremos clonar nuestro repo.
    2. Ejecutamos el comando git clone https://github.com/profe-gus/typescript-basics.git
    3. Corremos el comando cd typescript-basics
    4. Ahora corremos el comando npm install
    5. Cuando el proceso de instalación de dependencias finalice, probaremos la aplicación con el comando npm run dev
    6. En nuestra linea de comandos aparecerá una url algo asi como http://localhost:Puesto/ para acceder a ella bastará con hacer ctrl + clic izquierdo y se abrirá en tu navegador web habitual. Para las personas que usan MacOS, se debe hacer CMD + clic.
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
Ahora, si cambiamos un tipo de dato o agregamos un nuevo elemento no definido en la interfaz, nos arrojará el siguiente error:

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

**[object, Object]** es la representación de un objeto a través de un **string**.

Para corregir esto, asignamos el tipo de dato **Student[]** al arreglo, el cual lo define como un arreglo de tipo **Student**


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
export class Student {

    constructor(
        public readonly id:number, 
        public readonly name:string, 
        public readonly age:number){
            this.id = id;
            this.name = name;
            this.age = age;
            console.log("El constructor ha sido llamado");
    }
}

export const gustavo = new Student(1, "Gus", 33);
```

## Getter y Setters

Se pueden establecer métodos para encapsular datos:



```javascript
export class Student {

   get sayHello():string{
       return `Hello ${this.name}`;
   }

   set name(name:string){
       this.name = name;
   }

   constructor(
        public readonly id:number, 
        public readonly name:string, 
        public readonly age:number){
            this.id = id;
            this.name = name;
            this.age = age;
            console.log("El constructor ha sido llamado");
    }
}
```

## Métodos

También podemos tener funciones que ejecutan procesos:

```javascript
    joinClass(){
        console.log(`The student ${this.name} now is in the class`)
    }

     activateStudent(){
        console.log(`The student ${name} has been activated`);
    }
```