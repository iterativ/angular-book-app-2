import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchPipe} from './search.pipe';
import {BooksService} from './books.service';

@Component({
    selector: 'book-list',
    directives: [ROUTER_DIRECTIVES],
    providers: [BooksService],
    pipes: [SearchPipe],
    templateUrl: '/app/books/booklist.component.html',
})
export class BookListComponent {

    books:Object[];
    filter:String;

    constructor(private bookService:BooksService) {

        this.bookService.getBooks().subscribe( (booksList) => {
            console.log(booksList);
            this.books = booksList
        });

    }

}
