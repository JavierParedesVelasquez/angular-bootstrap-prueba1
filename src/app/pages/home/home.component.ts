import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Creando nueva propiedad llamada nombre
  // Esto se va llamar en el html
  nombre: string = 'Nombre Usuario';


  constructor() {}

  ngOnInit(): void {
    // Código a ejecutar durante el ciclo de vida del componente
  }

  cambiarNombre(){
    this.nombre= 'Javier'
  }

}
