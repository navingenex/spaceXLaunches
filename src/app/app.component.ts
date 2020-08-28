import { SharedService } from './shared.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((parm) => {
      if (parm.hasOwnProperty('limit')) {
        this.router.navigate(['/spacex'], { queryParams: parm });
      } else
        this.router.navigate(['/spacex'], { queryParams: { limit: '100' } });
    });
  }
}
