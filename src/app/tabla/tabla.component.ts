import { Component } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  ngOnInit() {
    console.log(this.files);
  }
}
