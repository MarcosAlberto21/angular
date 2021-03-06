import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component'

import {LadingPageComponent} from './components/lading-page/lading-page.component'
// al ponerla en el app.component.html no es necesario crear una ruta ya que se carga al inicio
const routes: Routes = [

  {
    path : "login",
    component: LoginComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
