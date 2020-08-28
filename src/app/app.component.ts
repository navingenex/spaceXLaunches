import { SharedService } from './shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spacexData';
  data: any = [];
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.getLaunches().subscribe((d) => (this.data = d));
  }
}
