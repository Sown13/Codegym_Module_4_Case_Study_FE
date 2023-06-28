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
displayIcon(`skill-detail-left`,`../img/before-convert/skill-2.webp`)

let itemDescription = [];
function describeItem(itemInInventoryList){
    itemDescription = [];
    for (let i = 0; i < itemInInventoryList.length; i++) {
        itemDescription.push("[" + itemInInventoryList[i].itemName +"]" + "<br>" + "[Str:"+ itemInInventoryList[i].itemStr + "]" +"<br>" + "[Int:"
        + itemInInventoryList[i].itemInt + "]" + "<br>" + "[Mind:" + itemInInventoryList[i].itemMind + "]" +"<br>" + "[Vit:" +  itemInInventoryList[i].itemVit + "]");
    }
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
    for (let i = 0; i < inventory.length; i++) {
        if(itemInInventoryList !== null) {
            replacePopupItem(`item-popup-${i+1}`,itemDescription[i]);
            displayIcon(`inventory-item-${i + 1}`, itemInInventoryList[i].itemImage);
            popupItemDetail(i+1,i+1);
        }
    }
}

