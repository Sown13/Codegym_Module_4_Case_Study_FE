let user

function register() {
    let username = $('#username').val()
    let email = $('#email').val()
    let password = $('#password').val()
    let rewritePassword = $('#rewritePassword').val()
    if (email === "" || password === "" || rewritePassword === "") {
        alert("Fill all the the form before register")
        event.preventDefault()
    } else if (username.length < 6 || username.length > 32) {
        alert("User name have only 6 to 32 letters")
        event.preventDefault()
    } else if (email.length < 6 || email > 32) {
        alert("email have only 6 to 32 letters")
        event.preventDefault()
    } else if (password.length > 8 || password.length < 6) {
        alert("Password have only 6 to 8 letters")
        event.preventDefault()
    } else if (password !== rewritePassword) {
        alert("Invalid rewritepassword")
        event.preventDefault()
    } else {
        let newUser = {
            username: username,
            email: email,
            password: password
        };
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/user/register",
            contentType: 'application/json',
            data: JSON.stringify(newUser),
            success() {
                console.log(newUser)
                alert("Register Successfully")
            }
        });
        event.preventDefault()
    }


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
            localStorage.setItem("idUser", userLogin.id)
            // localStorage.setItem("nameUser", userLogin.username)
            localStorage.setItem("emailUser", userLogin.email)
            alert("Login Successfully")
            changePage();
            user = userLogin;
            console.log(user)
        },
        error() {
            alert("bug")
        }
    });

}

// console.log(user_id)

function changePage() {
    var url = "gameSession.html"; // Đường dẫn đến trang mới
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = url; // Chuyển đến trang mới
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function renameURL() {
    var currentURL = window.location.href; // Lấy URL hiện tại
    var newURL = currentURL.replace("/Codegym_Module_4_Case_Study_FE/login/html/trang-chu.html", "/TrangChu");
    window.history.replaceState(null, null, newURL); // Thay đổi URL hiện tại của trang

    // Kiểm tra URL mới
    console.log(window.location.href);
}