import { Toast }from './toast/toast.js'

const init = () => {
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')
    const loginButton = document.getElementById('signin')

    if(loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault()

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value
                })
            }).then((res) => {
                if(res.status === 200) {
                    return Toast.show("Login succesfully", "success")
                }
                Toast.show("Login Failied", "error")
            }).catch(() => {
                Toast.show("Login Failied", "error")
            })
        })
    }
}

window.onload = init