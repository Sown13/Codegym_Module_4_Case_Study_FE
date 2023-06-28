function register() {

}

function login() {
    let userLogin
    let email = $('#email').val()
    let password = $('#password').val()
    let newUser = {
        email: email,
        password: password
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/user/login",
        contentType: 'application/json',
        data: JSON.stringify(newUser),
        success(data) {
            userLogin = data.user1234567890;
            console.log(userLogin)
            alert("done !")
        },
        error() {
            alert("bug")
        }
    })
}
