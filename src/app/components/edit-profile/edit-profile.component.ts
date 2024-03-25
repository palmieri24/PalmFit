import { Component, OnInit, ViewChild } from '@angular/core';
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
  avatar: string | undefined;
  @ViewChild('fileInput') fileInput: any;
  file: File = new File([''], '');
  previewUrl: string | ArrayBuffer | null = null;

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
    if (this.file) {
      this.saveAvatar(this.file);
    }
    this.userSrv.updateUserInfo(form.value).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
      this.previewFile(file);
    }
  }

  previewFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
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
