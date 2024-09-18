import { Injectable } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  files: FileItem[] = FILE_LIST;
  
  constructor() { }

  getFiles(){
    return this.files;
  }
}
