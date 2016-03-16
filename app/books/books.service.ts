import { Injectable } from 'angular2/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from 'angular2/http';

export interface IBook {
    id:number,
    title:string,
    author:string,
    isbn:string
}

@Injectable()
export class BooksService {

    private booksUrl = '/app/books/bookdata.json';
    private googleBooksBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

    constructor (private http: Http) {}

    getBooks():Observable<IBook[]>  {
        return this.http.get(this.booksUrl)
            .map(res =>  res.json())
            .catch(this.handleError);
    }

    getBook(id:number):Observable<IBook> {
        return this.http.get(this.booksUrl)
            .map(res =>  res.json())
            .map((books:IBook[]) => {
                return _.find(books, {id: id});
            })
            .catch(this.handleError);
    }

    getBookDetailsByIsbn(isbn:string):Observable<IBook>  {
        var url = this.googleBooksBaseUrl + isbn;
        return this.http.get(url)
            .map(res =>  res.json().items[0])
            .catch(this.handleError);
    }

    getBookDetailsById(id:Number):Observable<IBook>  {
        return this.getBooks()
            .map((books) => {
                let book = _.find(books, {id: id});
                return book;
            })
            .mergeMap(book => this.getBookDetailsByIsbn(book.isbn), (book, response) => response);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

