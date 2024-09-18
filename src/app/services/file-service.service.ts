import { Injectable } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  files: FileItem[] = FILE_LIST;
  public filesToErase: string[] = [];

  
  constructor() { }

  getFiles(){
    return this.files;
  }

  getFilesToErase(){
    return this.filesToErase;
  }

  addFileToErase(file: string){
    this.filesToErase.push(file);
  }

  removeFileToErase(file: string){
    this.filesToErase = this.filesToErase.filter(item => item !== file);
  }

  BorrarFiles(){
    console.log(this.filesToErase);
  }

}
