import {NgModule, Component} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import { AppLoginComponent } from "./components/appLogin/applogin.component"
import {AppRegisterComponent} from "./components/appregister/appregister.component"
import { AppDashboardComponent } from "./components/appDashboard/appDashboard.component"
import { MyProfileComponent } from "./components/myprofile/myprofile.component"
import {MyaddressesComponent} from "./components/myaddresses/myaddresses.component"
import {MyordersComponent} from "./components/myorders/myorders.component"

const routes: Routes=[
    { path: '', component: AppDashboardComponent},
    { path: 'login', component: AppLoginComponent },
    { path: 'register', component: AppRegisterComponent },
    { path: 'account', component: MyProfileComponent },
    { path: 'account/addresses', component: MyaddressesComponent },
    { path: 'account/orders', component: MyordersComponent },
    { path: 'account/myprofile', component: MyProfileComponent },
    { path: '**', redirectTo: '' }
]


@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule] 
})

export class AppRoutingModule{}
export const routingComponents= [AppLoginComponent,
    AppDashboardComponent,
    AppRegisterComponent,
    MyaddressesComponent,
    MyordersComponent,
    MyProfileComponent]