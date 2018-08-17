import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PostsService {
	private postUrl = 'https://hkapi.azurewebsites.net/posts/';
	constructor(private http: Http) {}

	getPosts(){
		return this.http.get(this.postUrl)
					.map(response => response.json());
	}

	getPost(postId){
		return this.http.get(this.postUrl + postId)
					.map(response => response.json());
	}

	createPost(post){
		return this.http.post(this.postUrl, post)
					.map(response => response.json());
	}

	updatePost(post){
		return this.http.put(this.postUrl, post)
					.map(response => response.json());
	}

	removePost(postId){
		return this.http.delete(this.postUrl + postId)
					.map(response => response.json());
	}
}