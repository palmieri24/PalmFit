import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';
import { Membership, MembershipType } from 'src/app/models/membership 2';
import { Profile } from 'src/app/models/user';
import { MembershipService } from 'src/app/service/membership.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userLoggedIn!: AuthData | null;
  MembershipType!: MembershipType;

  constructor(
    private authSrv: AuthService,
    private userSrv: UserService,
    private membSrv: MembershipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authSrv.restore();
    this.authSrv.user$.subscribe((user) => {
      this.userLoggedIn = user;
    });
  }

  createMembership(membershipType: MembershipType): void {
    this.membSrv.createMembership(membershipType).subscribe(
      (response) => {
        console.log('Membership created successfully!', response);
        this.router.navigate(['/payment']);
      },
      (error) => {
        console.error('Error creating membership:', error);
      }
    );
  }

  getPriceByType(membershipType: MembershipType) {
    switch (membershipType) {
      case 'MONTHLY':
        return 50;
      case 'THREE_MONTH':
        return 120;
      case 'ANNUAL':
        return 360;
      default:
        return 0;
    }
  }
}
