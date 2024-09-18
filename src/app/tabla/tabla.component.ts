import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { RouterOutlet } from '@angular/router';
import { FileServiceService } from '../services/file-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {


  checked:string[] = [];
  constructor(public fileService:FileServiceService) {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("change");
  }

  check(event:Event){
    const target = event.target as HTMLInputElement;
    if(target.checked){
      this.fileService.addFileToErase(target.id);
      console.log(this.fileService.getFilesToErase());
    }else{
      this.fileService.removeFileToErase(target.id);
      console.log(this.fileService.getFilesToErase());
    }
  }

 
 }

