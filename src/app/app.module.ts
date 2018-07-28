import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { AppRoutingModule,routingComponents } from "./app.routing.module";
import {AppDashboardComponent} from "./components/appdashboard/appDashboard.component";
import { AppRegisterComponent } from './components/appregister/appregister.component';
import { AppaccountComponent } from './components/appaccount/appaccount.component';
import { AppaboutusComponent } from './components/appaboutus/appaboutus.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { MyaddressesComponent } from './components/myaddresses/myaddresses.component';
import { MypaymentoptionsComponent } from './components/mypaymentoptions/mypaymentoptions.component';
import { MysecurityComponent } from './components/mysecurity/mysecurity.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    routingComponents,
    AppDashboardComponent,
    AppRegisterComponent,
    AppaccountComponent,
    AppaboutusComponent,
    MyordersComponent,
    MyaddressesComponent,
    MypaymentoptionsComponent,
    MysecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
