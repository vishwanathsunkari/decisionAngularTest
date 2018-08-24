# FrontEndTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server
Run `node server.js` to run our proxy server @port 8000
In another console Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## NodeServer

Run `node server.js` for node server . The app will create a proxy server and will access the URL's services and gives the cross access for Angular application. 
Note : `http://services.groupkt.com/country/get/all` giving error: No Access control Allow Orgin header is present on the requested resource. so Origin `http://localhost:4200/` is therefore not allowd access. 
That is why the proxy server has created to access the api from express app and angular appaliction is sending the request to `http://localhost:8000` to access the content of the services.

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
