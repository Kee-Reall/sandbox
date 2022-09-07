const obj = {
    string: 'af',
    number: 14,
    date: '1faf',
    iWillChange: 'its will be changed by name',
    two(num){
        return num*2
    }    
}

const {date,...others} = obj

console.log(date)// вытянули поле data из объекта,
console.log(others)// всё остальное сложили в другой объект

const {string,number} = obj // вытягиваем другие поля, через запятую

console.log(string)
console.log(number)

const {iWillChange: othenName} = obj // вытянули поле, и после переименовали

console.log(othenName)

const {two: dubply, number: forteen, ...othershit} = obj // всё это можно комбинировать, порядок в деструктаризации объектов не важен

console.log(dubply(forteen))

const obj2 = {  // объекты вот такой вложенности, тоже можно деструктурировать
    valueOne: 42,
    inner: {
        valueTwo: 13,
        valueThree:3,
        valueFour:4,
        innerTwo:{
            valueFive: 5
        },
        valueSix:6
    },
    valueSeven:7
}

const {inner: {valueTwo}} = obj2 // выглядит сложно, но тут ты сначала забрал вложенный объект иннер, а затем забрал его поле , валью ту
console.log(valueTwo)

const {inner: { valueThree, valueFour: forthAfterChange}} = obj2 // комбинировали, и через запятую забрали поля, внутри вложенного объекта. второй переименовали

console.log(valueThree,forthAfterChange)

const{inner: { innerTwo: {valueFive:fifth}, valueSix:sixth},valueSeven:seventh} = obj2 // деструктаризацию тоже можно усложнить, не надо ей вклекаться. тут я забираю второй объект вложенности, и потом забираю поле без вложенности. 
// это Абсолютно нечитаемо, деструктуризация нужна для лаконичности кода. Если тебе кажется что так выглядит сложнее, скорее всего так и есть, и лучше не пользоваться ей


console.log(fifth)
console.log(sixth)
console.log(seventh)