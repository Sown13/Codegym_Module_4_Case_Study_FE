function showNameUser(email_user) {
    let context = ``
    context += `<div class="skill-button">
    <a class="login-button">${email_user}</a>
</div>`

    document.getElementById("information").innerHTML = context;
}

showNameUser(localStorage.getItem("emailUser"))

function changePageInGameSession() {
    localStorage.setItem("emailUser", null)
    var url = "trang-chu.html"; // Đường dẫn đến trang mới
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = url; // Chuyển đến trang mới
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let i = 1

function inputMoreGameToPlay() {
    if (i === 4) {
    } else {
        let context = document.getElementById("input-game").innerHTML
        context += ` <div id="inputGame">
            <div class="form-group">
            <label for="email" style="color: white">Game ${i++}</label>
            <div class="input-button-wrapper">
            <input type="text" class="form-control" id="email">
            <button type="button" onclick="deleteDemo()" class="delete-game-button" data-index="1">Delete</button>
            </div>
            </div>
            </div>`
        document.getElementById("input-game").innerHTML = context
        event.preventDefault()
    }
}






