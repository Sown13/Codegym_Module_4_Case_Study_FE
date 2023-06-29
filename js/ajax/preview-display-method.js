// Hiển thị hình ảnh nhân vật, hoạt ảnh, etc..
function displayIcon(divElementId, imgElementSrc) {
    let divElement = document.getElementById(divElementId);
    let imgElement = document.createElement('img');
    imgElement.src = imgElementSrc;
    imgElement.className = divElement.className;
    imgElement.id = divElement.id;
    imgElement.style.cssText = divElement.style.cssText;
    imgElement.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(imgElement, divElement);
}

function displayAllAlivePlayer(alivePlayerDetailList, charIconSrcList) {
    for (let i = 0; i < alivePlayerDetailList.length; i++) {
        displayIcon(`char-${i + 1}-inside`, charIconSrcList[i]);
        let characterId = alivePlayerDetailList[i].gameCharacter.characterId;
        document.getElementById(`char-${i + 1}-inside`).addEventListener("click", () => setCurrentSelect(characterId, i));
        document.getElementById(`char-${i + 1}-inside`).addEventListener("click", () => showCharacterInfo(characterId));
    }
}

// displayIcon("character-avatar",charIcon[2])
// displayIcon(`character-avatar`, `../img/before-convert/crusader-avatar.png`)
displayIcon(`skill-detail-left`, `../img/skill/skill-2.webp`)

function setCurrentSelect(characterId, index) {
    currentSelectCharacter = characterId;
    currentCharacterIndex = index;
    console.log(currentSelectCharacter);
    console.log(currentCharacterIndex);
}

let char1Src = '../img/gif/gun-man.gif';
let char2Src = '../img/gif/robber.gif';
let char3Src = '../img/gif/crusader.gif';
let char4Src = '../img/gif/man-at-arm-idle.gif';
let enemySrc = '../img/gif/hag.gif';


function removeIcon(divElementId) {
    let divElement = document.getElementById(divElementId);
    let imgElement = document.createElement('img');
    imgElement.className = divElement.className;
    imgElement.id = divElement.id;
    imgElement.style.cssText = divElement.style.cssText;
    imgElement.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(imgElement, divElement);
}

let inventoryButtonIcon = `../img/before-convert/Inventory_Icon.webp`;
displayIcon('inventory-button-icon', inventoryButtonIcon)

let enemyButtonIcon = `../img/before-convert/monster-icon.png`;
displayIcon('enemy-button-icon', enemyButtonIcon);

let menuButtonIcon = `../img/before-convert/setting-button.png`;
displayIcon(`menu-button-icon`, menuButtonIcon)

// tạo popup cho item
function popupItemDetail(itemNumber, popupNumber) {
    let hoverMe = document.querySelector(`#inventory-item-${itemNumber}`);
    let popup = document.querySelector(`#item-popup-${popupNumber}`);

    hoverMe.addEventListener('mouseover', function () {
        popup.style.display = 'block';
    });

    hoverMe.addEventListener('mouseout', function () {
        popup.style.display = 'none';
    });
}

// popupItemDetail(1,1);
// popupItemDetail(2,2);


let characterAction3 = '../img/before-convert/crusader-attack.webp';
let enemyDefend1 = '../img/before-convert/hag-defend.webp';
let audioElement = new Audio('../audio/crusader-attack-2.wav');


// function displayCharacterAction(characterIndex, characterActionSrc) {
//     audioElement.play();
//     removeIcon(`char-${characterIndex}-inside`);
//     displayIcon('character-action', characterActionSrc);
//     removeIcon('enemy-inside');
//     displayIcon('enemy-inside', enemyDefend1);
//     setTimeout(function () {
//         displayIcon('char-3-inside', char3Src);
//     }, 700);
//     setTimeout(function () {
//         removeIcon('character-action');
//     }, 700);
//     setTimeout(function () {
//         removeIcon('enemy-inside');
//     }, 700);
//     setTimeout(function () {
//         displayIcon('enemy-inside', enemySrc)
//     }, 700);
// }


function displayCharacterAction(characterIndex, characterActionSrc) {
    audioElement.play();
    removeIcon(`char-${characterIndex+1}-inside`);
    displayIcon('character-action', characterActionSrc);
    removeIcon('enemy-inside');
    displayIcon('enemy-inside', enemyDefend1);
    setTimeout(function () {
        displayIcon(`char-${characterIndex+1}-inside`, charCombat[characterIndex]);
    }, 700);
    setTimeout(function () {
        removeIcon('character-action');
    }, 700);
    setTimeout(function () {
        removeIcon('enemy-inside');
    }, 700);
    setTimeout(function () {
        displayIcon('enemy-inside', enemySrc)
    }, 700);
    setTimeout(function () {
        displayAllAlivePlayer(alivePlayerDetailList,charCombat)
    },700)

}


