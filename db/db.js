const link = document.getElementById ('link')
const title = document.getElementById ('title')
const description = document.getElementById ('description')
const price = document.getElementById ('price')
const btn = document.getElementById ('btn')
const product = document.getElementById ('product')

const db_url = 'https://super-sus-bfcad-default-rtdb.firebaseio.com'

btn.onclick = () => {
    const data = {
        link: link.value,
        title: title.value,
        description: link.value,
        price: link.value,
    }
    console.log(data);

    
    title.value = ''
    link.value = ''
    description.value = ''
    price.value = ''
    

    return fetch(`${db_url}/${product.value}.json`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch( error => {
        console.log(error);
    })

}