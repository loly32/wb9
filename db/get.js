const db_url = 'https://super-sus-bfcad-default-rtdb.firebaseio.com'

function getSmthng() {
    let arr = []
    fetch (`${db_url}/kids.json`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then( response => response.json())
    .then( result => {
        const a = Object.keys(result).map(key => result[key])
        console.log(a);
    })

    
    .catch( error => {
        console.log(error);
    }
    )
}
getSmthng()