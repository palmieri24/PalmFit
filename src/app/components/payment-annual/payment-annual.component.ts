import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membership } from 'src/app/models/membership 2';
import { MembershipService } from 'src/app/service/membership.service';

@Component({
  selector: 'app-payment-annual',
  templateUrl: './payment-annual.component.html',
  styleUrls: ['./payment-annual.component.scss'],
})
export class PaymentAnnualComponent implements OnInit, AfterViewInit {
  membership: Membership = {
    membershipType: 'ANNUAL',
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
