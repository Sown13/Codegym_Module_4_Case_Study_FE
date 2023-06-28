let gameSessionId;
let inventoryList = [];
let itemInInventoryList = [];
let itemPool = [];

let playerList = [];
let playerDetailList = [];

let alivePlayerList = [];
let alivePlayerDetailList = [];

let deadPlayerList = [];
let deadPlayerDetailList = [];

let enemyList = [];
let enemyDetailList = [];

let aliveEnemyList = [];
let aliveEnemyDetailList = [];

let deadEnemyList = [];
let deadEnemyDetailList = [];

let player1SkillList = [];
let player2SkillList = [];
let player3SkillList = [];
let player4SkillList = [];

let enemy1SkillList = [];
let enemy2SkillList = [];
let enemy3SkillList = [];
let enemy4SkillList = [];

let playerEquippingList = [];
let player1EquippingList = [];
let player2EquippingList = [];
let player3EquippingList = [];
let player4EquippingList = [];



let checkCharTurn = [];
let isChar1Turn = true;
let isChar2Turn = true;
let isChar3Turn = true;
let isChar4Turn = true;
let enemyTurn = false;
checkCharTurn.push(isChar1Turn,isChar2Turn,isChar3Turn,isChar4Turn);
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
        url: "http://localhost:8080/game-character/player-list",
        success(gameCharacter) {
          return gameCharacter;
        }
    })
}


function getAlivePlayer(gameSessionId) {
    console.log("before run ajax")
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-character/player-list-alive/${gameSessionId}`,
        success:function (data) {
            alivePlayerList = data;
            console.log(alivePlayerList);
        }
    });
}


function getDeadPlayer(gameSessionId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-character/player-list-dead/${gameSessionId}`,
        success:function (data) {
            deadPlayerList = data;
            console.log(data);
        }
    });
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
function getAliveEnemy(gameSessionId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-character/enemy-list-alive/${gameSessionId}`,
        success:function (data) {
            aliveEnemyList = data;
            console.log(aliveEnemyList);
        }
    });
}

//đang đợi Tường trả ra dữ liệu chưa test được.
function getDeadEnemy(gameSessionId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-character/enemy-list-dead/${gameSessionId}`,
        success:function (data) {
            deadEnemyList = data;
            console.log(deadEnemyList);
        }
    });
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
function getAliveCharacterDetail(gameSessionId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/player-list-alive/${gameSessionId}`,
        success:function (data) {
            alivePlayerDetailList = data;
            console.log(alivePlayerDetailList);
        }
    });
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getDeadCharacterDetail(gameSessionId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/player-list-dead/${gameSessionId}`,
        success:function (data) {
            deadPlayerDetailList = data;
            console.log(deadPlayerDetailList);
        }
    });
}

function getAliveEnemyDetail(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/enemy-list-alive/${gameSessionId}`,
        success:function (data) {
            aliveEnemyDetailList = data;
            console.log(aliveEnemyDetailList);
        }
    });
}
function getDeadEnemyDetail(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/enemy-list-dead/${gameSessionId}`,
        success:function (data) {
            deadEnemyDetailList = data;
            console.log(deadEnemyDetailList);
        }
    });
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getItemPool() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/game-item",
        success(gameItem){
            itemPool = gameItem;
            console.log(gameItem)
        }

    })
}

// Chỉ lấy thông tin của player (không lấy thông tin của enemy) và thuộc 1 session cụ thể
//đang đợi Tường trả ra dữ liệu chưa test được.

function getInventory(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/inventory/game-session/${gameSessionId}`,
        success:function (data) {
            inventoryList = data;
            console.log(inventoryList);
        }
    });
}
function getItemInInventory(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-item/game-session/${gameSessionId}`,
        success:function (data) {
            itemInInventoryList = data;
            console.log(itemInInventoryList);
        }
    });
}
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









