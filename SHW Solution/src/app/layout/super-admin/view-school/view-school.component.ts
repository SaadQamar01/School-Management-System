import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-view-school',
    templateUrl: './view-school.component.html',
    styleUrls: ['./view-school.component.scss'],
    animations: [routerTransition()]
})
export class ViewSchoolComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
