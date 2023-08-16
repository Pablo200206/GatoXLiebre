import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCreationDto } from '../../../entities/receive/user';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  @Output() register = new EventEmitter();
  constructor(private fb:FormBuilder) {
  }
  

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    const form = this.registerForm.value;
    if((form.password == form.confirmPassword) && this.registerForm.valid) {
     const user: UserCreationDto = {
       email: form.email,
       password: form.password,
       name: form.name,
      }
      console.log("validacion pasada")
      this.register.emit(user);
  }


}

}
