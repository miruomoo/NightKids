import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarItemComponent } from './components/car/car-list/car-item/car-item.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './components/shared/dropdown.directive';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { CarStartComponent } from './components/car/car-start/car-start.component';
import { CarEditComponent } from './components/car/car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarItemComponent,
    CarDetailComponent,
    CarComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    CarStartComponent,
    CarEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})

export class AppModule {}