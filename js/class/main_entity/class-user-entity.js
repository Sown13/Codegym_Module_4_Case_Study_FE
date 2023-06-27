class UserEntity {
    constructor(userId, userFullName, email, phone, accountName, accountPassWord, userAvatar, block) {
        this._userId = userId
        this._userFullName=userFullName;
        this._email=email;
        this._phone=phone;
        this._accountName=accountName;
        this._accountPassWord=accountPassWord;
        this._userAvatar = userAvatar;
        this._block = block;
    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get userFullName() {
        return this._userFullName;
    }

    set userFullName(value) {
        this._userFullName = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get accountName() {
        return this._accountName;
    }

    set accountName(value) {
        this._accountName = value;
    }

    get accountPassWord() {
        return this._accountPassWord;
    }

    set accountPassWord(value) {
        this._accountPassWord = value;
    }

    get userAvatar() {
        return this._userAvatar;
    }

    set userAvatar(value) {
        this._userAvatar = value;
    }

    get block() {
        return this._block;
    }

    set block(value) {
        this._block = value;
    }
}