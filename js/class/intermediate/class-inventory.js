class Inventory {
    constructor(inventoryId, gameSession, gameItem, inventoryImage) {
        this._inventoryId = inventoryId;
        this._gameSession = gameSession;
        this._gameItem = gameItem;
        this._inventoryImage = inventoryImage;
    }

    get inventoryId() {
        return this._inventoryId;
    }

    set inventoryId(value) {
        this._inventoryId = value;
    }

    get gameSession() {
        return this._gameSession;
    }

    set gameSession(value) {
        this._gameSession = value;
    }

    get gameItem() {
        return this._gameItem;
    }

    set gameItem(value) {
        this._gameItem = value;
    }

    get inventoryImage() {
        return this._inventoryImage;
    }

    set inventoryImage(value) {
        this._inventoryImage = value;
    }
}
let inventory=new Inventory(1,new GameSession(1,"son",1200,new UserEntity(1,"Son","a","123","1","12321","a",true)),new GameItem(1,"Son",1,2,1,2,1,2,"1"),"a");