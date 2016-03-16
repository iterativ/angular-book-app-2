import { Injectable } from 'angular2/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';

export interface INote {
    id:number,
    bookId: number,
    title:string,
    author:string,
    note:string
}

@Injectable()
export class NoteService {

    private noteList:INote[] = [];
    private index: number = 0;

    listNotes(bookId:number):Promise<INote[]> {
        return Promise.resolve(_.filter(this.noteList, note => note.bookId === bookId));
    }


    saveNote(bookId:number, title:string, author:string, text:string):Promise<INote[]>  {
        let newNote = {
            id: this.index,
            bookId: bookId,
            title: title,
            author: author,
            note: text
        };
        this.noteList.push(newNote);
        this.index++;
        return Promise.resolve(this.listNotes(bookId));
    }

    deleteNote(noteId):Promise<INote[]> {
        _.remove(this.noteList, (note) => {
            console.log(note, noteId);
            return note.id === noteId
        });
        return Promise.resolve(this.noteList);
    }
}

