import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Profile } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, AfterViewInit {
  user!: Profile;
  avatar: string | undefined;
  @ViewChild('fileInput') fileInput: any;
  file: File = new File([''], '');
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private userSrv: UserService, private router: Router) {}
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
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
    if (this.file) {
      this.saveAvatar(this.file);
    }
    this.userSrv.updateUserInfo(form.value).subscribe(() => {
      alert('Profile successfully updated!');
      this.router.navigate(['/profile']);
    });
  }

  saveAvatar(file: File) {
    const formData = new FormData();
    formData.append('img', file);
    this.userSrv.uploadAvatar(formData).subscribe({
      next: (resp: any) => {
        this.avatar = resp;
      },
    });
  }
}
