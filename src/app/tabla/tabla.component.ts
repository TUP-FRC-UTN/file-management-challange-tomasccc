import { Component } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { RouterOutlet } from '@angular/router';
import { FileServiceService } from '../services/file-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  providers: [FileServiceService]
})
export class TablaComponent {
  files:FileItem[]= [];
  title = 'file-management';
  
  checked:[] = [];

  constructor(private fileService:FileServiceService) {
    
  }

  ngOnInit() {
    console.log(this.fileService.getFiles());
    this.files = this.fileService.getFiles();
  }
/*
  Check(file:FileItem){
    if(this.checked.includes(file)){
      this.checked = this.checked.filter(item => item !== file);
    }else{
      this.checked.push(file);
    }
  }*/
}
