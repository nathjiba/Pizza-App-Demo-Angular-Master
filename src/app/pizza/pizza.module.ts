import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { PizzaService } from './pizza.service';
import { PizzaListComponent } from './pizza-listing.component';
import pizzaRoutes  from './pizza.routes';

@NgModule({
  declarations: [
    PizzaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    pizzaRoutes
  ],
  providers: [ PizzaService ]
})
export class PizzaModule { }