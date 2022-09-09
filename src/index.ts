// Basic types
const myTypeString: string = 'Hello world';
const myTypeNumber: number = 10;
const myTypeBoolean: boolean = true;

// Array
const arrayNumber: number[] = [1, 2, 3];
// otra forma
// const arrayNumber2: Array<number> = [1, 2, 3];

const arrString: string[] = ['uno', 'dos', 'tres'];

// Any puede ser de cualquier tipo, no se recomienda usar any
// excepcion: si estamos trabajando con una api que no sabemos que tipo de datos nos devuelve
const arrAny: any[] = [1, 'dos', true];

// Tuple
const tuplaPlayers: [string, number, boolean] = ['lucianor', 10, true];

// Tuple Array
let players: [number, string][];

players = [
    [1, 'Dibu'],
    [7, 'Fideo'],
    [10, 'Pulga'],
]

// Inferencia de tipos [TS es el que asigna el valor dependiente de que valor se le asigne]
let myVariable; //any
let myVariable1:string; // string
let myVariable2 = 'Hello'; // string, TS asigna string

// Composición de tipos
// Tipos complejos -> Unions, Generics
// Unions o Union Type
let myVariable3: string | number | null;
myVariable3 = 'Hello';
// myVariable3 = false; error