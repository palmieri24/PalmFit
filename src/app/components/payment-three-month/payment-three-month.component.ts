import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membership } from 'src/app/models/membership 2';
import { MembershipService } from 'src/app/service/membership.service';

@Component({
  selector: 'app-payment-three-month',
  templateUrl: './payment-three-month.component.html',
  styleUrls: ['./payment-three-month.component.scss'],
})
export class PaymentThreeMonthComponent implements OnInit {
  membership: Membership = {
    membershipType: 'THREE_MONTH',
  };
  constructor(private membSrv: MembershipService, private router: Router) {}

  ngOnInit(): void {}

  createMembership() {
    this.membSrv
      .createMembership(this.membership.membershipType)
      .subscribe((resp) => {
        console.log(resp);
        alert('Payment successfully completed!');
        this.router.navigate(['']);
      });
  }
}
