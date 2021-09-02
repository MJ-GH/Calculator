export class MyNumber {
    private _number: number
    private _title: string

    get number(): number {
        return this._number
    }
    set number(v: number) {
        this._number = v
    }
    public get title(): string {
        return this._title
    }
    public set title(v: string) {
        this._title = v
    }

}