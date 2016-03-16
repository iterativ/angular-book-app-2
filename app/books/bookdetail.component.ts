import {Component, OnInit} from 'angular2/core';
import {RouteParams,  OnActivate, ComponentInstruction} from 'angular2/router';
import { FORM_DIRECTIVES } from 'angular2/common';
import {BooksService, IBook} from './books.service';
import {NoteService, INote} from './note.service';

@Component({
    selector: 'book-detail',
    providers: [BooksService, NoteService],
    directives: [FORM_DIRECTIVES],
    templateUrl: '/app/books/bookdetail.component.html'
})
export class BookDetailComponent implements OnActivate {

    private book:IBook;
    private notes:INote[] = [];
    private note:Object;
    private formActive:Boolean = true;

    constructor(private routeParams: RouteParams, private bookService: BooksService,
                private noteService:NoteService) {

        this.resetNote();
    }

    routerOnActivate(to: ComponentInstruction, from:ComponentInstruction) {
        let id = +this.routeParams.get('id');
        let detailPromise = new Promise((resolve) => {
            this.bookService.getBookDetailsById(id).subscribe((book) => {
                this.book = book;
                resolve(true);
            },
            error => console.log(error));
        });

        let notesPromise = new Promise((resolve) => {
            this.noteService.listNotes(id).then(noteList => this.notes = noteList);
            console.log("notes", this.notes);
            resolve(true);
        });
        return Promise.all([detailPromise, notesPromise]);
    }

    private saveNote(form) {
        this.noteService.saveNote(this.book.id, form.noteTitle, form.noteAuthor, form.noteText)
            .then((noteList) => {
                this.notes = noteList;
                this.resetNote();
                this.formActive = false;
                setTimeout(()=> this.formActive=true, 0);
            });
    }

    private deleteNote(noteId) {
        this.noteService.deleteNote(noteId).then(noteList => this.notes = noteList);
    }

    private resetNote() {
        this.note = {
            author: "",
            title: "",
            note: ""
        }
    }

}
