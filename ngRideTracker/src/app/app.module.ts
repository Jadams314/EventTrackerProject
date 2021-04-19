import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RideService } from './services/ride.service';
import { RideListComponent } from './components/ride-list/ride-list.component';
import { FormsModule } from '@angular/forms';
import { DeletedPipe } from './pipes/deleted.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RideListComponent,
    DeletedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RideService,
    DeletedPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
