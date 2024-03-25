import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/service/membership.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
