class ClassEquipmentSlot {
    constructor( equipmentSlotId,equipmentSlotName,equipmentSlotImage) {
        this._equipmentSlotId=equipmentSlotId;
        this._equipmentSlotName=equipmentSlotName;
        this._equipmentSlotImage=equipmentSlotImage;
    }

    get equipmentSlotId() {
        return this._equipmentSlotId;
    }

    set equipmentSlotId(value) {
        this._equipmentSlotId = value;
    }

    get equipmentSlotName() {
        return this._equipmentSlotName;
    }

    set equipmentSlotName(value) {
        this._equipmentSlotName = value;
    }

    get equipmentSlotImage() {
        return this._equipmentSlotImage;
    }

    set equipmentSlotImage(value) {
        this._equipmentSlotImage = value;
    }
}