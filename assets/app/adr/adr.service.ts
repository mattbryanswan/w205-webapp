import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class AdrService {

    constructor(private http: Http) {}

    getDrugs() {

        return this.http.get('http://localhost:3000/adr/drugs').map( res => res.json() );

    }
}
