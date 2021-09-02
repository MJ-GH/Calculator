import { Observable } from "@nativescript/core"
import { MyNumber } from "./MyNumber"

export class MyViewModel extends Observable {

    private _myNumber: MyNumber
    private _firstNumber: number
    private _secondNumber: number
    private _result: number

    constructor() {
        super()
    }

    get myNumber(): MyNumber {
        return this._myNumber
    }
    set myNumber(v: MyNumber) {
        this._myNumber = v
    }
    get firstNumber(): number {
        return this._firstNumber
    }
    set firstNumber(v: number) {
        this._firstNumber = v
        this.notifyPropertyChange("firstNumber", v)
    }
    get secondNumber(): number {
        return this._secondNumber
    }
    set secondNumber(v: number) {
        this._secondNumber = v
        this.notifyPropertyChange("secondNumber", v)
    }
    get result(): number {
        return this._result
    }
    set result(v: number) {
        this._result = v
        this.notifyPropertyChange("result", v)
    }
}