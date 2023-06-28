// Hiển thị hình ảnh nhân vật, hoạt ảnh, etc..
function displayIcon(divElementId,imgElementSrc){
    let divElement = document.getElementById(divElementId);
    let imgElement = document.createElement('img');
    imgElement.src = imgElementSrc;
    imgElement.className = divElement.className;
    imgElement.id = divElement.id;
    imgElement.style.cssText = divElement.style.cssText;
    imgElement.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(imgElement, divElement);
}

let char1Src = '../img/gif/gun-man.gif';
let char2Src = '../img/gif/robber.gif';
let char3Src = '../img/gif/crusader.gif';
let char4Src = '../img/gif/man-at-arm-idle.gif';
let enemySrc = '../img/gif/hag.gif';


function removeIcon(divElementId){
    let divElement = document.getElementById(divElementId);
    let imgElement = document.createElement('img');
    imgElement.className = divElement.className;
    imgElement.id = divElement.id;
    imgElement.style.cssText = divElement.style.cssText;
    imgElement.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(imgElement, divElement);
}

let inventoryButtonIcon = `../img/before-convert/Inventory_Icon.webp`;
displayIcon('inventory-button-icon',inventoryButtonIcon)

let enemyButtonIcon = `../img/before-convert/monster-icon.png`;
displayIcon('enemy-button-icon',enemyButtonIcon);

let menuButtonIcon= `../img/before-convert/setting-button.png`;
displayIcon(`menu-button-icon`,menuButtonIcon)

// tạo popup cho item
function popupItemDetail(itemNumber,popupNumber){
    let hoverMe = document.querySelector(`#inventory-item-${itemNumber}`);
    let popup = document.querySelector(`#item-popup-${popupNumber}`);

    hoverMe.addEventListener('mouseover', function() {
        popup.style.display = 'block';
    });

    hoverMe.addEventListener('mouseout', function() {
        popup.style.display = 'none';
    });
}
// popupItemDetail(1,1);
// popupItemDetail(2,2);



let characterAction3 ='../img/before-convert/crusader-attack.webp';
let enemyDefend1 = '../img/before-convert/hag-defend.webp';
let audioElement = new Audio('../audio/crusader-attack-2.wav');
function displayCharacterAction(characterIndex,characterActionSrc) {
    audioElement.play();
    removeIcon(`char-${characterIndex}-inside`);
    displayIcon('character-action', characterActionSrc);
    removeIcon('enemy-inside');
    displayIcon('enemy-inside',enemyDefend1);
    setTimeout(function() { displayIcon('char-3-inside', char3Src); }, 700);
    setTimeout(function() { removeIcon('character-action'); }, 700);
    setTimeout(function() { removeIcon('enemy-inside'); }, 700);
    setTimeout(function() { displayIcon('enemy-inside',enemySrc)}, 700);
}
displayIcon(`character-avatar`,`../img/before-convert/crusader-avatar.png`)
displayIcon(`skill-detail-left`,`../img/skill/skill-2.webp`)

let itemDescription = [];
function describeItem(itemInInventoryList){
    itemDescription = [];
    for (let i = 0; i < itemInInventoryList.length; i++) {
        itemDescription.push("[" + itemInInventoryList[i].itemName +"]" + "<br>" + "[Str:"+ itemInInventoryList[i].itemStr + "]" +"<br>" + "[Int:"
        + itemInInventoryList[i].itemInt + "]" + "<br>" + "[Mind:" + itemInInventoryList[i].itemMind + "]" +"<br>" + "[Vit:" +  itemInInventoryList[i].itemVit + "]");
    }
}
function showCharacterInfo(){
    document.getElementById("main-bot-content-left").innerHTML =
        `<div id="character-detail-border" className="layout">
            <div id="character-avatar-border" className="layout">
                <img id="character-avatar"
                     style="position: absolute;object-fit: cover;bottom: 0;width: 100%;height: 100%">
            </div>
            <div id="character-name" className="layout">
                <p style="color: wheat"> Công nghiện / Hp: ?/? ///// Mp: ?/?</p>
            </div>
            <div id="character-detail" className="layout">
                <p style="color: wheat"> Str: , Int: ,...</p>
            </div>
        </div>
        <div id="character-misc" className="layout">
            <div id="skill-border" className="layout">
                <div id="skill-1" className="button-effect">
                    <img id="skill-1-image" src="../img/skill/skill-2.webp" style="width: 100%"
                         className="skill-button">
                </div>
                <div id="skill-2" className="button-effect">
                    <img id="skill-2-image" src="../img/skill/skill-3.webp" style="width: 100%"
                         className="skill-button">
                </div>
                <div id="skill-3" className="button-effect">
                    <img id="skill-3-image" src="../img/skill/skill-4.webp" style="width: 100%"
                         className="skill-button">
                </div>
                <div id="skill-4" className="button-effect">
                    <img id="skill-4-image" src="../img/skill/skill-5.webp" style="width: 100%"
                         className="skill-button">
                </div>
                <div id="skill-5" className="button-effect">
                    <img id="skill-5-image" src="../img/skill/skill-6.webp" style="width: 100%"
                         className="skill-button">
                </div>
            </div>
            <div id="skill-detail" className="character-detail-layout">
                <div id="skill-detail-left">
                    <img id="skill-image" style="width: 100%" className="layout">
                </div>
                <div id="skill-detail-right">
                    <button type="button"> Cộng điểm</button>
                    <button type="button"> Sử dụng</button>
                    <button type="button" onClick="displayCharacterAction(3,characterAction3)"> Đánh thường</button>
                    <p id="skill-detail-describe">Nộ long cước , Skill level, type: vật lý, sát thương: 10,mana:
                        0</p>
                </div>
            </div>
            <div id="equipment-1-border" className="character-detail-layout">
                <div id="equipment-1-border-left">
                    <img id="equipment-1-image" style="width: 100%" className="layout">
                </div>
                <div id="equipment-1-border-right">
                    <p id="equipment-1-detail"> Trống </p>
                    <button type="button"> Gỡ</button>
                </div>
            </div>
            <div id="equipment-2-border" className="character-detail-layout">
                <div id="equipment-2-border-left">
                    <img id="equipment-2-image" src="../img/before-convert/items/Seething_Sorrow_item.webp"
                         style="width: 100%;height: 100%" className="layout">
                </div>
                <div id="equipment-2-border-right">
                    <p id="equipment-2-detail"> Ma kiếm </p>
                    <button type="button"> Gỡ</button>
                </div>
            </div>
        </div>`;
}
function equip(){

}
function replacePopupItem(divElementId,itemDescription){
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

function displayInventory(inventory,itemInInventoryList){
    describeItem(itemInInventoryList);
    for (let i = 0; i < itemInInventoryList.length; i++) {
        if(itemInInventoryList[i] !== null) {
            replacePopupItem(`item-popup-${i+1}`,itemDescription[i]);
            displayIcon(`inventory-item-${i + 1}`, itemInInventoryList[i].itemImage);
            popupItemDetail(i+1,i+1);
        }
    }
}

// document.getElementById("char-1-inside").addEventListener(showCharacterInfo());

