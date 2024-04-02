import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {}
}
