import {NgModule, Component} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import { AppLoginComponent } from "./components/appLogin/applogin.component"
import {AppRegisterComponent} from "./components/appregister/appregister.component"
import { AppDashboardComponent } from "./components/appDashboard/appDashboard.component"

const routes: Routes=[
    { path: '', component: AppDashboardComponent},
    { path: 'login', component: AppLoginComponent },
    { path: 'register', component: AppRegisterComponent },
    { path: '**', redirectTo: '' }
]


@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule] 
})

export class AppRoutingModule{}
export const routingComponents= [AppLoginComponent,AppDashboardComponent,AppRegisterComponent]