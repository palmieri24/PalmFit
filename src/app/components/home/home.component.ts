import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userLoggedIn!: AuthData | null;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.restore();
    this.authSrv.user$.subscribe((user) => {
      this.userLoggedIn = user;
    });
  }
}
