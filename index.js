// const student = {
//     firstname: 'Ilya',
//     secondname: 'Kolesnik',
//     age: 16,
//     sex: 'man',
// }
// const objKeys = Object.keys(student)
// console.log(objKeys);

// const objValues = Object.values(student)
// console.log(objValues);

// console.log(teacher.isMarried);
// teacher.isMarried = true
// teacher.job = 'teacher'
// console.log(teacher);






// const obj2 = student
// console.log(obj2)
// obj2.field = 'ddddd'
// console.log(student)
// console.log(obj2);

// const obj3 = {}

// for (prop in student) {
//     console.log(prop);
//     obj3 [prop] = student[prop]
// }
// console.log(obj3);
// obj3.lol = 'lol'

// console.log(student);
// console.log(obj3);

// const obj4 = Object.assign(student)
// obj4.lol = 'lol'
// console.log('obj4', obj4);
// const obj5 = Object.freeze (student)
// console.log('obj5',obj5);



// console.log(student.hasOwnProperty('sex'));



// function hello() {
//     console.log('hello');
// }

// hello()

// hello()

// function summ(a,b) {
//     console.log(a+b);
// }

// summ(4,56)
// summ(45,546)




// function summ(a,b,c) {
//     console.log(a+b-c);
// }

// summ(4,56,4)
// summ(2,3,7)




// function summ(a,b,c) {
//     console.log(a+b-c);
// }

// summ(4,4,56)
// summ(7,3,2)


// const summ2 = function(a,b,c){
//     console.log(a+b-c);
// }

// summ2 (4,4,56)
// summ (7,3,2)





// const summ3 = (a,b,c) => console.log(a+b-c);

// summ3(4,4,56)
// summ3(7,3,2)



// function args(a*ax,b*x,c,...rest) {
//     const sum = a
//     console.log(arguments); 
// }
// args (1,2,3,4,5,6,7,8,9)
// const arr = [5,4,3,2,1]
// console.log(...arr);



// function urvan(a,b,c){
//     const disk = (b*b-4*a*c)
//     console.log(disk);
//     if (disk > 0) {
//         const x1 = (-b+Math.sqrt(disk))/(2*a)
//         const x2 = (-b-Math.sqrt(disk))/(2*a)
//         console.log(x1)
//         console.log(x2)
//     } 
//     else if (disk == 0){
//             const x = (-b+Math.sqrt(disk))/(2*a)
//             console.log(x);
//            } else {
//                 console.log('нет корней');

//             }
//         }
    


// urvan(-4,28,-49) 



function sti(string){

    let counter = 0
    const arr = [' ', '.', ',', '!']
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && !arr.includes(string[i])) {
            counter++
        }

    }
    console.log(counter);
}


sti ('I have a car')
