let user;
let inventoryList = [];
let itemInInventoryList = [];
let itemPool = [];
let currentSelectCharacter;
let currentCharacterIndex;
let currentSelectCharacterItem;
let currentSelectItem;
let characterItemTemp = [];

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
let playerSkillList = [];
let tempSkillList = [];
getSkillByCharacterAndGameSession(9,39);
console.log(tempSkillList);
let cheatingSkill = ["../img/skill/skill-2.webp","../img/skill/skill-3.webp","../img/skill/skill-4.webp","../img/skill/skill-5.webp","../img/skill/skill-6.webp"]
let enemy1SkillList = [];
let enemy2SkillList = [];
let enemy3SkillList = [];
let enemy4SkillList = [];

let playerEquippingList = [];
let player1EquippingList = [];
let player2EquippingList = [];
let player3EquippingList = [];
let player4EquippingList = [];

let char1Idle = "../img/character/grave-robber/gr-idle.gif";
let char2Idle = "../img/character/vestal/vestal-idle.gif";
let char3Idle = "../img/character/highwayman/hwm-idle.gif";
let char4Idle = "../img/character/crusader/crusader-idle.gif";
let charIdle = [char1Idle,char2Idle,char3Idle,char4Idle];

let char1Combat = "../img/character/grave-robber/gr-combat.gif";
let char2Combat = "../img/character/vestal/vestal-combat.gif";
let char3Combat = "../img/character/highwayman/hwm-combat.gif";
let char4Combat = "../img/character/crusader/crusader-combat.gif";
let charCombat = [char1Combat,char2Combat,char3Combat,char4Combat];

let char1Walk = "../img/character/grave-robber/gr-walk.gif";
let char2Walk = "../img/character/vestal/vestal-walk.gif";
let char3Walk = "../img/character/highwayman/hwm-walk.gif";
let char4Walk = "../img/character/crusader/crusader-walk.gif";
let charWalk = [char1Walk,char2Walk,char3Walk,char4Walk];

let char1Attack = "../img/character/grave-robber/gr-attack.webp";
let char2Attack = "../img/character/vestal/vestal-attack.webp";
let char3Attack = "../img/character/highwayman/hwm-attack.webp";
let char4Attack = "../img/character/crusader/crusader-attack.webp";
let charAttack = [char1Attack,char2Attack,char3Attack,char4Attack];

let char1Icon = "../img/character/grave-robber/gr-icon.png";
let char2Icon = "../img/character/vestal/vestal-icon.png";
let char3Icon = "../img/character/highwayman/hwm-icon.png";
let char4Icon = "../img/character/crusader/crusader-icon.png";
let charIcon = [char1Icon,char2Icon,char3Icon,char4Icon];

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
        }
    });
}
function getAllGameSessionByUserId(userId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-session/user/${userId}`,
        success(data) {
            gameSessionList = data;
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
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-character/player-list-alive/${gameSessionId}`,
        success:function (data) {
            alivePlayerList = data;
        }
    });
}


function getDeadPlayer(gameSessionId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-character/player-list-dead/${gameSessionId}`,
        success:function (data) {
            deadPlayerList = data;
        }
    });
}

//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllEnemy() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/game-character/enemy-player",
        success(gameCharacter) {
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
        }
    });
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAllCharacterDetail() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/character-detail",
        success(characterDetail) {
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
        }
    });
}

function getAliveEnemyDetail(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/enemy-list-alive/${gameSessionId}`,
        success:function (data) {
            aliveEnemyDetailList = data;
        }
    });
}
function getDeadEnemyDetail(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/enemy-list-dead/${gameSessionId}`,
        success:function (data) {
            deadEnemyDetailList = data;
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
        }
    });
}
function getItemInInventory(gameSessionId){
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/game-item/game-session/${gameSessionId}`,
        success:function (data) {
            itemInInventoryList = data;
        }
    });
}
function getAllCharacterItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/session-character",
        success(characterItem){
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getAliveCharacterItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/live-session-character",
        success(characterItem){
        }
    })
}
//đang đợi Tường trả ra dữ liệu chưa test được.
function getDeadCharacterItem() {
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/live-session-character",
        success(characterItem){
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
        }
    })
}

