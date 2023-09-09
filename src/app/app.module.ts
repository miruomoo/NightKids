import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarListComponent } from './components/carBook/car-list/car-list.component';
import { CarItemComponent } from './components/carBook/car-item/car-item.component';
import { CarDetailComponent } from './components/carBook/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarItemComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}