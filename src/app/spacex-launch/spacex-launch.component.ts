import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-spacex-launch',
  templateUrl: './spacex-launch.component.html',
  styleUrls: ['./spacex-launch.component.scss'],
})
export class SpacexLaunchComponent implements OnInit {
  title = 'spacexData';
  data: any = [];
  queryParms: any = {};
  constructor(
    private sharedService: SharedService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((p) => {
      this.queryParms = p;
      this.getData(p);
    });
  }
  getData(parms) {
    this.sharedService.getLaunches(parms).subscribe((d) => (this.data = d));
  }

  updateRequest(event: any) {
    this.queryParms = Object.assign({}, this.queryParms, event);
    this.getData(this.queryParms);
  }
}
