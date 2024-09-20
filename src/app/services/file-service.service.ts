import { Injectable } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  files: FileItem[] = FILE_LIST;
  public filesToErase: string[] = [];
  public filesErased: string[] = [];

  
  constructor() { 
    this.files.sort((a,b)=> a.name.localeCompare(b.name));
  }


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
    this.files = this.files.filter(item => !this.filesToErase.includes(item.id));
    this.filesErased = this.filesErased.concat(this.filesToErase);
    this.filesToErase = [];
  }

}
