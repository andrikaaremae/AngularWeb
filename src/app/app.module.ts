import { SummaryPipe } from './summary.pipe';
import { TiresService } from './tires/tires.service';
import { BikesService } from './bikes/bikes.service';
import { NgModule, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiresComponent } from './tires/tires.component';
import { BikesComponent } from './bikes/bikes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TiresComponent,
    BikesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    BikesService,
    TiresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
