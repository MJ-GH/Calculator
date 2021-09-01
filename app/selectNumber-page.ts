import { EventData, Page } from '@nativescript/core'
import { MyViewModel } from './MyViewModel'

export function navigatingTo(args: EventData) {
    const page = <Page>args.object

    page.bindingContext = new MyViewModel()
}
