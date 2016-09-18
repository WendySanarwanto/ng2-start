import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})

export class AppComponent implements OnInit {
    constructor(){
        // TODO: Add initialisation when this component is created
    }

    ngOnInit(){
        // TODO: Add initialisation before this component is displayed
    }
}