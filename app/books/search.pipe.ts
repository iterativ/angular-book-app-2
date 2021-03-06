/**
 * Created by christiancueni on 08/03/16.
 */
import {Pipe} from "angular2/core";
import {IBook} from './books.service';

@Pipe({
    name: "search"
})
export class SearchPipe{
    transform(value:IBook[], args?){
        let [query] = args;

        if (!value) {
            return [];
        }
        if (!query || query == "") {
            return value;
        }
        return value.filter((item)=> item.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
}