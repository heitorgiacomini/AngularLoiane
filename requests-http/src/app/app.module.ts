import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 
import { PocBaseComponent } from './unsubscribe-rxjs/poc-base/poc-base.component';
import { UnsubscribePocComponent } from './unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component'; 
import { PocComponent } from './unsubscribe-rxjs/componentes/poc.component';

@NgModule({
  declarations: [
    AppComponent,
    // PocBaseComponent,
    // UnsubscribePocComponent,
    // PocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// UnsubscribeRxjsComponent,