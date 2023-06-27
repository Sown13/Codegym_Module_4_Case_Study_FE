function getAllGameSession() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-session",
        success(gameSession) {
            console.log(gameSession)
        }
    });

}

//đang đợi tường viết font-end
function getAllPlayer() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/all-player",
        success(gameCharacter) {
            console.log(gameCharacter)
        }
    })
}

//đang đợi Tường trả ra dữ liệu chưa test được.
function getAlivePlayer() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/alive-player",
        success(gameCharacter) {
            console.log(gameCharacter)
        }
    })
}

//Đợi dữ liệu trả ra từ Tường
function getDeadPlayer() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/deab-player",
        success(gameCharacter) {
            console.log(gameCharacter)
        }
    })
}

//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllEnemy() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/enemy-player",
        success(gameCharacter) {
            console.log(gameCharacter)
        }
    })
}

//đang đợi Tường trả ra dữ liệu chưa test được.
function getAliveEnemy() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/alive-enemy-player",
        success(gameCharacter) {
            console.log(gameCharacter)
        }
    })
}

//đang đợi Tường trả ra dữ liệu chưa test được.
function getDeadEnemy() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/dead-enemy-player",
        success(gameCharacter) {
            console.log(gameCharacter)
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllCharacterDetail() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/character-detail",
        success(characterDetail) {
            console.log(characterDetail)
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAliveCharacterDetail() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/alive-character-detail",
        success(characterDetail) {
            console.log(characterDetail)
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getDeadCharacterDetail() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/dead-character-detail",
        success(characterDetail) {
            console.log(characterDetail)
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/game-item",
        success(gameItem){
            console.log(gameItem)
        }

    })
}

// Chỉ lấy thông tin của player (không lấy thông tin của enemy) và thuộc 1 session cụ thể
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllCharacterItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/session-character",
        success(characterItem){
            console.log(characterItem)
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAliveCharacterItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/live-session-character",
        success(characterItem){
            console.log(characterItem)
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getDeadCharacterItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/live-session-character",
        success(characterItem){
            console.log(characterItem)
        }
    })

}

// ------------------------------------------------------------------

// Chỉ lấy inventory của 1 session cụ thể
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllInventory() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/inventory",
        success(inventory){
            console.log(inventory)
        }
    })
}

// ------------------------------------------------
function getSkillOfAliveCharacter() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/character-alive",
        success(aliveCharacter){
            console.log(aliveCharacter)
        }
    })
}

function getSkillOfAliveEnemy() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/skill",
        success(skillAlive){
            console.log(skillAlive)
        }
    })
}









