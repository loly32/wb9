// const age = 66
// if (age > 18) {
//     console.log('> 18');
// }
// else if ( age < 18) {
//     console.log('< 18');
// } 
// else {
//     console.log('= 18');
// }


// const brand = 'adidas'

// if (brand == 'adidas') {
//     console.log('yes');
// }

// % - остаток от деления

// console.log(1043 % 62 === 0);
// const a = 5847
// if (a % 2 === 0) {
//     console.log('odd');
// }
// else {
//     console.log('even');
// }

// && - и
// || - или

// const a = 45
// const b = 47
// if (a > b && b % 2 === 0) {
//     console.log('a*b', a* b);
// }
// else {
//     console.log('wrong data');
// }


// const guest = 'гость'

// switch (guest) {
//         default:
//             console.log('who are you');
//         break;

//     case 'mike':
//         console.log('hello,mike');
//         break;

//         case 'andrey':
//             console.log('adfg');
//         break;

//         case 'гость':
//             console.log('yeje');
//         break;

//         case 'кто-то':
//             console.log('hjkl');
//         break;
// }


// ЦИКЛЫ:

// i = i + (1)
// i += (1)
// // i++ - увелечение значения только на единицу

// let i = 0
// while (i < 5) {
//     alert (i)
//     i++
// }


// let i = 0

// do {
//     alert(i)
//     i++
// } while (i < 5);


// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
// }

// const str = 'dfDDFghfGFGfgFgfGfJGHFF'
// const arr = str.split('')
// console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             arr[i] = arr[i].toUpperCase()
//         } else {
//             arr[i] = arr[i].toLowerCase()
//         }
//     }
//         console.log(arr.join(''));


// const arr = [1,54,645,432,43,2,34]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 const temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
        
//     }
//                 console.log(arr);



// const arr = [1,54,645,432,43,2,34]
// let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//         console.log(max);
//     }