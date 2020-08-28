import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  @Input('launchData') launchData: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  safeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
