import { EventData, Page, TextField } from '@nativescript/core'
import { convertString } from '@nativescript/core/utils'
import { MyNumber } from './MyNumber'

var page: Page
var myNumber: MyNumber

export function onNavigatingTo(args: EventData) {
    page = <Page>args.object
    myNumber = page.navigationContext.myNumber

    var labelTitle: TextField = page.getViewById("labelTitle")
    labelTitle.text = myNumber.title
}

export function navigateToMainPage(args: EventData) {
    var numberInput: TextField = page.getViewById("numberInput")
    myNumber.number = convertString(numberInput.text)

    page.frame.goBack()
}
