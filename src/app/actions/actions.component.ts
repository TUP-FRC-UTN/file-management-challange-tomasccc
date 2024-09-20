import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  @Output() action = new EventEmitter();

  constructor() {
  
  }
  
  Nuevo(){
    this.action.emit('Nuevo');
  }

  Borrar(){
    this.action.emit('Borrar');
    
  }
  
}
