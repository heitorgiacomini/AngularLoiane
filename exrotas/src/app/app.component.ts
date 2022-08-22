import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exrotas';

  mostrarMenu: boolean = false;

  constructor(private _authService: AuthService) {
  }

  ngOnInit(){
    this._authService.mostrarMenuEmitter.subscribe(
      x => this.mostrarMenu = x
    );
  }


}
