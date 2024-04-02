import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {}
}
