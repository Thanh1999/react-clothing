export class User {

    constructor(
        private _displayName: string,
        private _email: string,
    ) { }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get displayName(): string {
        return this._displayName;
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
}