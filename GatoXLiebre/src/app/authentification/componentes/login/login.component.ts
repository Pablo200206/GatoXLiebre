import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreationDto } from 'src/app/entities/receive/user';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 @Output() loginInfo = new EventEmitter<UserCreationDto>();

 loginForm;

 constructor(private formBuilder: FormBuilder) { 
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
 }

 onClick() {
  
    if (this.loginForm.valid){
      const user = this.loginForm.value as UserCreationDto;
      this.loginInfo.emit(user);
    }
 }
 
}
