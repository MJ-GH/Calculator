export class MyNumber {
    private _number: number

    get number(): number {
        return this._number
    }
    set number(v: number) {
        this._number = v
    }

}