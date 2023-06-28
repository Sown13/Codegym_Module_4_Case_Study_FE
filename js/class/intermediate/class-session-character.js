class SessionCharacter {
    constructor(sessionCharacterId,gameSession,gameCharacter) {
        this._sessionCharacterId=sessionCharacterId;
        this._gameSession=gameSession;
        this._gameCharacter=gameCharacter;
    }

    get sessionCharacterId() {
        return this._sessionCharacterId;
    }

    set sessionCharacterId(value) {
        this._sessionCharacterId = value;
    }

    get gameSession() {
        return this._gameSession;
    }

    set gameSession(value) {
        this._gameSession = value;
    }

    get gameCharacter() {
        return this._gameCharacter;
    }

    set gameCharacter(value) {
        this._gameCharacter = value;
    }

}

// let testObj = new SessionCharacter(1,new GameSession(1,"a",1,new UserEntity(1,"a","1","1","1","1","1",true),"a",1),new GameCharacter(1,"didi",2,2,"a",1,1,1,1,1,1,"1",true,true));
// console.log(testObj)
