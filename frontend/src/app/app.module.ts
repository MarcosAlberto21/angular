import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LadingPageComponent } from './components/lading-page/lading-page.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';

import {CommonModule} from '@angular/common';
import { MarkdownModule } from "ngx-markdown";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: "", component: LadingPageComponent }
];


@NgModule({
  
  declarations: [ 
    AppComponent,
    LadingPageComponent, NavComponent, LoginComponent
  ],

  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AppRoutingModule,
    CommonModule,
    FormsModule,
  
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
