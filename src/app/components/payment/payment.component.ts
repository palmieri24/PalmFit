import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membership } from 'src/app/models/membership 2';
import { MembershipService } from 'src/app/service/membership.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, AfterViewInit {
  membership: Membership = {
    membershipType: 'MONTHLY',
  };

  constructor(private membSrv: MembershipService, private router: Router) {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

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
