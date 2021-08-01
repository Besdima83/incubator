"use strict";

const search = document.getElementById('search')
const btn = document.getElementById('btn')
const arr = [
    {name: 'Dima', age: 23},
    {name: 'Vika', age: 24},
    {name: 'Ivan', age: 25},
    {name: 'Denis', age: 26},
]

const superSum = (a ,b) => {
    return (a + b)
}

const numArr = [3, 5, 8, 2, 4, 23, 1.45, 678]
let min = numArr[0]
let max = min
for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > max) {max = numArr[i]}
    if (numArr[i] < min) {min = numArr[i]}
}


const num = [23, 65, 25, 78, 84, 2, 9, 0, 234]
const findMax = (arr) => {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {max = arr[i]}
    }
    return max
}




let a = "XXX";
let b = "YYY";
let c = a
a = b
b = c
console.log(a);
console.log(b);

btn.addEventListener('click', () => {
    setTimeout(() => {
        search.value === 'google' ?
            alert('Yandex круче. Но это не точно') :
            alert(`${search.value},
        First name from array -  ${arr[0].name},
        Sum =  ${superSum(2,4)}
        Max num = ${max}, Min num = ${min},
        Max num function = ${findMax(num)}`)
    }, 3000)
})