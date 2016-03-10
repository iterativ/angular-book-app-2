import { Injectable } from 'angular2/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';

export interface INote {
    id:Number,
    bookId: Number,
    title:String,
    author:String,
    note:String
}

@Injectable()
export class NoteService {

    private noteList:INote[] = [];
    private index: Number = 0;

    listNotes(bookId:Number) {
        return _.filter(this.noteList, note => note.bookId === bookId);
    }

    //searchNotes() {
    //    return this.noteList;
    //}

    saveNote(bookId:Number, title:string, author:String, text:String):INote[]  {
        let newNote = {
            id: this.index,
            bookId: bookId,
            title: title,
            author: author,
            note: text
        };
        this.noteList.push(newNote);
        this.index++;
        return this.listNotes(bookId);
    }

    deleteNote(noteId):INote[] {
        console.log(noteId);
        _.remove(this.noteList, (note) => {
            console.log(note, noteId);
            return note.id === noteId
        });
        console.log(this.noteList);
        return this.noteList;
    }
}

