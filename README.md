# Udemy Assignment 5: Services practice
Modifying the code to use the UsersService was straightforward and pretty much the same as the instrucotr solution, were all the data for the users and the functions are stored in the service, and the service is setup globally in the app.module

For the counter part, I have CounterService subscribe to event in the userService that is triggered whenever a user is made active or inactive. The event passes a boolean that this event can use ot know which of the two counters (toActive or toInactive) to increment. This part gave me trouble because despite setting up the counterService in the app.module, I didn't realize that you are required to have a constructor define the instance in the app.component even though the reference to that variable instance for the counterService is never used, otherwise the CounterService will never be created in the first place.



# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
