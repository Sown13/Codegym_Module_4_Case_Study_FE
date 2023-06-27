
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