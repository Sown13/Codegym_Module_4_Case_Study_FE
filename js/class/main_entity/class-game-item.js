class GameItem {
    constructor(itemId,itemName,itemStr,itemInt,itemVit,itemMind,itemSpecial,itemPrice,itemImage) {
        this._itemId=itemId;
        this._itemName=itemName;
        this._itemStr=itemStr;
        this._itemInt=itemInt;
        this._itemVit=itemVit;
        this._itemMind=itemMind;
        this._itemSpecial=itemSpecial;
        this._itemPrice=itemPrice;
        this._itemImage=itemImage;

    }

    get itemId() {
        return this._itemId;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get itemStr() {
        return this._itemStr;
    }

    set itemStr(value) {
        this._itemStr = value;
    }

    get itemInt() {
        return this._itemInt;
    }

    set itemInt(value) {
        this._itemInt = value;
    }

    get itemVit() {
        return this._itemVit;
    }

    set itemVit(value) {
        this._itemVit = value;
    }

    get itemMind() {
        return this._itemMind;
    }

    set itemMind(value) {
        this._itemMind = value;
    }

    get itemSpecial() {
        return this._itemSpecial;
    }

    set itemSpecial(value) {
        this._itemSpecial = value;
    }

    get itemPrice() {
        return this._itemPrice;
    }

    set itemPrice(value) {
        this._itemPrice = value;
    }

    get itemImage() {
        return this._itemImage;
    }

    set itemImage(value) {
        this._itemImage = value;
    }
}