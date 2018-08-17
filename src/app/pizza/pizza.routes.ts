import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './pizza-listing.component';

const routes = [
	{ path: '', component: PizzaListComponent }
];

export default RouterModule.forChild(routes);