import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  private apiURL = environment.apiURL;
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendMessage() {
    const data = { name: this.name, email: this.email, message: this.message };
    this.http.post<any>(`${this.apiURL}/messages`, data).subscribe(
      (response) => {
        console.log('Message sent successfully: ', response);
        alert('Message sent successfully');
      },
      (error) => {
        console.error('Error sending message: ', error);
        alert('Error sending message!');
      }
    );
  }
}
