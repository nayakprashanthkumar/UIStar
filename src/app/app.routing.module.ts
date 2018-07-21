import {NgModule, Component} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
import { AppComponent } from "./app.component"
import { AppLoginComponent } from "./components/appLogin/applogin.component"
import {AppRegisterComponent} from "./components/appregister/appregister.component"
import { AppDashboardComponent } from "./components/appDashboard/appDashboard.component"

const routes: Routes=[
{ path: '', component: AppDashboardComponent},
//{ path: 'about', component: AboutComponent},
//{ path: 'contact', component: ContactComponent},
{ path: 'login', component: AppLoginComponent },
{ path: 'register', component: AppRegisterComponent },
//{ path: 'dashboard', component: DashboardComponent },
//{ path: 'profile', component: ProfileComponent },


// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule] 
})

export class AppRoutingModule{}
export const routingComponents= [AppLoginComponent,AppDashboardComponent,AppRegisterComponent]