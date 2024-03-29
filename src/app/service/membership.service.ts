import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Membership } from '../models/membership 2';

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  createMembership(membershipType: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/memberships`, {
      membershipType,
    });
  }
}