// ------------------------------------------------
function getSkillByCharacterAndGameSession(gameSessionId,characterId) {
    // return new Promise((resolve, reject) => {
        $.ajax({
            type:"GET",
            url:`http://localhost:8080/skill/game-session/${gameSessionId}/game-character/${characterId}`,
            success(data) {
                tempSkillList = data;
            }
        })}
    // )
// }

function getSkillOfAliveEnemy() {
   return new Promise((resolve, reject) => {
       $.ajax({
           type: "GET",
           url: "http://localhost:8080/skill",
           success(data) {
               resolve(data);
           },
           error(jqXHR, textStatus, errorThrown) {
               reject(errorThrown);
           }
       })
   });

}

// function addItemIntoInventory(inventoryId,gameSessionId,itemId){
//     let gameSession;
//     let gameItem;
//     $.ajax({
//         type:"GET",
//         url:`http://localhost:8080/game-item/${itemId}`,
//         success(data){
//             gameItem = data;
//         }
//     });
//     $.ajax({
//         type:"GET",
//         url:`http://localhost:8080/game-session/${gameSessionId}`,
//         success(data){
//             gameSession = data;
//         }
//     });
//
//     let inventory = new Inventory(inventoryId,gameSession,gameItem,gameItem.itemImage)
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         type: "PUT",
//         url: "http://localhost:8080/inventory/" + inventoryId,
//         data: JSON.stringify(inventory),
//         success() {
//             loadGameIdle(gameSessionId);
//         }
//     });
//     event.defaultPrevented;
// }
//
// function removeItemFromInventory(inventoryId,gameSessionId){
//     let gameSession;
//     $.ajax({
//         type:"GET",
//         url:`http://localhost:8080/game-session/${gameSessionId}`,
//         success(data){
//             gameSession = data;
//         }
//     });
//     let inventory = new Inventory(inventoryId,gameSession,null,null)
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         type: "PUT",
//         url: "http://localhost:8080/inventory/" + inventoryId,
//         data: JSON.stringify(inventory),
//         success() {
//             loadGameIdle(gameSessionId);
//         }
//     });
//     event.defaultPrevented;
// }
//
// function equipItemForCharacter(characterItemId,characterId,itemId){
//     let character ;
//     let item;
//     $.ajax({
//         type: "GET",
//         url: `http://localhost:8080/game-character/${characterId}`,
//         success:function (data) {
//             character = data;
//         }
//     });
//     $.ajax({
//         type: "GET",
//         url: `http://localhost:8080/game-item/${itemId}`,
//         success:function (data) {
//             item = data;
//         }
//     });
//
//     let characterItem = new CharacterItem(characterItemId,item,character);
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         type: "PUT",
//         url: "http://localhost:8080/character-item/" + characterItemId,
//         data: JSON.stringify(characterItem),
//         success() {
//             loadGameIdle(gameSessionId);
//         }
//     });
//     event.defaultPrevented;
// }
//
// function removeItemFromCharacter(characterItemId,characterId){
//     let character ;
//     $.ajax({
//         type: "GET",
//         url: `http://localhost:8080/game-character/${characterId}`,
//         success:function (data) {
//             character = data;
//         }
//     });
//
//     let characterItem = new CharacterItem(characterItemId,null,character);
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         type: "PUT",
//         url: "http://localhost:8080/character-item/" + characterItemId,
//         data: JSON.stringify(characterItem),
//         success() {
//             loadGameIdle(gameSessionId);
//         }
//     });
//     event.defaultPrevented;
// }
//
// function findCharacterItemByCharacterId(characterId){
//     $.ajax({
//         type: "GET",
//         url: `http://localhost:8080/character-item/game-character/${characterId}`,
//         success(data) {
//             characterItemTemp = data;
//             return characterItemTemp;
//         }
//     });
// }
//
// function findItemByCharacterItem(characterItemId){
//
//     $.ajax({
//         type: "GET",
//         url: `http://localhost:8080/game-item/character-item/${characterItemId}`,
//         success(data) {
//             currentSelectItem = data;
//             return currentSelectItem;
//         }
//     });
// }






