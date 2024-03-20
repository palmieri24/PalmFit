import { Injectable } from '@angular/core';
import { Profile, UpdateProfile, User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const token = localStorage.getItem('user');
    let headers = new HttpHeaders();
    if (token) {
      const tokenParsed = JSON.parse(token).accessToken;
      headers = headers.append('Authorization', `Bearer ${tokenParsed}`);
      // console.log(tokenParsed);
    }
    return this.http.get(this.apiURL, { headers });
  }

  getLoggedUser() {
    return this.http.get<Profile>(`${this.apiURL}/users/me`);
  }

  updateUserInfo(updatedInfo: UpdateProfile) {
    return this.http.put<any>(`${this.apiURL}/users/updateMe`, updatedInfo);
  }

  isAdmin(): Observable<boolean> {
    const token = localStorage.getItem('user');
    let headers = new HttpHeaders();
    if (token) {
      const tokenParsed = JSON.parse(token).accessToken;
      headers = headers.append('Authorization', `Bearer ${tokenParsed}`);
    }

    return this.http.get<any>(`${this.apiURL}/users/me`, { headers }).pipe(
      map((response) => {
        for (let i = 0; i < response.roles.length; i++) {
          const element = response.roles[i].role;
          if (element === 'ADMIN') {
            return element;
          } else return;
        }
      })
    );
  }

  removeUser(id: string) {
    const token = localStorage.getItem('user');
    let headers = new HttpHeaders();
    if (token) {
      const tokenParsed = JSON.parse(token).accessToken;
      headers = headers.append('Authorization', `Bearer ${tokenParsed}`);
    }
    return this.http.delete(`${this.apiURL}/${id}`, { headers });
  }
}
