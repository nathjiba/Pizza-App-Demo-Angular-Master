import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';

@Component({
	templateUrl: 'pizza-listing.component.html'
})
export class PizzaListComponent implements OnInit {
	pizzas;
	toppings;
	totalPizzas = [];
	totalToppings = [];
	selectedIdx = [];
	selectedToppingsIdx = [];
	pizzasTotal = 0;
	toppingsTotal = 0;

	constructor(private pizzaService: PizzaService) {}

	ngOnInit() {
		this.pizzaService.getPizzas()
			.subscribe(res => this.pizzas = res);
		this.pizzaService.getToppings()
			.subscribe(res => this.toppings = res);
	}

	updateTotalToppingsPrice(){
		this.toppingsTotal = this.totalToppings.reduce((prev, curr) => {
				console.log(prev, curr.price);
			  return prev + curr.price;
			}, 0);
	}

	addPizzaToCart(pizza, selectedPizza){
		this.pizzasTotal += +selectedPizza.value;
	}
	// addPizzaToCart(pizza, index){
	// 	if(this.totalPizzas.indexOf(pizza) > -1){
	// 		this.totalPizzas.splice(this.totalPizzas.indexOf(pizza), 1);
	// 		this.selectedIdx[index] = false;
	// 	} else {
	// 		this.totalPizzas.push(pizza);
	// 		this.selectedIdx[index] = true;		
	// 	}
	// }


	addToppingsToCart(topping, index){
		if(this.totalToppings.indexOf(topping) > -1){
			this.totalToppings.splice(this.totalToppings.indexOf(topping), 1);
			this.selectedToppingsIdx[index] = false;
		} else {
			this.totalToppings.push(topping);
			this.selectedToppingsIdx[index] = true;		
		}

		this.updateTotalToppingsPrice();
	}


}