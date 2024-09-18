import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { TablaComponent } from "./tabla/tabla.component";
import { ActionsComponent } from './actions/actions.component';
import { FileServiceService } from './services/file-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaComponent,ActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FileServiceService]
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  constructor(private fileService:FileServiceService) {

    
  }

  Accion(accion: string){
    if(accion == 'Nuevo'){
      console.log('Nuevo');

    }else if(accion == 'Borrar'){
      console.log('Borrar');
      
    }

  }

  onFileAdded(file: FileItem) {
    this.files.push(file);
  }

  
}
