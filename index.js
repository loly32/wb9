const input = document.getElementById('inp')
const btn = document.getElementById('btn')
const span = document.getElementById('span')
const k = document.getElementById('k')
const count = document.getElementById('count')


// let a = 0
btn.onclick = () => {
    span.innerHTML = input.value
    localStorage.setItem(`input`, input.value)
    // a++
}

k.onclick = () => {
//     localStorage.removeItem(`input${count.value}`)
// localStorage.clear()
if (count.value.length < 1) {
    localStorage.clear()
} else {
    localStorage.removeItem(`input${count.value}`)
}
 }