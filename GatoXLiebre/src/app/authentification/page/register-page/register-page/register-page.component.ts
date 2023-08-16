import { Component } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { AuthenthificationService } from 'src/app/services/authenthification.service';
import { UserCreationDto } from 'src/app/entities/receive/user';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

constructor(private auth : AuthenthificationService) { 

}
register(user: UserCreationDto) {
  console.log(user);
  console.log("principal");

this.auth.register(user).subscribe({
  next: res => console.log(res),
  error: err => console.log(err)
})
}


}
