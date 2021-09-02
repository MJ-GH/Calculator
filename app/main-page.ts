import { Button, EventData, Frame, NavigatedData, Page } from '@nativescript/core'
import { MyNumber } from './MyNumber'
import { MyViewModel } from './MyViewModel'

var page: Page
var myNumber: MyNumber
const vm: MyViewModel = new MyViewModel()

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object

  if (!args.isBackNavigation) {
    page.bindingContext = vm
    myNumber = new MyNumber()
  } else {
    if (myNumber.title == "1st number") {
      vm.firstNumber = myNumber.number
    } else {
      vm.secondNumber = myNumber.number
    }
  }
}

export function navigateToSelectNumberPage(args: EventData) {
  var btn: Button = <Button>args.object

  if (btn.id == "1stbtn") {
    myNumber.title = "1st number"
  } else {
    myNumber.title = "2nd number"
  }

  var navigationOptions = {
    moduleName: 'selectNumber-page',
    context: {
      myNumber: myNumber,
      param1: "Hej"
    }
  }

  Frame.topmost().navigate(navigationOptions)
}

export function calculate(args: EventData) {
  var btn: Button = <Button>args.object

  switch (btn.text) {
    case "+":
      vm.result = vm.firstNumber + vm.secondNumber
      break
    case "-":
      vm.result = vm.firstNumber - vm.secondNumber
      break
    case "*":
      vm.result = vm.firstNumber * vm.secondNumber
      break
    case "/":
      vm.result = vm.firstNumber / vm.secondNumber
      break
  }
}
