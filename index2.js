const span = document.getElementById('span')

window.onload = () => {
    span.innerHTML = localStorage.getItem('input')
}