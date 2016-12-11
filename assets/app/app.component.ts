import { Component } from '@angular/core';
import { AdrService } from './adr/adr.service';

@Component({
    selector: 'w205-webapp',
    providers: [ AdrService ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    drugs = {}

    constructor(private adrService : AdrService) {

        this.drugs = JSON.stringify(this.adrService.getDrugs());

    }

    about = {
        author: "Matt Swan, Zenobia Liendo and Marcus DeMaster",
        section: "W205-2"
    };

}