let itemDescription = [];

function describeItem(itemInInventoryList) {
    itemDescription = [];
    for (let i = 0; i < itemInInventoryList.length; i++) {
        itemDescription.push("[" + itemInInventoryList[i].itemName + "]" + "<br>" + "[Str:" + itemInInventoryList[i].itemStr + "]" + "<br>" + "[Int:"
            + itemInInventoryList[i].itemInt + "]" + "<br>" + "[Mind:" + itemInInventoryList[i].itemMind + "]" + "<br>" + "[Vit:" + itemInInventoryList[i].itemVit + "]");
    }
}

function findCharacterIndex(characterId, alivePlayerList) {
    let index = 0;
    for (let i = 0; i < alivePlayerList; i++) {
        if (characterId == alivePlayerList[i].characterId) {
            console.log(index);
            index = i;
            return index;
        }
    }
}
// displayCharacterAction(3,charAttack[3]);
function showCharacterInfo(characterId) {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/character-detail/game-character/${characterId}`,
        success: function (data) {
            selectingCharacter = data;
            let context = "";
            context +=
                `<div id="character-detail-border" class="layout">
            <div id="character-avatar-border" class="layout">
                <img id="character-avatar" src="${selectingCharacter.gameCharacter.characterImage}"
                     style="position: absolute;object-fit: cover;bottom: 0;width: 100%;height: 100%">
            </div>
            <div id="character-name" class="layout">
                <p style="color: wheat"> ${selectingCharacter.gameCharacter.characterName} 
                <br> Sinh lực:${selectingCharacter.health}
                <br> Nội lực:${selectingCharacter.mana}
                </p>
            </div>
            <div id="character-detail" class="layout">
                <p style="color: wheat"> Str:${selectingCharacter.gameCharacter.characterStr} - Int:${selectingCharacter.gameCharacter.characterInt}
                 <br> Vit:${selectingCharacter.gameCharacter.characterVit} - Mind:${selectingCharacter.gameCharacter.characterMind} 
                 <br> Sát thương vật lý :${selectingCharacter.physAtk} <br> Giáp:${selectingCharacter.physDef}
                 <br> Sức mạnh pháp thuật :${selectingCharacter.magicAtk} <br> Kháng:${selectingCharacter.magicDef}
                 </p>
            </div>
        </div>
        <div id="character-misc" class="layout">
            <div id="skill-border" class="layout">`
                for (let i = 0; i < 5; i++) {
                    console.log(cheatingSkill);
                    context += `<div id="skill-${i}" class="button-effect">
                    <img id="skill-1-image" src="${cheatingSkill[i]}" style="width: 100%" 
                    class="skill-button">
                                </div>`
                }

                // `<div id="skill-2" class="button-effect">
                //     <img id="skill-2-image" src="../img/skill/skill-3.webp" style="width: 100%"
                //          class="skill-button">
                // </div>
                // <div id="skill-3" class="button-effect">
                //     <img id="skill-3-image" src="../img/skill/skill-4.webp" style="width: 100%"
                //          class="skill-button">
                // </div>
                // <div id="skill-4" class="button-effect">
                //     <img id="skill-4-image" src="../img/skill/skill-5.webp" style="width: 100%"
                //          class="skill-button">
                // </div>
                // <div id="skill-5" class="button-effect">
                //     <img id="skill-5-image" src="../img/skill/skill-6.webp" style="width: 100%"
                //          class="skill-button">
                // </div>
           context += `</div>
            <div id="skill-detail" class="character-detail-layout">
                <div id="skill-detail-left">
                    <img id="skill-image" style="width: 100%" class="layout">
                </div>
                <div id="skill-detail-right">
                    <button type="button"> Cộng điểm</button>
                    <button type="button"> Sử dụng</button>
                    <button type="button" onClick="displayCharacterAction(${currentCharacterIndex},'${charAttack[currentCharacterIndex]}')"> Đánh thường</button>
         
                    <p id="skill-detail-describe">Nộ long cước , Skill level, type: vật lý, sát thương: 10,mana:
                        0</p>
                </div>
            </div>
            <div id="equipment-1-border" class="character-detail-layout">
                <div id="equipment-1-border-left">
                    <img id="equipment-1-image" style="width: 100%" class="layout">
                </div>
                <div id="equipment-1-border-right">
                    <p id="equipment-1-detail"> Trống </p>
                    <button type="button"> Gỡ</button>
                </div>
            </div>
            <div id="equipment-2-border" class="character-detail-layout">
                <div id="equipment-2-border-left">
                    <img id="equipment-2-image" src="../img/before-convert/items/Seething_Sorrow_item.webp"
                         style="width: 100%;height: 100%" class="layout">
                </div>
                <div id="equipment-2-border-right">
                    <p id="equipment-2-detail"> Ma kiếm </p>
                    <button type="button"> Gỡ</button>
                </div>
            </div>
        </div>`;
            document.getElementById("main-bot-content-left").innerHTML = context;
        }
    });
}


