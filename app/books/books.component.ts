import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {BookListComponent} from './booklist.component';
import {BookDetailComponent} from './bookdetail.component';
import {EmptyComponent} from './empty.component';

@Component({
    selector: 'books',
    directives: [RouterOutlet, BookListComponent],
    templateUrl: '/app/books/books.component.html'
})
@RouteConfig([
    {path:'/',    name: 'BookList',   component: EmptyComponent, useAsDefault: true},
    {path:'/:id', name: 'BookDetail', component: BookDetailComponent}
])
export class BooksComponent {

    constructor() {}

}
