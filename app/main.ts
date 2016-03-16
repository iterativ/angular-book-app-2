/**
 * Created by christiancueni on 05/03/16.
 */
//for push states
import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component'

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);

//hash location
//import 'rxjs/Rx';
//import {provide} from 'angular2/core';
//import {bootstrap} from 'angular2/platform/browser'
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
//import {HTTP_PROVIDERS} from 'angular2/http';
//import {AppComponent} from './app.component'
//
//bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);