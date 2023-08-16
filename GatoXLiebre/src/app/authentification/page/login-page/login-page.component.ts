import { Component } from '@angular/core';
import { LoginPageModule } from './login-page.module';
import { AuthenthificationService } from '../../../services/authenthification.service';
import { Route, Router } from '@angular/router';
import { UserCreationDto } from 'src/app/entities/receive/user';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {



  constructor(private auth: AuthenthificationService, private route: Router) { }

  login(user: UserCreationDto){
    this.auth.login(user).subscribe({
      next: (v) => this.handleToken(v),
      error: (e) => console.log(e)
    });
  }


  public handleToken(token: string) {
    localStorage.setItem('token', token);
  }


}
