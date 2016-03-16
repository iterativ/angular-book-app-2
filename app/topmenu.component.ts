/**
 * Created by christiancueni on 06/03/16.
 */
import {Component} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';

@Component({
    selector: 'topmenu',
    directives: [RouterLink],
    templateUrl: '/app/topmenu.component.html'
})
export class TopMenuComponent {

    private navClass = 'main';

    constructor(private router:Router) {
        router.subscribe((route) => {
            if (route.indexOf('books') === 0) {
                this.navClass = 'books';
            } else {
                this.navClass = 'main';
            }
        });
    }
}
