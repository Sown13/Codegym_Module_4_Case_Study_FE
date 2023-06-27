class GameSession {
    constructor(gameSessionId, gameSessionName, money, userEntity, gameSessionImage, stage) {
        this._money = money;
        this._gameSessionId = gameSessionId;
        this._gameSessionName = gameSessionName;
        this._userEntity = userEntity;
        this._gameSessionImage = gameSessionImage;
        this._stage = stage;

    }

    get gameSessionId() {
        return this._gameSessionId;
    }

    set gameSessionId(value) {
        this._gameSessionId = value;
    }

    get gameSessionName() {
        return this._gameSessionName;
    }

    set gameSessionName(value) {
        this._gameSessionName = value;
    }

    get money() {
        return this._money;
    }

    set money(value) {
        this._money = value;
    }

    get userEntity() {
        return this._userEntity;
    }

    set userEntity(value) {
        this._userEntity = value;
    }

    get gameSessionImage() {
        return this._gameSessionImage;
    }

    set gameSessionImage(value) {
        this._gameSessionImage = value;
    }

    get stage() {
        return this._stage;
    }

    set stage(value) {
        this._stage = value;
    }
}