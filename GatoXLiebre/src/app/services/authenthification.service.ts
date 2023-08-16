import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserCreationDto } from '../entities/receive/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenthificationService {

 constructor(private http: HttpClient) { }


  register (user: UserCreationDto){
    console.log('register service ');
    console.log(user);
    return this.http.post('https://localhost:7111/api/auth/register', user );
  }

  login(user: UserCreationDto): Observable<string>{
    return this.http.post<string>('https://localhost:7111/auth/login', user );
  }


}
