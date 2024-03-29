import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  admin!: User | null;
  file: File = new File([''], '');
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register(form: NgForm) {
    try {
      this.authSrv.register(form.value).subscribe();
      alert('Registration has been successful!');
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.log(error);
      if (error.status === 400) {
        alert('Email già registrata!');
        this.router.navigate(['/register']);
      }
    }
  }
}
