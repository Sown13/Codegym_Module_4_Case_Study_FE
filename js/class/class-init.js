 class CharacterDetail {

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

 class GameCharacter{
     constructor(characterId,characterName, characterLevel, characterExp, characterType, characterStr, characterInt, characterVit, characterMind, statPoint, skillPoint, characterImage, isAlive, isEnemy) {

         this._characterId = characterId;
         this._characterName = characterName;
         this._characterLevel = characterLevel;
         this._characterExp = characterExp;
         this._characterType = characterType;
         this._characterStr = characterStr;
         this._characterInt = characterInt;
         this._characterVit = characterVit;
         this._characterMind = characterMind;
         this._statPoint = statPoint;
         this._skillPoint = skillPoint;
         this._characterImage = characterImage;
         this._isAlive = isAlive;
         this._isEnemy = isEnemy;
     }

     get characterId() {
         return this._characterId;
     }

     set characterId(value) {
         this._characterId = value;
     }

     get characterName() {
         return this._characterName;
     }

     set characterName(value) {
         this._characterName = value;
     }

     get characterLevel() {
         return this._characterLevel;
     }

     set characterLevel(value) {
         this._characterLevel = value;
     }

     get characterExp() {
         return this._characterExp;
     }

     set characterExp(value) {
         this._characterExp = value;
     }

     get characterType() {
         return this._characterType;
     }

     set characterType(value) {
         this._characterType = value;
     }

     get characterStr() {
         return this._characterStr;
     }

     set characterStr(value) {
         this._characterStr = value;
     }

     get characterInt() {
         return this._characterInt;
     }

     set characterInt(value) {
         this._characterInt = value;
     }

     get characterVit() {
         return this._characterVit;
     }

     set characterVit(value) {
         this._characterVit = value;
     }

     get characterMind() {
         return this._characterMind;
     }

     set characterMind(value) {
         this._characterMind = value;
     }

     get statPoint() {
         return this._statPoint;
     }

     set statPoint(value) {
         this._statPoint = value;
     }

     get skillPoint() {
         return this._skillPoint;
     }

     set skillPoint(value) {
         this._skillPoint = value;
     }

     get characterImage() {
         return this._characterImage;
     }

     set characterImage(value) {
         this._characterImage = value;
     }

     get isAlive() {
         return this._isAlive;
     }

     set isAlive(value) {
         this._isAlive = value;
     }

     get isEnemy() {
         return this._isEnemy;
     }

     set isEnemy(value) {
         this._isEnemy = value;
     }
 }