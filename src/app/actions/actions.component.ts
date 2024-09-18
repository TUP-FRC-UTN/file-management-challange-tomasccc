import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  @Output() accion = new EventEmitter<string>();
  
  Nuevo(){
    this.accion.emit('Nuevo');
  }

  Borrar(){
    this.accion.emit('Borrar');
  }
  
}
