class CharacterDetail{
    constructor(characterDetailId,health,mana,physAtk,physDef,magicAtk,magicDef,gameCharacter) {

        this._characterDetailId = characterDetailId;
        this._health = health;
        this._mana = mana;
        this._physAtk = physAtk;
        this._physDef = physDef;
        this._magicAtk = magicAtk;
        this._magicDef = magicDef;
        this._gameCharacter = gameCharacter;
    }

    get characterDetailId() {
        return this._characterDetailId;
    }

    set characterDetailId(value) {
        this._characterDetailId = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    get mana() {
        return this._mana;
    }

    set mana(value) {
        this._mana = value;
    }

    get physAtk() {
        return this._physAtk;
    }

    set physAtk(value) {
        this._physAtk = value;
    }

    get physDef() {
        return this._physDef;
    }

    set physDef(value) {
        this._physDef = value;
    }

    get magicAtk() {
        return this._magicAtk;
    }

    set magicAtk(value) {
        this._magicAtk = value;
    }

    get magicDef() {
        return this._magicDef;
    }

    set magicDef(value) {
        this._magicDef = value;
    }

    get gameCharacter() {
        return this._gameCharacter;
    }

    set gameCharacter(value) {
        this._gameCharacter = value;
    }
}