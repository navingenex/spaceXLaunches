import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Output('filtered') filtered = new EventEmitter();
  filterParms: any = {};
  yearFilters = [
    2006,
    2007,
    2008,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  constructor() {}

  ngOnInit() {}

  filterRequest(filter: any) {
    this.filtered.emit(filter);
  }
}
