import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/common/appheader/appheader.component';
import { AppfooterComponent } from './components/common/appfooter/appfooter.component';
import { AppmenuComponent } from './components/common/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/common/appsettings/appsettings.component';
import { AppRoutingModule,routingComponents } from "./app.routing.module";
import {AppDashboardComponent} from "./components/distributor/appDashboard/appDashboard.component";
import { AppRegisterComponent } from './components/common/appregister/appregister.component';
import { MyProfileComponent } from './components/distributor/myprofile/myprofile.component';
import { AppaboutusComponent } from './components/common/appaboutus/appaboutus.component';
import { MyordersComponent } from './components/distributor/myorders/myorders.component';
import { MyaddressesComponent } from './components/distributor/myaddresses/myaddresses.component';
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
    MyProfileComponent,
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
