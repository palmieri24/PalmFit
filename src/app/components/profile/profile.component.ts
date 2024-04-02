import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User, Profile, ProfileMembership } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  userForm!: FormGroup;
  user!: Profile;
  profileMembership!: ProfileMembership;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private userSrv: UserService
  ) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      avatar: [null, Validators.required],
      membership: [null, Validators.required],
    });
    this.loadUserData();
    this.loadProfileMembership();
  }

  private loadUserData() {
    const user = this.userSrv.getLoggedUser().subscribe((user: Profile) => {
      this.user = user;
      console.log(user);
    });
  }

  private loadProfileMembership() {
    this.userSrv
      .getProfileMembership()
      .subscribe((profileMembership: ProfileMembership) => {
        this.profileMembership = profileMembership;
        console.log(profileMembership);
      });
  }
}
