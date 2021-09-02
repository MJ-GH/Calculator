import { Button, EventData, Frame, NavigatedData, Observable, Page, PropertyChangeData } from '@nativescript/core'
import { MyNumber } from './MyNumber'
import { MyViewModel } from './MyViewModel'

var page: Page
var myNumber: MyNumber
const vm: MyViewModel = new MyViewModel()

// export function navigatingTo(args: EventData) {
//   const page = <Page>args.object
//   // const vm: MyViewModel = new MyViewModel()
//   const vm: MyViewModel = new MyViewModel()

//   page.bindingContext = vm
// }

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object

  if (!args.isBackNavigation) {
    page.bindingContext = vm
    myNumber = new MyNumber()
  } else {

    if (myNumber.title == "1st number") {
      console.log("1st: " + myNumber.number)
      vm.firstNumber = myNumber.number
    } else {
      console.log("2nd: " + myNumber.number)
      vm.secondNumber = myNumber.number
    }

    // console.log("entered else")
    // vm.firstNumber = myNumber.number
    // console.log(myNumber)
    // console.log(myNumber.number)
    // console.log(vm.firstNumber)

    // vm.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => {
    //   console.log("propertyname: " + event.propertyName)
    //   console.log("value: " + event.value)
    //   vm.firstNumber = myNumber.number
    //   console.log("firstNumber in observable.properchangeevent: " + vm.firstNumber)
    // })
  }
}

export function navigateToSelectNumberPage(args: EventData) {
  console.log("navigating to second")

  var btn: Button = <Button>args.object

  if (btn.id == "1stbtn") {
    myNumber.title = "1st number"
    console.log(myNumber.title)
  } else {
    myNumber.title = "2nd number"
    console.log(myNumber.title)
  }

  // var btn: Button = page.getViewById("numberInput")

  var navigationOptions = {
    moduleName: 'selectNumber-page',
    context: {
      myNumber: myNumber,
      param1: "Hej"
    }
  }

  Frame.topmost().navigate(navigationOptions)
}

export function addition(args: EventData) {
  vm.result = vm.firstNumber + vm.secondNumber
}
export function subtraction(args: EventData) {
  vm.result = vm.firstNumber - vm.secondNumber
}
export function multiplication(args: EventData) {
  vm.result = vm.firstNumber * vm.secondNumber
}
export function divide(args: EventData) {
  vm.result = vm.firstNumber / vm.secondNumber
}