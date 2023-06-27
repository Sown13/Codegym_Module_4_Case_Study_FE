// Hiển thị hình ảnh nhân vật, hoạt ảnh, etc..
function displayIcon(divElementId,imgElementSrc){
    let divElement = document.getElementById(divElementId);
    let imgElement = document.createElement('img');
    imgElement.src = imgElementSrc;
    imgElement.className = divElement.className;
    imgElement.style.cssText = divElement.style.cssText;
    imgElement.style.cssFloat = divElement.style.cssFloat;
    divElement.parentNode.replaceChild(imgElement, divElement);
}
let char1Src = '../img/gif/gun-man.gif';
let char2Src = '../img/gif/robber.gif';
let char3Src = '../img/gif/crusader.gif';
let char4Src = '../img/gif/man-at-arm-idle.gif';
let enemySrc = '../img/gif/hag.gif';
displayIcon('enemy-inside',enemySrc);
displayIcon('char-1-inside',char1Src);
displayIcon('char-2-inside',char2Src);
displayIcon('char-3-inside',char3Src);
displayIcon('char-4-inside',char4Src);

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
popupItemDetail(1,1);
popupItemDetail(2,2);