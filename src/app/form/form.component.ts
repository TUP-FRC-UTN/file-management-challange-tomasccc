import { Component, Output } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { FileServiceService } from '../services/file-service.service';
import { FileType } from '../../models/file.item.model';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name:string|undefined;
  creation:string|undefined;
  owners:string[]=[];
  tipoArchivo:FileType|undefined;
  

  @Output() action = new EventEmitter();
  
  constructor(public fileService:FileServiceService) {
  }
  submit(form:NgForm){
    console.log();
  }

}
