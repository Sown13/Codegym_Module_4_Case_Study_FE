

function register() {
    let userFullName = $('#userFullName').val()
    let accountName = $('#accountName').val()
    let accountPassword = $('#accountPassword').val()
    let rewritePassword = $('#rewritePassword').val()
    if (accountName === "" || accountPassword === "" || rewritePassword === "") {
        alert("Fill all the the form before register")
        event.preventDefault()
    } else if (userFullName.length < 6 || userFullName.length > 32) {
        alert("User name have only 6 to 32 letters")
        event.preventDefault()
    } else if (accountName.length < 4 || accountName > 32) {
        alert("accountName have only 4 to 32 letters")
        event.preventDefault()
    } else if (accountPassword.length > 8 || accountPassword.length < 6) {
        alert("accountPassword have only 6 to 8 letters")
        event.preventDefault()
    } else if (accountPassword !== rewritePassword) {
        alert("Invalid rewritepassword")
        event.preventDefault()
    } else {
        let newUser = {
            userFullName: userFullName,
            accountName: accountName,
            accountPassword: accountPassword
        };
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/user-entity/register",
            contentType: 'application/json',
            data: JSON.stringify(newUser),
            success() {
                console.log(newUser)
                alert("Register Successfully")
                changePage("loginForm.html")
            }
        });
        event.preventDefault()
    }

}

function login() {
    let userLogin
    let accountName = $('#accountName').val()
    let accountPassword = $('#accountPassword').val()
    let newUser = {
        accountName: accountName,
        accountPassword: accountPassword
    };
    console.log(newUser)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/user-entity/login",
        contentType: 'application/json',
        data: JSON.stringify(newUser),
        success(data) {
            userLogin = data.user1234567890;
            console.log(userLogin)
            console.log(userLogin.userId)
            localStorage.setItem("id", userLogin.userId)
            // localStorage.setItem("nameUser", userLogin.username)
            localStorage.setItem("accountName", userLogin.accountName)
            alert("Login Successfully")
            changePage("game-session.html");
            user = userLogin;
            console.log(user);
            getAllGameSessionByUserId(user.userId);
        },
        error() {
            alert("Wrong account or password ")
        }
    });
return userLogin.userId
}

// console.log(user_id)

function changePage(url) {
     // Đường dẫn đến trang mới
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = url; // Chuyển đến trang mới
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function playGame(gameSessionId){
    loadGame(gameSessionId);
    changePage("../../html/layout.html");
    loadGame(gameSessionId);
}

function renameURL() {
    var currentURL = window.location.href; // Lấy URL hiện tại
    var newURL = currentURL.replace("/Codegym_Module_4_Case_Study_FE/login/html/trang-chu.html", "/TrangChu");
    window.history.replaceState(null, null, newURL); // Thay đổi URL hiện tại của trang

    // Kiểm tra URL mới
    console.log(window.location.href);
}

function changePageInRegister() {
    var url = "trang-chu.html"; // Đường dẫn đến trang mới
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = url; // Chuyển đến trang mới
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

