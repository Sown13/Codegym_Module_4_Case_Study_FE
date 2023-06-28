class CharacterItem {
    constructor(characterItemId, gameItem,gameCharacter) {
        this._characterItemId=characterItemId;
        this._gameItem= gameItem;
        this._gameCharacter=gameCharacter;
    }

    get characterItemId() {
        return this._characterItemId;
    }

    set characterItemId(value) {
        this._characterItemId = value;
    }

    get gameItem() {
        return this._gameItem;
    }

    set gameItem(value) {
        this._gameItem = value;
    }

    get gameCharacter() {
        return this._gameCharacter;
    }

    set gameCharacter(value) {
        this._gameCharacter = value;
    }
}