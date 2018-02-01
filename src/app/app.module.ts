import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DigitransitService} from './services/digitransit.service';
import { AgmCoreModule } from '@agm/core';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import { DirectionClassPipe } from './pipes/direction-class.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    RouteDirectionPipe,
    DirectionClassPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyC0_usCoiEv-aH2LFGuugwexfjZYcsrUcs'
      }),
    BrowserAnimationsModule,
      MatIconModule
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
