import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path:'paginaPrincipal',component:PrincipalComponent},
  {path:'singup',component:ReactiveFormComponent},
{path:'lista',component:ListaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
