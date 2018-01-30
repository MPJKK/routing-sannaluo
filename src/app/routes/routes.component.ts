import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
    reittiTaulukko: any;
    lat: any;
    lon: any;
    placeUrl = '';
    apiKey = 'AIzaSyAtogVRkf6njZxzyKSCUa17nx6wUDNYfg8';
    mapSource: any;
    dangerousMapSource: any;

    title = 'Satellite:';

    route = '';


   // satellite = 'satellite';


    constructor(private digitransitService: DigitransitService, private sanitizer: DomSanitizer) {
    }

    updateMapUrl(apiKey: string, lat: string, lon: string) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data so
        // that it's easier to check if the value is safe.
        this.dangerousMapSource = 'https://www.google.com/maps/embed/v1/view?key=' + this.apiKey + '&center=' + this.lat + '+' + this.lon + '&zoom=15';
        this.mapSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousMapSource);
    }

    ngOnInit() {
        this.digitransitService.getRoutes().subscribe(response => {
            this.route = this.digitransitService.stopName;
            console.log(response.data['stops'][0].patterns);
            this.reittiTaulukko = response.data['stops'][0].patterns;
           this.lat = response.data['stops'][0].lat;
            this.lon = response.data['stops'][0].lon;
            this.placeUrl = 'https://maps.google.fi/maps/place/' + this.lat + '+' + this.lon;
            // this.mapSource = 'https://www.google.com/maps/embed/v1/view?key=' + this.apiKey + '&center=' + this.lat + '+' + this.lon + '&zoom=15';
            console.log(this.placeUrl);
            console.log(this.mapSource);
            this.updateMapUrl(this.apiKey, this.lat, this.lon);

        });
    }

}
