import {getUser} from '../../api/api-hendlers'
import {api} from '../../api/fake-api';

let users;
export const user = async () => {
    await getUser(`${api}users`).then(res => users = res.users)
    console.log(users)
    const userFirstname = document.getElementById('user-firstname')
    const userSecondname = document.getElementById('user-secondname')
    const avatar = document.getElementById('avatar')
    avatar.style.width = '50px'
    avatar.style.height = '50px'
    avatar.style.borderRadius = '50%'

    users.forEach(el => {
        if (el.id === 10) {
            userFirstname.innerHTML = el.firstName
            userSecondname.innerHTML = el.lastName
            avatar.src = el.image
        }
    });
}
