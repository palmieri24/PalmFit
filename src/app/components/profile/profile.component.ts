import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User, Profile } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userForm!: FormGroup;
  user!: Profile;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private userSrv: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      avatar: [null, Validators.required],
    });
    this.loadUserData();
  }

  private loadUserData() {
    const user = this.userSrv.getLoggedUser().subscribe((user: Profile) => {
      this.user = user;
    });
  }

  //   onSubmit() {
  //   const formData = this.userForm.value;
  //   if (this.user) {
  //     this.authSrv.updateUserInfo(formData, this.user.id).subscribe({
  //       next: () => console.log('Informazioni utente aggiornate con successo!'),
  //       error: (err) =>
  //         console.error(
  //           "Errore durante l'aggiornamento delle informazioni utente:",
  //           err
  //         ),
  //     });
  //   } else {
  //     console.error('Errore: this.user non è definito.');
  //   }
  // }
}
