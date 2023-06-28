class GameItemEquipmentSlot {
    constructor(gameItemEquipmentSlotId,equipmentSlot,gameItem) {
        this._gameItemEquipmentSlotId=gameItemEquipmentSlotId;
        this._equipmentSlot=equipmentSlot;
        this._gameItem=gameItem;

    }

    get gameItemEquipmentSlotId() {
        return this._gameItemEquipmentSlotId;
    }

    set gameItemEquipmentSlotId(value) {
        this._gameItemEquipmentSlotId = value;
    }

    get equipmentSlot() {
        return this._equipmentSlot;
    }

    set equipmentSlot(value) {
        this._equipmentSlot = value;
    }

    get gameItem() {
        return this._gameItem;
    }

    set gameItem(value) {
        this._gameItem = value;
    }
}