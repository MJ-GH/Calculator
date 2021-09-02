import { Frame, Observable } from "@nativescript/core"
import { MyNumber } from "./MyNumber"

export class MyViewModel extends Observable {

    private _myNumber: MyNumber
    private _firstNumber: number
    private _secondNumber: number
    private _result: number
    private _selectedNumber: number

    constructor() {
        super()
    }

    get myNumber(): MyNumber {
        return this._myNumber
    }
    set myNumber(v: MyNumber) {
        this._myNumber = v
        // this.notifyPropertyChange("myNumber", v)
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
    get selectedNumber(): number {
        return this._selectedNumber
    }
    set selectedNumber(v: number) {
        this._selectedNumber = v
        // this.notifyPropertyChange("selectedNumber", v)
    }

    // navigateToSelectNumberPage() {
    //     Frame.topmost().navigate("selectNumber-page")
    // }

    // sendNumberToMain() {
    //     // console.log("selectednumber" + this.selectedNumber)
    //     // console.log("firstNumber" + this.firstNumber)
    //     this.firstNumber = this.selectedNumber
    //     // console.log("priv: " + this._firstNumber)
    //     // console.log("firstNumber" + this.firstNumber)

    //     // Frame.topmost().navigate("main-page")
    // }

    // addition() {
    //     console.log("result: " + this.result)
    // }
    // subtraction() {
    //     console.log("result: " + this.result)
    // }
    // multiplication() {
    //     console.log("result: " + this.result)
    // }
    // divide() {
    //     console.log("result: " + this.result)
    // }


}