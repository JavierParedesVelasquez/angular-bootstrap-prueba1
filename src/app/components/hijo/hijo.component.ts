import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  // Vamos ocupar algo de @angular corp,este decorador que le va decir a angular , ey vas a poder recibir una propiedad de fuera y se va llamar nombre
  @Input() nombreHijo: string = 'sin nombre';
  // se tiene que emitir del componente hijo al padre, con el output
  // Luego se tiene que emitir un evento
  @Output() cambioNombreHijo = new EventEmitter<string>();

  // Con esto estamos cambiando el nombre del hijo en el html del hijo unicamente
  cambiarNombre() {
    this.nombreHijo = 'Carlos Martinez';
    // Emite un evento el cambio nombreHijo
    this.cambioNombreHijo.emit(this.nombreHijo);
  }
}
