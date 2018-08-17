import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PizzaService {
	private pizzaUrl = 'http://samplepizzaapi.azurewebsites.net/pizzas';
	private toppingsUrl = 'http://samplepizzaapi.azurewebsites.net/toppings';

	constructor(private http: Http) {}

	getPizzas(){
		return this.http.get(this.pizzaUrl)
					.map(response => response.json());
	}

	getToppings(){
		return this.http.get(this.toppingsUrl)
					.map(response => response.json());
	}

	// getPost(pizzaId){
	// 	return this.http.get(this.pizzaUrl + pizzaId)
	// 				.map(response => response.json());
	// }

	// createPost(post){
	// 	return this.http.post(this.pizzaUrl, post)
	// 				.map(response => response.json());
	// }

	// updatePost(post){
	// 	return this.http.put(this.pizzaUrl, post)
	// 				.map(response => response.json());
	// }

	// removePost(pizzaId){
	// 	return this.http.delete(this.pizzaUrl + pizzaId)
	// 				.map(response => response.json());
	// }
}