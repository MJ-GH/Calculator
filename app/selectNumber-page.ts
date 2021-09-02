import { EventData, Observable, Page, PropertyChangeData, TextField } from '@nativescript/core'
import { convertString } from '@nativescript/core/utils'
import { MyNumber } from './MyNumber'
import { MyViewModel } from './MyViewModel'

var page: Page
var myNumber: MyNumber

export function onNavigatingTo(args: EventData) {
    page = <Page>args.object
    myNumber = page.navigationContext.myNumber

    var labelTitle: TextField = page.getViewById("labelTitle")
    labelTitle.text = myNumber.title

}

export function sendNumberToMain(args: EventData) {
    console.log("entered sendNumberToMain")
    var numberInput: TextField = page.getViewById("numberInput")
    console.log("converted string: " + convertString(numberInput.text))
    myNumber.number = convertString(numberInput.text)
    console.log("updated myNumber.number: " + myNumber.number)
    // console.log("mynumber number: " + myNumber.number)

    // var num = myData.forward;
    // var lbl: Label = page.getViewById("txtFromMain");
    // lbl.text = strFromMain

    // myNumber = page.navigationContext.myNumber
    // var navigationOptions = {
    //     moduleName:'selectNumber-page',
    //     context:{
    //       myNumber: myNumber,
    //       param1: "Hej"
    //     }
    //   }

    console.log("navigating back to main")
    page.frame.goBack()
}
    // export function navigatingTo(args: EventData) {
//     const page = <Page>args.object
//     // const vm: MyViewModel = new MyViewModel()
//     var vm: MyViewModel = new MyViewModel()

//     page.bindingContext = vm

//     vm.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => {
//         console.log("propertyname: " + event.propertyName)
//         console.log("value: " + event.value)

//         vm.firstNumber = vm.selectedNumber
//         console.log("firstNumber: " + vm.firstNumber)
//     })
// }
