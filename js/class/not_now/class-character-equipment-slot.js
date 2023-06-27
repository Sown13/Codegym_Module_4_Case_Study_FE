class ClassCharacterEquipmentSlot {
 constructor(characterEquipmentSlotId,equipmentSlot,gameCharacter) {
     this._characterEquipmentSlotId=characterEquipmentSlotId;
     this._equipmentSlot=equipmentSlot;
     this._gameCharacter=gameCharacter;
 }

    get characterEquipmentSlotId() {
        return this._characterEquipmentSlotId;
    }

    set characterEquipmentSlotId(value) {
        this._characterEquipmentSlotId = value;
    }

    get equipmentSlot() {
        return this._equipmentSlot;
    }

    set equipmentSlot(value) {
        this._equipmentSlot = value;
    }

    get gameCharacter() {
        return this._gameCharacter;
    }

    set gameCharacter(value) {
        this._gameCharacter = value;
    }
}