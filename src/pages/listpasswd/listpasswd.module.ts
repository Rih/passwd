import {NgModule} from "@angular/core";
import {ListPasswdPage} from "./listpasswd";
import {IonicPageModule} from "ionic-angular";
import { HomePage } from './home';

@NgModule({
    declarations: [
        ListPasswdPage,
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(ListPasswdPage),
    ],
    exports: [
        ListPasswdPage,
        HomePage
    ]
})

export class ListPasswdPageModule{}