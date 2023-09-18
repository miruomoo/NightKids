import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarComponent } from "./components/car/car.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { CarStartComponent } from "./components/car/car-start/car-start.component";
import { CarDetailComponent } from "./components/car/car-detail/car-detail.component";

const appRoutes: Routes = 
    [
    {path: '', redirectTo: 'cars', pathMatch:'full'},
    {path: 'cars', component: CarComponent, children: [
        {path: '', component: CarStartComponent},
        {path: ':id', component: CarDetailComponent},
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
    ]

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {}