import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  private apiURL = environment.apiURL;
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {}

  sendMessage() {
    const data = { name: this.name, email: this.email, message: this.message };
    this.http.post<any>(`${this.apiURL}/messages`, data).subscribe(
      (response) => {
        console.log('Message sent successfully: ', response);
        alert('Message sent successfully');
        this.name = '';
        this.email = '';
        this.message = '';
      },
      (error) => {
        console.error('Error sending message: ', error);
        alert('Error sending message!');
      }
    );
  }
}
