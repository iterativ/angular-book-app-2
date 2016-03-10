import {Component, OnInit} from 'angular2/core';
import {RouteParams,  OnActivate, ComponentInstruction} from 'angular2/router';
import {BooksService} from './books.service';

@Component({
    selector: 'book-detail',
    providers: [BooksService],
    templateUrl: '/app/books/bookdetail.component.html'
    //template: '<h1>234</h1>'
})
export class BookDetailComponent implements OnActivate {

    book:Object;
    test:Boolean = false;

    constructor(private routeParams: RouteParams, private bookService: BooksService) {
    }

    routerOnActivate(to: ComponentInstruction, from:ComponentInstruction) {
        return new Promise((resolve) => {
            let id = +this.routeParams.get('id');
            this.bookService.getBookDetailsById(id).subscribe((book) => {
                this.book = book
                resolve(true);
            },
            error => console.log(error));
        });
    }
//
//    var vm = this;
//
//    vm.book = book;
//    vm.notes = null;
//
//    vm.buy = buy;
//    vm.listNotes = listNotes;
//    vm.searchNotes = searchNotes;
//    vm.saveNote = saveNote;
//    vm.deleteNote = deleteNote;
//    vm.download = download;
//
//    vm.collapsed = true;
//
//    activate();
//
//    $scope.$watch('vm.listNotes', function (newValue) {
//        console.log('ListNotes called');
//        console.log(newValue);
//    });
//
//    vm.clickImage = function() {
//        vm.collapsed = !vm.collapsed;
//    };
//
//    activate() {
//        $log.debug('BookDetailController activated');
//
//        // TODO: un-uncomment to see how messages are sent to sentry
//        //$raven.captureMessage('BookDetailController activated');
//
//        vm.listNotes();
//    }
//
//    buy() {
//        //$log.debug('Download this Book');
//
//        // TODO: un-uncomment to see how problems are captured with sentry
//        //$amazon.download('asdasd');
//
//        listNotes();
//    }
//
//    download() {
//        //$log.debug('Download this Book');
//
//        // TODO: un-uncomment to see how problems are captured with sentry
//        //$amazon.download('asdasd');
//
//        listNotes();
//    }
//
//    listNotes() {
//        bookNoteService.listNotes(vm.book.id).then(
//            function (hits) {
//                vm.notes = hits;
//            }, function (err) {
//                console.trace(err.message);
//            });
//
//    }
//
//    searchNotes(searchText) {
//        bookNoteService.searchNotes(vm.book.id, searchText).then(
//            function (hits) {
//                vm.notes = hits;
//            }, function (err) {
//                console.trace(err.message);
//            });
//    }
//
//    saveNote(newNoteTitle, newNoteText, newNoteAuthor) {
//        bookNoteService.saveNote(vm.book.id, newNoteTitle, newNoteText, newNoteAuthor).then(
//            function (resp) {
//                console.log('Elasticsearch response to indexing ' + newNoteTitle + '...');
//                console.log(resp);
//
//                //vm.newNoteTitle = null;
//                //vm.newNoteAuthor = null;
//                //vm.newNoteText = null;
//
//                vm.listNotes();
//            },
//            function (err) {
//                console.log('[ERROR] An error occurred whilst indexing: ' + newNoteTitle + '...');
//                console.log(err.message);
//
//                vm.listNotes();
//            });
//    }
//
//    deleteNote(noteId) {
//        bookNoteService.deleteNote(noteId).then(
//            function (resp) {
//                console.log('Elasticsearch response to deleting ' + noteId + '...');
//                console.log(resp);
//
//                vm.listNotes();
//            });
//    }
//
//}

}
