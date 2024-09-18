import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaComponent } from "./tabla/tabla.component";
import { ActionsComponent } from './actions/actions.component';
import { FileServiceService } from './services/file-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ActionsComponent,TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FileServiceService]
})
export class AppComponent {

  constructor(public fileService:FileServiceService) {

    
  }

  



  
}
