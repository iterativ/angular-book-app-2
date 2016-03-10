/**
 * Created by christiancueni on 05/03/16.
 */
import 'rxjs/Rx';
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component'

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);