import { ActivatedRoute, Router } from '@angular/router';
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
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((p) => {
      this.queryParms = p;
      this.getData(p);
    });
  }
  /**
   * passing recieved filters from url and calling spaceX api
   * @param  {Object} parms
   *
   */
  getData(parms: Object) {
    this.sharedService.getLaunches(parms).subscribe((d) => (this.data = d));
  }
  /**
   * recieving event from FilterComponent and navigating to same route with updated queryparams
   * @param  {Object} event
   */
  updateRequest(event: Object) {
    this.queryParms = Object.assign({}, this.queryParms, event);
    this.router.navigate(['/spacex'], { queryParams: this.queryParms });
  }
}
