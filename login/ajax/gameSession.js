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

let gameSessionList = [];


function createNewGameToPlay() {
    if (gameSessionList.length === 4) {
    } else {
        loadGameSessionPage();
        let context = document.getElementById("input-game").innerHTML;
        context += ` <div id="inputGame">
            <div class="form-group">
            <label for="email" style="color: white">Game ${gameSessionList.length+1}</label>
            <div class="input-button-wrapper">
            <button type="text" class="form-control" id="email" style="width: 100%" onclick="playGame(gameSessionList)">Chơi</button>
            <button type="button" onclick="deleteDemo()" class="delete-game-button" data-index="1">Delete</button>
            </div>
            </div>
            </div>`
        document.getElementById("input-game").innerHTML = context
        event.preventDefault()
    }
}

function loadGameSessionPage(){
    let context = document.getElementById("input-game").innerHTML
    for (let i = 0; i < gameSessionList.length; i++) {
        context += ` <div id="inputGame">
            <div class="form-group">
            <label for="email" style="color: white">Game ${gameSessionList.length+1}</label>
            <div class="input-button-wrapper">
            <button type="text" class="form-control" id="email" style="width: 100%" onclick="playGame(gameSessionList[i].gameSessionId)">Chơi</button>
            <button type="button" onclick="deleteDemo()" class="delete-game-button" data-index="1">Delete</button>
            </div>
            </div>
            </div>`
    }
    document.getElementById("input-game").innerHTML = context
}
loadGameSessionPage();
console.log(gameSessionList);





