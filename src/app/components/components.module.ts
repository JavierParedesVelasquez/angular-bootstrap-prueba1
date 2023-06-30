import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Exportando para el app.module.ts lo pueda reconocer
    NavbarComponent,
    // Como voy a usar el componente hijo en pages tengo que exportarlo aqui
    // Voy a ocupar el componente hijo en otro modulo es por eso que se exporta
    HijoComponent
  ]
})
export class ComponentsModule { }
