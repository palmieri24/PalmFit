import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Profile } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  user!: Profile;

  constructor(private userSrv: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.userSrv.getLoggedUser().subscribe((user: Profile) => {
      this.user = user;
      console.log(this.user);
    });
  }

  updateMe(form: NgForm) {
    this.userSrv.updateUserInfo(form.value).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
}
