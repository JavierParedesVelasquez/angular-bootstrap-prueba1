import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes =[
  // DEFINIR LA RUTA
  // nombre path de la ruta , component es el componente que va mostrar
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'} //Cualquier otra redireccion o ruta me va redireccionar al home
];

@NgModule({
 imports :[RouterModule.forRoot(routes)],
 exports : [RouterModule]
})
export class AppRoutingModule { }
