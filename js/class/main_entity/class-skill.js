class ClassSkill {
    constructor(skillId, skillName, skillType, skillSpecial, skillCost, skillLevel, skillImage) {
        this._skillId = skillId;
        this._skillName = skillName;
        this._skillType = skillType;
        this._skillSpecial = skillSpecial;
        this._skillCost = skillCost
        this._skillLevel=skillLevel;
        this._skillImage=skillImage;
    }


    get skillId() {
        return this._skillId;
    }

    set skillId(value) {
        this._skillId = value;
    }

    get skillName() {
        return this._skillName;
    }

    set skillName(value) {
        this._skillName = value;
    }

    get skillType() {
        return this._skillType;
    }

    set skillType(value) {
        this._skillType = value;
    }

    get skillSpecial() {
        return this._skillSpecial;
    }

    set skillSpecial(value) {
        this._skillSpecial = value;
    }

    get skillCost() {
        return this._skillCost;
    }

    set skillCost(value) {
        this._skillCost = value;
    }

    get skillLevel() {
        return this._skillLevel;
    }

    set skillLevel(value) {
        this._skillLevel = value;
    }

    get skillImage() {
        return this._skillImage;
    }

    set skillImage(value) {
        this._skillImage = value;
    }
}