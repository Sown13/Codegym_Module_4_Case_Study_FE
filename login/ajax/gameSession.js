function showNameUser(email_user) {
    let context = ``
    context += `<div class="skill-button">
    <a class="login-button">${email_user}</a>
    <a href="register.html"  onclick="changePageInGameSession()" class="register-button">Logout</a>
</div>`

    document.getElementById("information").innerHTML = context;
}

showNameUser(localStorage.getItem("emailUser"))

function changePageInGameSession() {
    localStorage.setItem("emailUser", null)
    var url = "gameSession.html"; // Đường dẫn đến trang mới
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = url; // Chuyển đến trang mới
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}