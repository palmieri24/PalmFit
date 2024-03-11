import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { AuthData } from 'src/app/auth/auth-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  users!: any[];
  userIsAdmin!: boolean;
  userLoggedIn!: AuthData | null;

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    this.canActivate().subscribe((isAdmin) => {
      if (isAdmin) {
        this.userIsAdmin = true;
      }
    });
  }

  getUsers(): void {
    this.userSrv.getUsers().subscribe((response: any) => {
      this.users = response.content;
    });
  }

  canActivate(): Observable<boolean> {
    return this.userSrv.isAdmin();
  }

  removeUser(id: string) {
    confirm('Are you sure?');
    this.userSrv.removeUser(id).subscribe(() => {
      this.getUsers();
    });
  }
}
