import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaComponent } from "./tabla/tabla.component";
import { ActionsComponent } from './actions/actions.component';
import { FileServiceService } from './services/file-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ActionsComponent,TablaComponent,
    FormsModule,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FileServiceService]
})
export class AppComponent {

  mostrarConfirmar:boolean = false;
  mostrarForm:boolean = false;

  constructor(public fileService:FileServiceService) {

    
  }

  Accion(accion:string){
    if(accion === 'Nuevo'){
      this.mostrarForm = true;
    }else if(accion === 'Borrar'){
      if(this.fileService.filesToErase.length>1){
        this.mostrarConfirmar = true;
      }else{
        this.fileService.BorrarFiles();
      }
    }
  }

  submit(form:NgForm){
    console.log();
  }

  BorrarFiles(){
    this.mostrarConfirmar=false;
    this.fileService.BorrarFiles();
  }

  NoBorrarFiles(){
    this.mostrarConfirmar=false;
  }

  



  
}
