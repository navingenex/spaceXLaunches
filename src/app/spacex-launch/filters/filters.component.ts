import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output('filtered') filtered = new EventEmitter();
  filterParms: any = {};
  selectedIndex: number = undefined;
  isActiveYear: boolean;
  isLaunch: boolean;
  isLand: boolean;
  yearFilters = [
    '2006',
    '2007',
    '2008',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  activeYear: string;
  constructor(private activeRote: ActivatedRoute) {}

  ngOnInit() {
    this.activeRote.queryParams.subscribe((param) => {
      this.resetFilter(param);
    });
  }

  // resetting filter from url after refreshing page
  resetFilter(param: Object) {
    for (const key in param) {
      switch (key) {
        case 'launch_year':
          this.selectedIndex = this.yearFilters.indexOf(param[key]);
          this.isActiveYear = true;
          break;
        case 'launch_success':
          this.isLaunch = param[key] === 'true' ? true : false;
          break;
        case 'land_success':
          this.isLand = param[key] === 'true' ? true : false;
          break;
      }
    }
  }

  //toggle functionality for filter
  filterRequest(filter: any, index?: number, year?: string) {
    const key = Object.keys(filter)[0];
    if (this.activeYear && this.activeYear == year) {
      this.activeYear = '';
      this.isActiveYear = false;
      this.filtered.emit({ launch_year: null });
    } else {
      this.activeYear = year;
      this.selectedIndex = index;
      this.isActiveYear = this.selectedIndex == index;
      this.filtered.emit(filter);
    }
  }

  //launch filtur with toggle mimic
  launchFIlter(filter: Object) {
    const key = Object.keys(filter)[0];
    this.isLaunch && filter[key]
      ? ((this.isLaunch = undefined),
        this.filtered.emit({ launch_success: null }))
      : this.isLaunch === false && !filter[key]
      ? ((this.isLaunch = undefined),
        this.filtered.emit({ launch_success: null }))
      : ((this.isLaunch = filter[key]),
        this.filtered.emit({ launch_success: filter[key] }));
  }

  //land filter with toggle mimic
  landFilter(filter: Object) {
    const key = Object.keys(filter)[0];
    this.isLand && filter[key]
      ? ((this.isLand = undefined), this.filtered.emit({ land_success: null }))
      : this.isLand === false && !filter[key]
      ? ((this.isLand = undefined), this.filtered.emit({ land_success: null }))
      : ((this.isLand = filter[key]),
        this.filtered.emit({ land_success: filter[key] }));
  }
  setActiveYear(index: number, year: string) {
    this.activeYear = year;
    this.selectedIndex = index;
    this.isActiveYear = this.selectedIndex == index;
  }
}
