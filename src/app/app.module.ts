import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpacexLaunchComponent } from './spacex-launch/spacex-launch.component';
import { FiltersComponent } from './spacex-launch/filters/filters.component';
import { LaunchesComponent } from './spacex-launch/launches/launches.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    LaunchesComponent,
    SpacexLaunchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
