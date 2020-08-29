# SpacexData

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/spacexData` directory. Use the flag.
Project is hosted on Heroku and for every push on master branch will be deployed to Heroku.

## Stacks used

[Angular 9.1.3](https://github.com/angular/angular-cli)

[Angular Universal boilarplate](https://angular.io/guide/universal) for Server side rendering.

Plain css (No frameworks)

## Approach

Flexbox and grid system is used for ui responsiveness.

Mobile first approach is used for ui design as ased in assignment.

[SpacexLaunch](https://github.com/navingenex/spaceXLaunches/blob/master/src/app/spacex-launch/spacex-launch.component.ts) for main component. [Filter component](https://github.com/navingenex/spaceXLaunches/blob/master/src/app/spacex-launch/filters/filters.component.ts) component is used for filter the launch data and [Launchs](https://github.com/navingenex/spaceXLaunches/blob/master/src/app/spacex-launch/launches/launches.component.ts) component is used for display the data.

Every time user request any filter then it will pass to the [parent component](https://github.com/navingenex/spaceXLaunches/blob/master/src/app/spacex-launch/spacex-launch.component.ts), where the request is made.

Activated Route class used for intercepting the query params on simple filter request and page refresh.

To display active filters on page refresh landFilter and launchFilter functions is used.

## Live Project link

[SpaceX Launches](https://spacex-launchestest.herokuapp.com/);
