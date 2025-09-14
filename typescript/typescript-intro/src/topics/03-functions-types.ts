

function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number) => {
    return a + b;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}


// const multiplyResult: number = multiply(5);
// const result: number = addNumbersArrow(1, 2);
// console.log({result, multiplyResult})

interface Character {
    name: string;
    hp: number; 
    showHp: () => void;
}


 const healCharacter = ( character: Character, amount: number) => {

    character.hp += amount;

 }

 const strider: Character = {
    name: 'String',
    hp: 50,
    showHp () {
        console.log(`Puntos de vida ${ this.hp }`);
    }
 }

 healCharacter(strider, 10);
 healCharacter(strider, 50);

 strider.showHp()



export {};