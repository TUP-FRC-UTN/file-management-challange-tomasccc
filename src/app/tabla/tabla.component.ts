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


  @Input() files: FileItem[] = [];
  checked:string[] = [];
  constructor(public fileService:FileServiceService) {
    this.files = this.fileService.files;
  }

  ngOnInit() {
    this.files = this.fileService.files;
  }



  ngOnChanges(){
    console.log("change");
    console.log(this.fileService.filesErased);
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