function displaySkillDetail(skillIndex,characterIndex){

}

// function equip(inventoryId,gameSessionId,characterId, ItemId) {
//     characterItemTemp = findCharacterItemByCharacterId(characterId);
//
//     equipItemForCharacter();
//     removeItemFromInventory();
//
// }

function replacePopupItem(divElementId, itemDescription) {
    let divElement = document.getElementById(divElementId);
    let newDiv = document.createElement('div');
    newDiv.innerHTML = itemDescription;
    newDiv.className = divElement.className;
    newDiv.id = divElement.id;
    // document.getElementById(newDiv.id).addEventListener(equip());
    newDiv.style.cssText = divElement.style.cssText;
    newDiv.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(newDiv, divElement);
}

function displayInventory(inventory, itemInInventoryList) {
    describeItem(itemInInventoryList);
    for (let i = 0; i < itemInInventoryList.length; i++) {
        if (itemInInventoryList[i] !== null) {
            replacePopupItem(`item-popup-${i + 1}`, itemDescription[i]);
            displayIcon(`inventory-item-${i + 1}`, itemInInventoryList[i].itemImage);
            popupItemDetail(i + 1, i + 1);
            // document.getElementById(`inventory-item-${i + 1}`).addEventListener('click', equip(currentSelectCharacter, itemInInventoryList[i].itemId));
        }
    }
}

// document.getElementById("char-1-inside").addEventListener(showCharacterInfo());
// Create a new style element
const moving = document.createElement('style');

function movingBackground() {
// Set the CSS text of the style element
    moving.textContent = `@keyframes moveBackground {
    from { background-position: 0 0; }
    to { background-position: -100% 0; }
}`;

// Append the style element to the head of the document
    document.getElementsByClassName("main-top")[0].appendChild(moving);
}

function removeKeyframe() {
    if (document.getElementsByClassName("main-top")[0].contains(moving)) {
        document.getElementsByClassName("main-top")[0].removeChild(moving);
    }
}


function displayPlayerStatus(characterIndex) {
    if (alivePlayerDetailList.length > 0) {
        let divElementHp = document.getElementById(`char-${characterIndex + 1}-hp`);
        let divElementParent = document.getElementById(`char-${characterIndex + 1}-status`);
        let divElementMp = document.getElementById(`char-${characterIndex + 1}-mp`);
        let heath = document.createElement('p');
        let mana = document.createElement('p');
        heath.innerHTML = "HP: " + alivePlayerDetailList[characterIndex].health;
        heath.className = divElementHp.className;
        heath.id = divElementHp.id;
        heath.style.cssText = divElementHp.style.cssText;
        heath.style.cssFloat = divElementHp.style.cssFloat;
        divElementParent.replaceChild(heath, divElementHp);

        mana.innerHTML = "Mp: " + alivePlayerDetailList[characterIndex].mana;
        mana.className = divElementMp.className;
        mana.id = divElementMp.id;
        mana.style.cssText = divElementMp.style.cssText;
        mana.style.cssFloat = divElementMp.style.cssFloat;
        divElementParent.replaceChild(mana, divElementMp);
    }
}

function displayAllPlayerStatus(aliveCharacterDetailList) {
    for (let i = 0; i < aliveCharacterDetailList.length; i++) {
        displayPlayerStatus(i);
    }
}


function displayEnemyStatus(characterIndex) {
    if (aliveEnemyDetailList.length > 0) {
        let divElementHp = document.getElementById(`enemy-hp`);
        let divElementParent = document.getElementById(`enemy-status`);
        let enemyHeath = document.createElement('p');
        enemyHeath.innerHTML = "HP: " + aliveEnemyDetailList[characterIndex].health;
        enemyHeath.className = divElementHp.className;
        enemyHeath.id = divElementHp.id;
        enemyHeath.style.cssText = divElementHp.style.cssText;
        enemyHeath.style.cssFloat = divElementHp.style.cssFloat;
        divElementParent.replaceChild(enemyHeath, divElementHp);
    }
}

function displayAllEnemyStatus(aliveEnemyDetailList) {
    for (let i = 0; i < aliveEnemyDetailList.length; i++) {
        displayEnemyStatus(i);
    }
}

function removeEnemyStatus() {
    let divElement = document.getElementById(`enemy-hp`);
    let emptyDiv = document.createElement('div');
    emptyDiv.className = divElement.className;
    emptyDiv.id = divElement.id;
    emptyDiv.style.cssText = divElement.style.cssText;
    emptyDiv.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(emptyDiv, divElement);
}



