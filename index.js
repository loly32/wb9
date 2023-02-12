// const b1 = document.getElementById('b1')
// console.log(b1);

// const b2_1 = document.querySelector('.b2')
// const b2_2 = document.querySelector('#b2')
// console.log(b2_1);
// console.log(b2_2);


// const li = document.querySelectorAll('li')
// console.log(li);

// for (let elem of li) {
//     console.log(elem.matches('li[value="6"]'));
// }

// let chapter = document.querySelector('.chapter')

// console.log(chapter.closest('.book'));
// console.log(chapter.closest('.contents'));

// console.log(chapter.closest('h1'));



const inpWrite = document.('#writting')
const p = document.querySelection('#p')

inpWrite.addEventListener('input',() => {
    console.log(inpWrite.value);
    p.innerHTML = inpWrite.value
})