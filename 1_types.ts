const isFetching: boolean = true
const isLoading: boolean = false

const integer: numb = 77

const message: string = 'Hey Type Script!'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const stringArray: string[] = ['some', 'string']

//Tuple
const contact: [string, number] = ['Some name', 7777777]

//Any
let someVar: any = 42
someVar = 'string'

//Func
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Jhon')

//Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type
type Login = string;

const login: Login = 'admin'

type ID = string | number
const id1: ID = 7
const id2: ID = 'id'

type someType = number | undefined | null