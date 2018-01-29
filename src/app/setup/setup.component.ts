import {Component, EventEmitter, OnInit} from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {DigitransitService} from '../services/digitransit.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

    constructor(public  digitransitService: DigitransitService, private router: Router) {
    }

    getStops() {
        this.router.navigate(['routes']);
    }

    ngOnInit() {
    }
}
