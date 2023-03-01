import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccesalertComponent } from './succesalert/succesalert.component';
import { neutralcomponents } from './neutral_alert/app-neutral.component';
import { Form } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccesalertComponent,
    neutralcomponents
  ],
  imports: [
    BrowserModule,Form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
