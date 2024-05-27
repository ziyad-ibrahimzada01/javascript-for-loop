// let numbers = [100, 300, 400, 50, 600];
// let minNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < minNumber) {
//         minNumber = numbers[i];
//     }
// }
// console.log(minNumber);




// let number = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let minNumber = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minNumber]) {
//                 minNumber = j;
//             }
//         }
//         let random = array[i];
//         array[i] = array[minNumber];
//         array[minNumber] = random;
//     }
//     return array;
// };
// let numbers = [200, 500, 100, 300, 400];
// console.log(number(numbers));




let number = (array) => {
    if (array.length === 0) return array;  
    let minNumber = 0;
    let maxNumber = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[minNumber]) {
            minNumber = i;
        }
        if (array[i] > array[maxNumber]) {
            maxNumber = i;
        }
    }
    let temp = array[minNumber];
    array[minNumber] = array[maxNumber];
    array[maxNumber] = temp;

    return array;
};
let numbers = [100,20,300,400,5000,600];
console.log(number(numbers)); 