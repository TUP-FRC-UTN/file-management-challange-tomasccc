import { Component, EventEmitter, Output } from '@angular/core';
import { FileServiceService } from '../services/file-service.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {

  constructor(public fileService:FileServiceService) {
  
  }
  
  Nuevo(){
  }

  Borrar(){
    console.log(this.fileService.filesToErase);
    this.fileService.BorrarFiles();
  }
  
}
