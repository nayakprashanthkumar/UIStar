import {NgModule, Component} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import { AppLoginComponent } from "./components/common/appLogin/applogin.component"
import {AppRegisterComponent} from "./components/common/appregister/appregister.component"
import { AppDashboardComponent } from "./components/distributor/appDashboard/appDashboard.component"
import { MyProfileComponent } from "./components/distributor/myprofile/myprofile.component"
import {MyaddressesComponent} from "./components/distributor/myaddresses/myaddresses.component"
import {MyordersComponent} from "./components/distributor/myorders/myorders.component"
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component"
import {BusinesslinkComponent} from "./components/distributor/businesslink/businesslink.component"

const routes: Routes=[
    { path: '', component: AppDashboardComponent},
    { path: 'login', component: AppLoginComponent },
    { path: 'register', component: AppRegisterComponent },
    { path: 'account', component: MyProfileComponent },
    { path: 'account/addresses', component: MyaddressesComponent },
    { path: 'account/orders', component: MyordersComponent },
    { path: 'account/myprofile', component: MyProfileComponent },
    { path: 'account/businesslink', component: BusinesslinkComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
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
    MyProfileComponent,
    DashboardComponent,
    BusinesslinkComponent]