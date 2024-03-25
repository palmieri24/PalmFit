import { Injectable } from '@angular/core';
import { Profile, UpdateProfile, User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { AuthData } from '../auth/auth-data';

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

  getUserId(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiURL}/users/${userId}`);
  }

  getLoggedUser() {
    return this.http.get<Profile>(`${this.apiURL}/users/me`);
  }

  updateUserInfo(updatedInfo: UpdateProfile) {
    return this.http.put<any>(`${this.apiURL}/users/updateMe`, updatedInfo);
  }

  uploadAvatar(img: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(img);
    return this.http.post<any>(`${this.apiURL}/users/uploadImg`, img, {
      headers: headers,
    });
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
